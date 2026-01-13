import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('user')

  // Chặn toàn bộ /app nếu chưa login
  if (!isLoggedIn && request.nextUrl.pathname.startsWith('/app')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}
