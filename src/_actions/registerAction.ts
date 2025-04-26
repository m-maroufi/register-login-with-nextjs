"use server";

import { registerShema } from "@/utils/registerShema";
import { redirect } from "next/navigation";
import { z } from "zod";
// تعریف خروجی
type RegisterResult = {
  success: boolean;
  data?: z.infer<typeof registerShema>;
  errors?: Record<string, string[]>;
};
export async function registerUser(
  _prevState: any,
  formData: FormData
): Promise<RegisterResult> {
  const first_name = formData.get("first_name") as string;
  const last_name = formData.get("last_name") as string;
  const email = formData.get("email") as string;
  const phone_number = formData.get("phone_number") as string;
  const password = formData.get("password") as string;

  const formFields: z.infer<typeof registerShema> = {
    first_name,
    last_name,
    phone_number,
    password,
    email,
  };

  const result = registerShema.safeParse(formFields);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return {
      success: false,
      errors,
      data: formFields,
    };
  }

  //   validete is ok
  return {
    success: true,
    data: formFields,
  };
}
