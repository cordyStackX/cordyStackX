// src/app/services/api/getEmail/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const token = req.headers.get("x-api-token");
  if (token !== process.env.API_SECRET_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const emailB64 = process.env.CONTACT_EMAIL_B64 || "";
  return NextResponse.json({ email_b64: emailB64 });
}

// Optional: other HTTP methods
export async function GET() {
  return NextResponse.json({ error: "Use POST method" }, { status: 405 });
}
