export interface User {
  id: string
  name: string
  email: string
  avatar: string
  status: 'online' | 'offline' | 'away'
  lastSeen?: string
}

export interface Message {
  id: string
  conversationId: string
  senderId: string
  content: string
  timestamp: string
  type: 'text' | 'image' | 'file'
  isRead: boolean
}

export interface Conversation {
  id: string
  name: string
  type: 'direct' | 'group'
  participants: string[]
  lastMessage?: {
    content: string
    timestamp: string
    senderId: string
  }
  unreadCount: number
  avatar?: string
}

export interface ChatRoom {
  id: string
  name: string
  description: string
  memberCount: number
  category: string
  isPrivate: boolean
  avatar: string
}

export interface Feature {
  id: number
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  quote: string
  avatar: string
}

export const users: User[] = [
  {
    id: 'user-1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    avatar: '/avatar-1',
    status: 'online',
  },
  {
    id: 'user-2',
    name: 'Sarah Chen',
    email: 'sarah@example.com',
    avatar: '/avatar-2',
    status: 'online',
  },
  {
    id: 'user-3',
    name: 'Michael Rodriguez',
    email: 'michael@example.com',
    avatar: '/avatar-3',
    status: 'away',
    lastSeen: '2024-02-15T10:30:00Z',
  },
  {
    id: 'user-4',
    name: 'Emily Davis',
    email: 'emily@example.com',
    avatar: '/avatar-4',
    status: 'offline',
    lastSeen: '2024-02-15T08:15:00Z',
  },
  {
    id: 'user-5',
    name: 'David Kim',
    email: 'david@example.com',
    avatar: '/avatar-5',
    status: 'online',
  },
  {
    id: 'user-6',
    name: 'Jessica Martinez',
    email: 'jessica@example.com',
    avatar: '/avatar-6',
    status: 'online',
  },
]

export const conversations: Conversation[] = [
  {
    id: 'conv-1',
    name: 'Alex Johnson',
    type: 'direct',
    participants: ['user-1'],
    lastMessage: {
      content: 'Hey! How are you doing?',
      timestamp: '2024-02-15T14:30:00Z',
      senderId: 'user-1',
    },
    unreadCount: 2,
  },
  {
    id: 'conv-2',
    name: 'Design Team',
    type: 'group',
    participants: ['user-2', 'user-3', 'user-4'],
    lastMessage: {
      content: 'Sarah: The new design looks great!',
      timestamp: '2024-02-15T14:25:00Z',
      senderId: 'user-2',
    },
    unreadCount: 0,
    avatar: '/group-1',
  },
  {
    id: 'conv-3',
    name: 'Sarah Chen',
    type: 'direct',
    participants: ['user-2'],
    lastMessage: {
      content: 'Thanks for your help with the project',
      timestamp: '2024-02-15T13:45:00Z',
      senderId: 'user-2',
    },
    unreadCount: 0,
  },
  {
    id: 'conv-4',
    name: 'Development Team',
    type: 'group',
    participants: ['user-1', 'user-3', 'user-5'],
    lastMessage: {
      content: 'Michael: Code review is done',
      timestamp: '2024-02-15T12:20:00Z',
      senderId: 'user-3',
    },
    unreadCount: 5,
    avatar: '/group-2',
  },
  {
    id: 'conv-5',
    name: 'Emily Davis',
    type: 'direct',
    participants: ['user-4'],
    lastMessage: {
      content: 'See you tomorrow!',
      timestamp: '2024-02-14T18:00:00Z',
      senderId: 'user-4',
    },
    unreadCount: 1,
  },
]

export const messages: Message[] = [
  {
    id: 'msg-1',
    conversationId: 'conv-1',
    senderId: 'user-1',
    content: 'Hey! How are you doing?',
    timestamp: '2024-02-15T14:30:00Z',
    type: 'text',
    isRead: false,
  },
  {
    id: 'msg-2',
    conversationId: 'conv-1',
    senderId: 'current-user',
    content: "I'm doing great, thanks! How about you?",
    timestamp: '2024-02-15T14:31:00Z',
    type: 'text',
    isRead: true,
  },
  {
    id: 'msg-3',
    conversationId: 'conv-1',
    senderId: 'user-1',
    content: 'Pretty good! Working on a new project',
    timestamp: '2024-02-15T14:32:00Z',
    type: 'text',
    isRead: false,
  },
  {
    id: 'msg-4',
    conversationId: 'conv-2',
    senderId: 'user-2',
    content: 'The new design looks great!',
    timestamp: '2024-02-15T14:25:00Z',
    type: 'text',
    isRead: true,
  },
  {
    id: 'msg-5',
    conversationId: 'conv-2',
    senderId: 'user-3',
    content: 'Agreed! The color scheme is perfect',
    timestamp: '2024-02-15T14:26:00Z',
    type: 'text',
    isRead: true,
  },
  {
    id: 'msg-6',
    conversationId: 'conv-3',
    senderId: 'user-2',
    content: 'Thanks for your help with the project',
    timestamp: '2024-02-15T13:45:00Z',
    type: 'text',
    isRead: true,
  },
  {
    id: 'msg-7',
    conversationId: 'conv-4',
    senderId: 'user-3',
    content: 'Code review is done',
    timestamp: '2024-02-15T12:20:00Z',
    type: 'text',
    isRead: false,
  },
  {
    id: 'msg-8',
    conversationId: 'conv-4',
    senderId: 'user-5',
    content: 'Great work everyone!',
    timestamp: '2024-02-15T12:22:00Z',
    type: 'text',
    isRead: false,
  },
]

export const chatRooms: ChatRoom[] = [
  { id: 'p1', name: 'Spidey', description: 'I am chill, I like real life examples of math & science. I like humor and storytelling.', memberCount: 14, category: 'Student', isPrivate: true, avatar: '' },
  { id: 'p2', name: 'Ram', description: 'An active listener who listens while you describe your thoughts and feelings freely.', memberCount: 20, category: 'Empathetic', isPrivate: true, avatar: '' },
  { id: 'p3', name: 'Karthik', description: 'A man built on my own principles. I value resilience, integrity, and wisdom.', memberCount: 19, category: 'Thinker', isPrivate: true, avatar: '' },
  { id: 'p4', name: 'Ronaldo', description: 'Football is my life. Let’s discuss tactics, matches, and the GOAT debate.', memberCount: 15, category: 'Sports Fan', isPrivate: true, avatar: '' },
  { id: 'p5', name: 'Luna', description: 'Night owl and book lover. I can talk about mystery novels and poetry for hours.', memberCount: 12, category: 'Reader', isPrivate: true, avatar: '' },
  { id: 'p6', name: 'Aris', description: 'Philosophical mind. I enjoy debating the meaning of life and ethics.', memberCount: 8, category: 'Philosopher', isPrivate: true, avatar: '' },
  { id: 'p7', name: 'Maya', description: 'Just here to vibe and share travel stories from around the world.', memberCount: 25, category: 'Traveler', isPrivate: true, avatar: '' },
  { id: 'p8', name: 'Zen', description: 'Calm and quiet. Let’s have a peaceful conversation about mindfulness.', memberCount: 5, category: 'Meditator', isPrivate: true, avatar: '' },
  { id: 'p9', name: 'Echo', description: 'Tech enthusiast. Let’s talk about the future of AI and gadgets.', memberCount: 30, category: 'Techie', isPrivate: true, avatar: '' },
];

export const features: Feature[] = [
  { id: 1, title: 'Text-Only Focus', description: 'Pure, distraction-free messaging. No calls or media, just meaningful words.', icon: '✍️' },
  { id: 2, title: 'Persona Discovery', description: 'Browse unique profiles and connect with personalities that match your vibe.', icon: '🔍' },
  { id: 3, title: 'Instant Chat', description: 'Start a text conversation immediately with anyone in the gallery.', icon: '💬' },
  { id: 4, title: 'Total Privacy', description: 'Your conversations are private and text-secured. Chat with peace of mind.', icon: '🛡️' },
  { id: 5, title: 'Anonymous Vibes', description: 'Connect with strangers across the globe without the pressure of video or audio.', icon: '👤' },
  { id: 6, title: 'Clean Interface', description: 'A minimalist design focused entirely on the art of conversation.', icon: '✨' },
];
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechStart Inc.',
    quote: 'Yudi has transformed how our team communicates. The real-time messaging and group features make collaboration seamless.',
    avatar: '/avatar-1',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'DesignCo',
    quote: 'The best chat app we\'ve used. Clean interface, reliable performance, and excellent customer support.',
    avatar: '/avatar-2',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Developer',
    company: 'StartupHub',
    quote: 'As a developer, I appreciate the attention to detail and smooth user experience. Highly recommended!',
    avatar: '/avatar-3',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'CTO',
    company: 'InnovateLabs',
    quote: 'The security features and cross-platform availability make Yudi perfect for our distributed team.',
    avatar: '/avatar-4',
  },
]

