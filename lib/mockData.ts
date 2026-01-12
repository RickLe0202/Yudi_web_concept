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
  {
    id: 'room-1',
    name: 'Tech Talk',
    description: 'Discussion about latest technologies and trends',
    memberCount: 124,
    category: 'Technology',
    isPrivate: false,
    avatar: '/room-1',
  },
  {
    id: 'room-2',
    name: 'Design Inspiration',
    description: 'Share and discuss design ideas and inspiration',
    memberCount: 89,
    category: 'Design',
    isPrivate: false,
    avatar: '/room-2',
  },
  {
    id: 'room-3',
    name: 'Startup Hub',
    description: 'Network with entrepreneurs and startup founders',
    memberCount: 256,
    category: 'Business',
    isPrivate: false,
    avatar: '/room-3',
  },
  {
    id: 'room-4',
    name: 'Remote Work',
    description: 'Tips and discussions about remote work',
    memberCount: 178,
    category: 'Lifestyle',
    isPrivate: false,
    avatar: '/room-4',
  },
  {
    id: 'room-5',
    name: 'Web Development',
    description: 'Share code, ask questions, and learn together',
    memberCount: 342,
    category: 'Technology',
    isPrivate: false,
    avatar: '/room-5',
  },
  {
    id: 'room-6',
    name: 'Music Lovers',
    description: 'Discover and share music with like-minded people',
    memberCount: 567,
    category: 'Entertainment',
    isPrivate: false,
    avatar: '/room-6',
  },
]

export const features: Feature[] = [
  {
    id: 1,
    title: 'Real-time Messaging',
    description: 'Send and receive messages instantly with real-time synchronization across all devices.',
    icon: '💬',
  },
  {
    id: 2,
    title: 'Group Chats',
    description: 'Create groups and chat with multiple people at once. Perfect for teams and communities.',
    icon: '👥',
  },
  {
    id: 3,
    title: 'File Sharing',
    description: 'Share images, documents, and files easily with drag-and-drop functionality.',
    icon: '📎',
  },
  {
    id: 4,
    title: 'Voice & Video',
    description: 'Make crystal-clear voice and video calls directly from the chat interface.',
    icon: '📹',
  },
  {
    id: 5,
    title: 'End-to-End Encryption',
    description: 'Your conversations are secure with end-to-end encryption for maximum privacy.',
    icon: '🔒',
  },
  {
    id: 6,
    title: 'Cross-Platform',
    description: 'Available on web, iOS, and Android. Stay connected wherever you are.',
    icon: '📱',
  },
]

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

