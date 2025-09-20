# Roadmap to N5 - JLPT Study Tracker

A production-ready Next.js application for tracking JLPT N5 study progress with a structured 20-week roadmap. Built with modern web technologies and designed for optimal user experience.

## 🚀 Features

### Core Functionality
- **20-Week Study Roadmap**: Complete curriculum covering all JLPT N5 topics
- **Progress Tracking**: Visual charts and analytics to monitor learning progress
- **Task Management**: 1,400+ structured tasks across 6 categories
- **Demo Mode**: Try the app without signing up using localStorage
- **Offline Support**: Continue studying even without internet connection

### Study Categories
- **Hiragana**: Master the hiragana syllabary (Weeks 1-10)
- **Katakana**: Learn katakana characters (Weeks 11-20)
- **Vocabulary**: Essential JLPT N5 words and phrases
- **Grammar**: Fundamental Japanese grammar patterns
- **Listening**: Audio comprehension exercises
- **Reading**: Text comprehension and kanji recognition

### User Experience
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark/Light Mode**: Customizable appearance preferences
- **Progress Analytics**: Weekly trends, category breakdowns, and streak tracking
- **Data Export/Import**: Backup and restore your progress
- **Multi-language Support**: Interface available in multiple languages

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Lucide React** for icons
- **Recharts** for data visualization

### State Management
- **Zustand** for client-side state
- **React Hook Form** for form handling
- **Zod** for validation

### Backend & Database
- **Supabase** for authentication and database
- **PostgreSQL** with Row Level Security (RLS)
- **Email OTP** authentication

### Development Tools
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type checking

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/roadmap-to-n5-jlpt.git
cd roadmap-to-n5-jlpt
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Database Setup

#### Option A: Using Supabase CLI
```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your-project-ref

# Run migrations
supabase db push

# Seed the database
supabase db seed
```

#### Option B: Manual Setup
1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Run the migration script from `supabase/migrations/001_initial_schema.sql`
4. Run the seed script from `supabase/seed.sql`

### 5. Run the Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Set Environment Variables**
   - Go to your Vercel project dashboard
   - Navigate to Settings > Environment Variables
   - Add all variables from `.env.local`

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- **Netlify**: Use the Next.js build command
- **Railway**: Connect your GitHub repository
- **DigitalOcean App Platform**: Deploy from GitHub

## 📊 Database Schema

### Tables
- **profiles**: User account information
- **roadmap_weeks**: 20-week study structure
- **roadmap_days**: Daily study plans (140 days)
- **tasks**: Individual study tasks (1,400+ tasks)
- **progress**: User completion tracking

### Row Level Security (RLS)
- Users can only access their own progress data
- Roadmap data is publicly readable
- Profile data is user-specific

## 🎯 Usage

### For Students
1. **Start with Demo Mode**: Try the app without creating an account
2. **Create Account**: Sign up to sync progress across devices
3. **Follow the Roadmap**: Complete daily tasks in order
4. **Track Progress**: Monitor your improvement with charts and analytics
5. **Stay Motivated**: Use streak counters and achievement badges

### For Developers
1. **Fork the Repository**: Create your own version
2. **Customize Content**: Modify the roadmap and tasks
3. **Add Features**: Extend functionality as needed
4. **Deploy**: Use the provided deployment instructions

## 🔧 Configuration

### Customizing the Roadmap
Edit `supabase/seed.sql` to modify:
- Week titles and descriptions
- Daily task content
- Task categories and points
- Study progression

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update `src/app/globals.css` for global styles
- Customize components in `src/components/ui/`

### Features
- Enable/disable features in `src/lib/config.ts`
- Modify authentication in `src/middleware.ts`
- Update progress calculations in `src/stores/useProgressStore.ts`

## 📱 Mobile Support

The app is fully responsive and includes:
- Touch-friendly interface
- Mobile-optimized navigation
- Offline support for mobile users
- Progressive Web App (PWA) capabilities

## 🔒 Security

- **Row Level Security**: Database access is restricted by user
- **Authentication**: Secure email-based authentication
- **Data Validation**: All inputs are validated with Zod
- **HTTPS**: All communications are encrypted

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **JLPT Official Website**: For exam structure and requirements
- **Japanese Language Learning Community**: For content inspiration
- **Next.js Team**: For the amazing framework
- **Supabase Team**: For the backend infrastructure
- **shadcn/ui**: For the beautiful UI components

## 📞 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs and request features on GitHub
- **Discussions**: Join community discussions
- **Email**: support@roadmapn5.com

## 🗺️ Roadmap

### Version 1.1
- [ ] Spaced repetition system
- [ ] Mobile app (React Native)
- [ ] Social features and leaderboards
- [ ] Advanced analytics

### Version 1.2
- [ ] JLPT N4 and N3 roadmaps
- [ ] AI-powered study recommendations
- [ ] Voice recognition for pronunciation
- [ ] Gamification elements

---

**Happy Learning! 頑張ってください！** 🎌
