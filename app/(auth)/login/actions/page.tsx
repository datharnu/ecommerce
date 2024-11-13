"use server";

import { createClient } from "@/app/utils/superbase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/login/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/login/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

// "use server";

// import { createClient } from "@/app/utils/superbase/server";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

// export async function login(formData: FormData) {
//   const supabase = await createClient();

//   const data = {
//     email: formData.get("email") as string,
//     password: formData.get("password") as string,
//   };

//   const { error } = await supabase.auth.signInWithPassword(data);

//   if (error) {
//     // Return error instead of throwing
//     return { error: error.message };
//   }

//   revalidatePath("/", "layout");
//   redirect("/");
// }

// export async function signup(formData: FormData) {
//   const supabase = await createClient();

//   const data = {
//     email: formData.get("email") as string,
//     password: formData.get("password") as string,
//   };

//   const { error } = await supabase.auth.signUp(data);

//   if (error) {
//     // Return error instead of throwing
//     return { error: error.message };
//   }

//   revalidatePath("/", "layout");
//   redirect("/");
// }
