import z from "zod";
export const loginShema = z.object({
  email: z.coerce
    .string({ message: "ایمیل الزامی است" })
    .trim()
    .email({ message: "فرمت ایمیل نامعتبر است" }),

  password: z
    .string()
    .trim()
    .min(1, { message: "لطفا رمز عبور خود را وارد کنید" }),
});
