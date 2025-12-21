"use client";

import { login } from "@/app/actions";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  async function handleLogin(formData: FormData) {
    const result = await login(formData);

    if (result.success) {
      router.push("/dashboard");
    }
  }

  return (
    <form action={handleLogin}>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Login</button>
    </form>
  );
}

// app/actions.ts

("use server");

import { cookies } from "next/headers";

export async function Login(formdata: FormData) {
  const email = formdata.get("email") as string;
  const password = formdata.get("password") as string;

  if (email === "user@example.com" && password === "password") {
    const cookieStore = await cookies();
    cookieStore.set("token", "fake-jwt-token", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });
    return { success: true };
  }

  return { success: false, error: "Invalid credentials" };
}

// export async function logout() {
//   const cookieStore = await cookies();
//   cookieStore.delete("token");
// }
