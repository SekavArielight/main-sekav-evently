import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/api", "/events/:id", "/api/webhooks/stripe", "/api/uploadthing"]); //addYourSpecificRoutesInHereInTheFormOfAnArrayElement

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth.protect();
  }
});

// export default clerkMiddleware({
//   publicRoutes: [
//     "/api",
//     "/events/:id",
//     "/api/webhooks/clerk",
//     "/api/webhooks/stripe",
//     "/api/uploadthing"
//   ],
//   ignoredRoutes: [
//     "/api/webhooks/clerk",
//     "/api/webhooks/stripe",
//     "/api/uploadthing"
//   ]
// });

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
