"use client";

import { loginUser } from "@/_actions/loginAction";
import { loginShema } from "@/utils/loginShema";
import { notify } from "@/utils/toast";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useActionState, useEffect, useRef, useState } from "react";
import { z } from "zod";
const intialState: z.infer<typeof loginShema> = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const [formFields, setFormFields] = useState(intialState);
  const formRef = useRef<HTMLFormElement>(null); // اضافه کردن ref
  const [state, action, isPending] = useActionState(loginUser, undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (!state) return;
    const { success } = state;
    if (success) {
      notify("اعتبار سنجی با موفقیت انجام شد", "success", 4000);
      setFormFields(intialState); // پاک کردن فرم
      formRef.current?.reset();
      redirect("dashbord");
    } else {
      notify("لطفا فیلد ها را با دقت پر کنید", "error");
    }
  }, [state]);

  return (
    <form action={action} ref={formRef} className="mt-8 space-y-4 pb-4">
      <div className="input-field relative">
        <input
          type="email"
          placeholder="ایمیل"
          id="email"
          name="email"
          value={formFields.email}
          onChange={handleChange}
          className="relative w-full py-2 px-2 focus:outline-none placeholder:text-gray-400 placeholder:text-md"
        />
        {state?.errors?.email && (
          <Image
            className="absolute left-0 top-3"
            src={"/images/icons8-error.gif"}
            width={24}
            height={24}
            alt="error icon"
          />
        )}

        {state?.errors?.email && (
          <span className="text-[11px] font-bold text-red-500">
            {state?.errors?.email[0]}
          </span>
        )}
      </div>
      <div className="input-field relative">
        <input
          type="password"
          placeholder="کلمه عبور"
          id="password"
          name="password"
          value={formFields.password}
          onChange={handleChange}
          className="relative w-full py-2 px-2 focus:outline-none placeholder:text-gray-400 placeholder:text-md"
        />
        {state?.errors?.password && (
          <Image
            className="absolute left-0 top-3"
            src={"/images/icons8-error.gif"}
            width={24}
            height={24}
            alt="error icon"
          />
        )}
        {state?.errors?.password && (
          <span className="text-[11px] font-bold text-red-500">
            {state?.errors?.password[0]}
          </span>
        )}
      </div>
      <div className="text-xs flex items-center justify-between mt-5">
        <span className="text-gray-600">رمز عبور خود را فراموش کرده اید ؟</span>
        <a href="" className="text-royal-blue-500 underline underline-offset-8">
          فراموشی رمز عبور
        </a>
      </div>
      <div className="input-field mt-10">
        <button className="btn_primary font-bold">ورود به حساب</button>
      </div>
    </form>
  );
};

export default LoginForm;
