# Yudi - Chat Application

A modern chat application landing page and app interface built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Engineering Stack

**Framework**: Next.js 14 
**Language**: TypeScript 
**Styling**: Tailwind CSS 
**State Management**: React Hooks 


## Technical Implementations
**Atomic Design**: 
  - Separation between structural layouts using nav, main, div tags.
  - Using element tags such as button, input, form.

**Route Groups**: Organized using Next.js (app) groups to isolate application logic from public landing pages.

## UI/UX Logic
  - Page-Driven Transitions: Smooth switching between page with navigation bar.
  - Responsive Layout: The web can be displayed in various devices from desktop, laptop to mobile phone.
  - Movable background: The background has stars and they are moving whenever mouse's pointer move.
  - Colorful button: By using CSS hover, the buttons are now more colorful and user-friendly.
  - Light/Dark mode: On navigation bar, there is a toggle which can make the main theme of website changing between dark theme and light theme, including background.
  - Grid layout: Display a chat room by using flex method in CSS, it also adjusts when changing size of display screen.
  - Hide and show: The advanced option in creating persona can be hide or show depending user choosing.
  - Auto scroll: Testimonials will be automatically scrolled to show the better views.
  - Navigation and Footer: Navigate the page, and more information in footer.
  
## Project Structure
  - `app/` : Landing page with general information.
  - `components/` : All feature and reusable section.
  - `components/sections/` : Sections that are used in landing page.
  - `components/ui/` : Navigation and Footer that used in landing page and app pages.
  - `components/utils/` : reusable utilities for the website.
  - `lib/` : Mock data
  - `app/app/` : Main chating and feature of website.
  - `app/auth/` : Login and Register pages.

## Feature
  - Mock chat: Can send a mock message and the chat reply with loading.
  - Mock call: Can make a phone call with a chat
  - Sample chat list: The chats are listed in grid with user-friendly design
  - Mock creation for persona: Have a creating feature like real app, with automatically fill with default button.
  - Preview the persona Icon. 
  - Advance option to more information can be input on persona creation page.
  - Dark/Light mode toggle on navigation bar. Users can change whenever they want.



### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the git:
```bash
git clone https://github.com/RickLe0202/Yudi_web_concept
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Technologies

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18

## Mock Data

The application uses mock data for:
- Users and user profiles
- Conversations with sample message
- Messages with timestamps and read status
- Chat rooms with categories and member counts
- Features and testimonials

## License

MIT

