// "use server";
//  import { signUp } from "@/lib/auth-client";

// export const registerUser = async (currentState, formData)=> {
// if(formData){
//     const name = formData.get("name");
// const email = formData.get("email");
// const password = formData.get("password");

// console.log("registering user with:",{name,email,password})
// try {
//   const { data, error } = await signUp.email(
//     {
//       email,
//       password,
//       name,
//       image: null,
//       callbackURL: "/dashboard",
//     },
//     {
//       onSuccess: (ctx) => {
//         console.log("Registration successful:", ctx);
//       },
//       onError: (ctx) => {
//         console.log("Registration error:", ctx.error);
//       },
//     }
//   );

//   if (error) {
//     throw error;
//   }

//   return data;
// } catch (err) {
//   console.error("Error registering user:", err);
//   // throw err;
// }

// }
  
// };

"use server";

import { signUp } from "@/lib/auth-client";

export const registerUser = async (currentState: _ , formData: FormData) => {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.log("Registering user with:", { name, email, password });

    const { data, error } = await signUp.email(
      {
        email,
        password,
        name,
        image: null,
        callbackURL: "/dashboard",
      },
      {
        onSuccess: (ctx) => {
          console.log("Registration successful:", ctx);
        },
        onError: (ctx) => {
          console.log("Registration error:", ctx.error);
        },
      }
    );

    if (error) {
      console.error("SignUp error:", error);
      return { error: error.message || "Registration failed" };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Error registering user:", err);
    return { error: "Something went wrong" };
  }
};