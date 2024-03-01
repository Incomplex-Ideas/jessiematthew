import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const apiUrl = process.env.API_URL;
const isMaintenance = process.env.MAINTENANCE_MODE === "true";
const baseUrl = process.env.BASE_URL;

export const config = {
  // ignore basic routing
  matcher: "/((?!api|_next/static|_next/image|favicon.ico|fonts).*)",
};

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  // if maintenance mode
  if (isMaintenance && !pathname.startsWith("/maintenance")) {
    return NextResponse.redirect(`${baseUrl}/maintenance`);
  }

  // if pathname start with /api
  if (pathname.startsWith("/api")) {
    const trillingApi = pathname.replace("/api", "");
    return NextResponse.rewrite(new URL(trillingApi + search, apiUrl));
  }
}
