import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/", "/"]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) return;
  await auth.protect();
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// const isPublicRoute = createRouteMatcher(["/", "/navigatePage(.*)"]);
// const isAuthRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

// export default clerkMiddleware(async (auth, req) => {
//   const { userId } = await auth();
//   const { pathname } = req.nextUrl;

//   // Если пользователь авторизован и находится на странице авторизации
//   if (userId && isAuthRoute(req)) {
//     return NextResponse.redirect(new URL("/src/app/navigatePage", req.url));
//   }

//   // Если пользователь не авторизован и пытается попасть на защищенную страницу
//   if (!userId && !isPublicRoute(req) && !isAuthRoute(req)) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   // Защищаем приватные маршруты
//   if (!isPublicRoute(req)) {
//     await auth.protect();
//   }
// });

// export const config = {
//   matcher: [
//     "/((?!.+\\.[\\w]+$|_next).*)",
//     "/",
//     "/(api|trpc)(.*)",
//   ],
// };