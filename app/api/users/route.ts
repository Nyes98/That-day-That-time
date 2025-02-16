import { prisma } from "@/shared/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("오긴허냐");
    const users = await prisma.user.findMany({});
    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    console.log("오긴허냐");

    const data = await request.json();
    const user = await prisma.user.create({
      data,
    });
    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to create user" },
      { status: 500 }
    );
  }
}
