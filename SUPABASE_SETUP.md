# Supabase Setup Guide

This guide will help you set up Supabase for the Roadmap to N5 JLPT Study Tracker.

## 🚀 Quick Start

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign in with GitHub
4. Click "New Project"
5. Choose your organization
6. Enter project details:
   - **Name**: `roadmap-to-n5-jlpt`
   - **Database Password**: Generate a strong password
   - **Region**: Choose closest to your users
7. Click "Create new project"

### 2. Get Project Credentials

Once your project is created, go to Settings > API:

- **Project URL**: `https://your-project-ref.supabase.co`
- **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
- **Service Role Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## 🗄️ Database Setup

### 1. Run Migration Script

1. Go to SQL Editor in your Supabase dashboard
2. Click "New Query"
3. Copy and paste the contents of `supabase/migrations/001_initial_schema.sql`
4. Click "Run" to execute the migration

### 2. Seed the Database

1. In the SQL Editor, create another new query
2. Copy and paste the contents of `supabase/seed.sql`
3. Click "Run" to populate the database with initial data

### 3. Verify Setup

Check that the following tables were created:
- `profiles`
- `roadmap_weeks`
- `roadmap_days`
- `tasks`
- `progress`

## 🔐 Authentication Setup

### 1. Configure Email Templates

1. Go to Authentication > Email Templates
2. Customize the following templates:
   - **Confirm signup**
   - **Magic Link**
   - **Reset Password**

### 2. Set Redirect URLs

1. Go to Authentication > URL Configuration
2. Add your site URLs:
   - **Site URL**: `http://localhost:3000` (development)
   - **Redirect URLs**: 
     - `http://localhost:3000/dashboard`
     - `https://your-domain.com/dashboard`

### 3. Configure Email Settings

1. Go to Authentication > Settings
2. Configure SMTP settings (optional):
   - **SMTP Host**: Your email provider
   - **SMTP Port**: 587 or 465
   - **SMTP User**: Your email
   - **SMTP Pass**: Your password

## 🛡️ Row Level Security (RLS)

The migration script automatically sets up RLS policies. Here's what they do:

### Profiles Table
- Users can only view/update their own profile
- Users can insert their own profile

### Roadmap Data (Weeks, Days, Tasks)
- Public read access for all users
- No write access (data is managed by admins)

### Progress Table
- Users can only access their own progress
- Full CRUD operations on own data

## 📊 Database Schema

### Tables Overview

```sql
-- User profiles
profiles (
  id uuid PRIMARY KEY,
  email text UNIQUE NOT NULL,
  display_name text NOT NULL,
  timezone text DEFAULT 'UTC',
  created_at timestamp with time zone,
  updated_at timestamp with time zone
)

-- Study weeks (20 weeks)
roadmap_weeks (
  id uuid PRIMARY KEY,
  title text NOT NULL,
  order integer UNIQUE NOT NULL,
  created_at timestamp with time zone,
  updated_at timestamp with time zone
)

-- Study days (140 days)
roadmap_days (
  id uuid PRIMARY KEY,
  week_id uuid REFERENCES roadmap_weeks(id),
  day_number integer NOT NULL,
  title text NOT NULL,
  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  UNIQUE(week_id, day_number)
)

-- Study tasks (1,400+ tasks)
tasks (
  id uuid PRIMARY KEY,
  day_id uuid REFERENCES roadmap_days(id),
  label text NOT NULL,
  category task_category NOT NULL,
  points integer DEFAULT 1,
  created_at timestamp with time zone,
  updated_at timestamp with time zone
)

-- User progress tracking
progress (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES profiles(id),
  task_id uuid REFERENCES tasks(id),
  completed_at timestamp with time zone,
  note text,
  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  UNIQUE(user_id, task_id)
)
```

### Custom Types

```sql
-- Task categories
CREATE TYPE task_category AS ENUM (
  'hiragana',
  'katakana', 
  'vocab',
  'grammar',
  'listening',
  'reading'
);
```

## 🔧 Advanced Configuration

### 1. Database Functions

Create useful database functions:

```sql
-- Get user progress summary
CREATE OR REPLACE FUNCTION get_user_progress(user_uuid uuid)
RETURNS TABLE (
  total_tasks bigint,
  completed_tasks bigint,
  completion_percentage numeric
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COUNT(t.id) as total_tasks,
    COUNT(p.id) as completed_tasks,
    ROUND(COUNT(p.id)::numeric / COUNT(t.id)::numeric * 100, 2) as completion_percentage
  FROM tasks t
  LEFT JOIN progress p ON t.id = p.task_id AND p.user_id = user_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

### 2. Database Triggers

The migration includes triggers for `updated_at` timestamps:

```sql
-- Auto-update updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';
```

### 3. Indexes for Performance

```sql
-- Performance indexes
CREATE INDEX idx_roadmap_days_week_id ON roadmap_days(week_id);
CREATE INDEX idx_tasks_day_id ON tasks(day_id);
CREATE INDEX idx_tasks_category ON tasks(category);
CREATE INDEX idx_progress_user_id ON progress(user_id);
CREATE INDEX idx_progress_task_id ON progress(task_id);
CREATE INDEX idx_progress_completed_at ON progress(completed_at);
```

## 📈 Monitoring and Analytics

### 1. Database Monitoring

Supabase provides built-in monitoring:
- Go to Settings > Database
- View connection stats
- Monitor query performance
- Check storage usage

### 2. Custom Analytics

Create views for analytics:

```sql
-- Weekly progress by user
CREATE VIEW user_weekly_progress AS
SELECT 
  p.user_id,
  rw.order as week_number,
  COUNT(t.id) as total_tasks,
  COUNT(pr.id) as completed_tasks,
  ROUND(COUNT(pr.id)::numeric / COUNT(t.id)::numeric * 100, 2) as completion_percentage
FROM roadmap_weeks rw
JOIN roadmap_days rd ON rw.id = rd.week_id
JOIN tasks t ON rd.id = t.day_id
LEFT JOIN progress pr ON t.id = pr.task_id
GROUP BY p.user_id, rw.order
ORDER BY p.user_id, rw.order;
```

## 🔄 Data Management

### 1. Backup Strategy

```sql
-- Create backup
pg_dump -h your-host -U postgres -d postgres > backup.sql

-- Restore backup
psql -h your-host -U postgres -d postgres < backup.sql
```

### 2. Data Export

```sql
-- Export user progress
COPY (
  SELECT 
    p.email,
    pr.completed_at,
    t.label,
    t.category
  FROM profiles p
  JOIN progress pr ON p.id = pr.user_id
  JOIN tasks t ON pr.task_id = t.id
) TO '/tmp/user_progress.csv' WITH CSV HEADER;
```

### 3. Data Cleanup

```sql
-- Clean up old progress (older than 1 year)
DELETE FROM progress 
WHERE completed_at < NOW() - INTERVAL '1 year';

-- Clean up inactive users (no progress in 6 months)
DELETE FROM profiles 
WHERE id NOT IN (
  SELECT DISTINCT user_id 
  FROM progress 
  WHERE completed_at > NOW() - INTERVAL '6 months'
);
```

## 🚨 Troubleshooting

### Common Issues

#### Migration Fails
- Check if tables already exist
- Verify user permissions
- Check for syntax errors

#### RLS Policies Not Working
- Verify policies are enabled
- Check user authentication
- Test with different users

#### Performance Issues
- Check query execution plans
- Add missing indexes
- Optimize queries

### Debug Queries

```sql
-- Check RLS policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies
WHERE tablename IN ('profiles', 'progress');

-- Check user permissions
SELECT * FROM pg_roles WHERE rolname = 'authenticated';

-- Check table sizes
SELECT 
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```

## 🔐 Security Best Practices

### 1. API Keys
- Rotate keys regularly
- Use different keys for different environments
- Never commit keys to version control

### 2. Database Access
- Use connection pooling
- Limit concurrent connections
- Monitor for suspicious activity

### 3. Data Privacy
- Implement data retention policies
- Anonymize user data when possible
- Comply with GDPR/CCPA requirements

## 📞 Support

If you encounter issues:

1. Check the Supabase documentation
2. Review the troubleshooting section
3. Check GitHub issues
4. Contact Supabase support

---

**Database Setup Complete!** 🎉
