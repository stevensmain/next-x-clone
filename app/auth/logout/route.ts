import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const loginUrl = new URL("/", request.url);
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  await supabase.auth.signOut();

  revalidatePath("/", "layout");

  return NextResponse.redirect(loginUrl);
}
