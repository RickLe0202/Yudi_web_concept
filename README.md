# Yudi - Chat Application

A modern chat application landing page and app interface built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful landing page with multiple sections
- 💬 Chat app focused design and content
- 📱 Fully responsive design
- ⚡ Fast and optimized
- 🎯 App section with conversations, chat rooms, and messages
- 🔒 Security-focused features showcase
- 📝 User testimonials

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

- `app/` - Next.js App Router pages and layouts
  - `(app)/` - App section with route group
- `components/` - Reusable React components
  - `ui/` - UI components (Navigation, Footer)
  - `sections/` - Landing page sections
- `lib/` - Utilities and mock data
  - `mockData.ts` - Chat app mock data (users, conversations, messages, chat rooms)

## Technologies

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18

## Mock Data

The application uses mock data for:
- Users and user profiles
- Conversations (direct and group chats)
- Messages with timestamps and read status
- Chat rooms with categories and member counts
- Features and testimonials

## License

MIT

