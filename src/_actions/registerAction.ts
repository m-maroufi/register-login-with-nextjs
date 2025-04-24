"use server";

import { registerShema } from "@/utils/registerShema";
import { z } from "zod";

export async function registerUser(
  _prevState: z.infer<typeof registerShema>,
  formData: FormData
) {
  const sleep = (ms: number = 700) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await sleep();

  const entries = Object.fromEntries(formData.entries());

  const result = registerShema.safeParse(entries);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return {
      success: false,
      errors,
    };
  }

  //   validete is ok
  return {
    success: result.success,
    data: result.data,
  };
}
