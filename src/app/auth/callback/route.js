import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });

    try {
      const { error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error("Ошибка обмена кода на сессию:", error);
        return NextResponse.redirect(
          `${requestUrl.origin}/auth/error?message=${encodeURIComponent(
            error.message
          )}`
        );
      }

      // Успешная авторизация - перенаправляем на главную страницу
      return NextResponse.redirect(`${requestUrl.origin}/`);
    } catch (error) {
      console.error("Неожиданная ошибка:", error);
      return NextResponse.redirect(
        `${requestUrl.origin}/auth/error?message=unexpected_error`
      );
    }
  }

  // Если нет кода - перенаправляем на главную
  return NextResponse.redirect(requestUrl.origin);
}
