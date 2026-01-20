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

export const registerUser = async (
  _: any,
  formData: { get: (arg0: string) => any }
) => {
  if (!formData) return;

  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!name) {
    return { success: false, message: "Name is required.", field: "name" };
  }

  if (!email) {
    return { success: false, message: "Email is required.", field: "email" };
  }

  if (!password) {
    return {
      success: false,
      message: "Password is required.",
      field: "password",
    };
  }

  try {
    await signUp.email(
      {
        email,
        password,
        name,
        image: undefined, // ✅ FIX
        callbackURL: "/dashboard",
      },
      {
        onError: (ctx) => {
          console.error("Registration error:", ctx.error);
        },
      }
    );

    const response = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
        image: undefined, // ✅ FIX
      },
    });

    console.log("Registration response:", response);

    return {
      success: true,
      message: "User registered successfully.",
      field: "general",
    };
  } catch (error: any) {
    console.error("Error registering user:", error);

    return {
      success: false,
      message: "User registration failed.",
      field: "general",
    };
  }
};
