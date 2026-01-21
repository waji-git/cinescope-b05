
"use server";

import { signUp } from "@/lib/auth-client";
import { auth } from "@/lib/auth";

type ActionResult = {
  success: boolean;
  message: string;
  field?: "email" | "password" | "name" | "general";
};

export async function registerUser(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  if (!name)
    return { success: false, message: "Name is required.", field: "name" };
  if (!email)
    return { success: false, message: "Email is required.", field: "email" };
  if (!password)
    return {
      success: false,
      message: "Password is required.",
      field: "password",
    };

  try {
    await signUp.email({
      email,
      password,
      name,
      image: undefined,
      callbackURL: "/dashboard",
    });

    return {
      success: true,
      message: "User registered successfully.",
      field: "general",
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: "User registration failed.",
      field: "general",
    };
  }
}

export async function loginUser(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  if (!email)
    return { success: false, message: "Email is required.", field: "email" };
  if (!password)
    return {
      success: false,
      message: "Password is required.",
      field: "password",
    };

  try {
    await auth.api.signInEmail({
      body: { email, password, rememberMe: true },
    });

    return {
      success: true,
      message: "User logged in successfully.",
      field: "general",
    };
  } catch (err: any) {
    return {
      success: false,
      message: err?.message ?? "Login failed.",
      field: "general",
    };
  }
}

export async function logoutUser() {
  await auth.api.signOut();
}
