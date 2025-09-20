# Quick Setup Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Copy the example environment file and add your Supabase credentials:

```bash
# Copy the example file
cp env.local .env.local

# Edit .env.local with your actual Supabase credentials
```

**Required Environment Variables:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Run the Development Server
```bash
npm run dev
```

## 🎯 Demo Mode

The app works in **Demo Mode** without Supabase setup! You can:
- Try all features using localStorage
- Complete tasks and track progress
- View charts and analytics
- Export/import your data

## 🔧 Supabase Setup (Optional)

To enable full authentication and data persistence:

1. **Create a Supabase project** at [supabase.com](https://supabase.com)
2. **Run the database migration** in your Supabase SQL Editor:
   - Copy contents of `supabase/migrations/001_initial_schema.sql`
   - Run in Supabase SQL Editor
3. **Seed the database** with sample data:
   - Copy contents of `supabase/seed.sql`
   - Run in Supabase SQL Editor
4. **Update your `.env.local`** with real Supabase credentials

## 🎉 You're Ready!

Visit [http://localhost:3000](http://localhost:3000) to see your JLPT N5 Study Tracker!

### Features Available:
- ✅ 20-week study roadmap
- ✅ Progress tracking with charts
- ✅ Task management
- ✅ Demo mode (no signup required)
- ✅ Data export/import
- ✅ Responsive design
- ✅ Offline support

**頑張ってください！** (Good luck with your studies!) 🎌
