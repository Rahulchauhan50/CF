import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // If the path starts with /blogs, redirect to WordPress
  if (pathname.startsWith('/blogs')) {
    return NextResponse.redirect(`https://www.contentfoundry.in/${pathname}`);
  }

  return NextResponse.next();
}

// Optional: Configurations to apply middleware only to specific paths
export const config = {
  matcher: ['/blogs/:path*'], // Apply middleware only to paths starting with /blogs
};
