import z, { date } from "zod";

export const registerShema = z
  .object({
    first_name: z.coerce
      .string({ message: "لطفا نام خود را وارد کنید" })
      .min(2, { message: "نام بیشتر از ۲ کارکتر است" }),
    last_name: z.coerce
      .string({ message: "لطفا نام خانوادگی خود را وارد کنید" })
      .min(2, { message: "نام خانوادگی بیشتر از ۲ کارکتر است" }),
    email: z.coerce
      .string({ message: "لطفا ایمیل خود را وارد کنید" })
      .email({ message: "لطفا ایمیل معتبر وارد کنید" }),
    phone_number: z.coerce
      .string({ message: "لطفا شماره موبایل خود را وارد کنید" })
      .regex(/^09\d{9}$/, {
        message: "شماره موبایل معتبر نیست (مثلاً: 09123456789)",
      }),
    password: z
      .string({ message: "لطفا رمز عبور را وارد کنید" })
      .min(5, { message: "رمز عبور باید حداقل ۵ کاراکتر باشد" })
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, {
        message: "رمز عبور باید شامل حرف و عدد باشد",
      }),
    confirm_password: z.string().optional(),
  })
  .refine(
    (data) => !data.confirm_password || data.confirm_password === data.password,
    {
      message: "رمز عبور و تکرار آن یکسان نیستد.",
      path: ["confirm_password"],
    }
  );
