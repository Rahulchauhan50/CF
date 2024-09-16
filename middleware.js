import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // If the path starts with /blogs, redirect to WordPress
  if (pathname.startsWith('/blogs')) {
    return NextResponse.redirect(`https://www.contentfoundry.in/${pathname}`);
  }

  return NextResponse.next();
}
