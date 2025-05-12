import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the pathname contains uppercase characters
  if (pathname !== pathname.toLowerCase()) {
    // Create new URL with lowercase pathname
    const lowercaseUrl = new URL(pathname.toLowerCase(), request.url)
    
    // Preserve query parameters and hash
    lowercaseUrl.search = request.nextUrl.search
    lowercaseUrl.hash = request.nextUrl.hash
    
    // Return redirect response
    return NextResponse.redirect(lowercaseUrl)
  }

  return NextResponse.next()
}

// Configure matcher for which paths middleware will run on
export const config = {
  matcher: [
    // Match all paths except those starting with:
    // - _next
    // - api (API routes)
    // - static (static files)
    // - favicon.ico
    '/((?!api|_next|static|favicon.ico).*)'
  ],
}