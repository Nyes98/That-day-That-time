"use server";
import { prisma } from "@/lib/prisma";
import { LoginFormInputs } from "@/types/login.type";

export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany({});

    return { success: true, users };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to fetch users" };
  }
}

export async function createUser(data: LoginFormInputs) {
  try {
    const user = await prisma.user.create({
      data,
    });

    return { success: true, user };
  } catch (error) {
    console.error(error); // 에러 로깅
    return { success: false, error: "Failed to create user" };
  }
}
