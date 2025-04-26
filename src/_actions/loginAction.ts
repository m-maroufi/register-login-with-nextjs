"use server";

import { loginShema } from "@/utils/loginShema";
import { registerShema } from "@/utils/registerShema";
import { z } from "zod";
type LoginResult = {
  success: true | false;
  data?: z.infer<typeof loginShema>;
  errors?: Record<string, string[]>;
};
export async function loginUser(
  prevState: any,
  formData: FormData
): Promise<LoginResult | undefined> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const formFields = {
    email,
    password,
  };

  // validate zod
  const result = loginShema.safeParse(formFields);
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    console.log(errors);

    return {
      success: result.success,
      errors,
      data: formFields,
    };
  }

  // if success validate
  return {
    success: result.success,
    data: result.data,
  };
}
