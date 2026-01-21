// "use server";

// import { signUp } from "@/lib/auth-client";

// import { auth } from "@/lib/auth";

// export const registerUser = async (_: any, formData: { get: (arg0: string) => any; }) => {
//   if (formData) {
//     const name = formData.get("name");
//     const email = formData.get("email");
//     const password = formData.get("password");

//     if (!name) {
//       return { success: false, message: "Name is required.", field: "name" };
//     }

//     if (!email) {
//       return { success: false, message: "Email is required.", field: "email" };
//     }

//     if (!password) {
//       return {
//         success: false,
//         message: "Password is required.",
//         field: "password",
//       };
//     }

//     try {
//       const { error } = await signUp.email(
//         {
//           email,
//           password,
//           name,
//           image: null,

//           callbackURL: "/dashboard",
//         },

//         {
//           onError: (ctx) => {
//             console.error("Registration error:", ctx.error);
//           },
//         }
//       );

//       const response = await auth.api.signUpEmail({
//         body: { email, password, name, image: null },
//       });

//       console.log("Registration response:", response);

//       return {
//         // success: !error,
//         // message: error ? error.message : "Registration successful.",

//         success: true,

//         message: "User registered successfully.",

//         field: "general",
//       };
//     } catch (error) {
//       console.error("Error registering user:", error);

//       // console.error("Error registering user:", error.message);

//       // return { success: false, message: "Registration failed." };

//       return {
//         success: false,
//         message: "User registration failed.",
//         field: "general",
//       };
//     }
//   }
// };

// // Server action to log in a user




// export const loginUser = async (_: any, formData: { get: (arg0: string) => any; }) => {
//   if (formData) {
//     const email = formData.get("email");
//     const password = formData.get("password");

//     if (!email) {
//       return { success: false, message: "Email is required.", field: "email" };
//     }

//     if (!password) {
//       return {
//         success: false,
//         message: "Password is required.",
//         field: "password",
//       };
//     }

//     try {
//       const response = await auth.api.signInEmail({
//         body: { email, password, rememberMe: true },
//       });

//       console.log("Login response:", response);

//       return {
//         success: true,
//         message: "User logged in successfully.",
//         field: "general",
//       };
//     } catch (error) {
//       console.error("Error logging in user:", error.message);

//       return {
//         success: false,
//         message: error.message || "Login failed.",
//         field: "general",
//       };
//     }
//   }
// };

// export const logoutUser = async () => {
//   try {
//     const response = await auth.api.signOut();

//     console.log("Logout response:", response);

//     return { success: true, message: "User logged out successfully." };
//   } catch (error) {
//     console.error("Error logging out user:", error);

//     return { success: false, message: "Logout failed." };
//   }
// };

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
