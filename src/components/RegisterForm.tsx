"use client";
import React, { useActionState, useEffect, useRef, useState } from "react";
import { registerUser } from "@/_actions/registerAction";
import Image from "next/image";
import { notify } from "@/utils/toast";
import { z } from "zod";
import { registerShema } from "@/utils/registerShema";
import { redirect } from "next/navigation";
const intialState: z.infer<typeof registerShema> = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  phone_number: "",
};
const RegisterForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formFields, setFormFields] = useState(intialState);
  const [state, action, isPending] = useActionState(registerUser, undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (!state) return;
    if (state?.success) {
      notify("اعتبار سنجی با موفقیت انجام شد", "success", 4000);
      setFormFields(intialState);
      form.current?.reset();
      redirect("dashbord");
    } else {
      notify("لطفا فیلد ها را با دقت پر کنید", "error");
      console.log(state.data);
    }
  }, [state]);
  return (
    <form ref={form} action={action} className="mt-8 space-y-2 pb-4">
      <div className="input-field relative">
        <input
          type="text"
          placeholder="نام"
          id="first_name"
          name="first_name"
          value={formFields?.first_name}
          onChange={handleChange}
          className={`relative w-full py-2 px-2 focus:outline-none placeholder:text-gray-400 placeholder:text-md`}
        />
        {state?.errors?.first_name && (
          <Image
            className="absolute left-0 top-3"
            src={"/images/icons8-error.gif"}
            width={24}
            height={24}
            alt="error icon"
          />
        )}
        {state?.errors?.first_name && (
          <span className="text-[11px] font-bold text-red-500">
            {state?.errors?.first_name[0]}
          </span>
        )}
      </div>
      <div className="input-field relative">
        <input
          type="text"
          placeholder="نام خانوادگی"
          id="last_name"
          name="last_name"
          value={formFields?.last_name}
          onChange={handleChange}
          className="relative w-full py-2 px-2 focus:outline-none placeholder:text-gray-400 placeholder:text-md"
        />
        {state?.errors?.last_name && (
          <Image
            className="absolute left-0 top-3"
            src={"/images/icons8-error.gif"}
            width={24}
            height={24}
            alt="error icon"
          />
        )}
        {state?.errors?.last_name && (
          <span className="text-[11px] font-bold text-red-500">
            {state?.errors?.last_name[0]}
          </span>
        )}
      </div>
      <div className="input-field relative">
        <input
          type="text"
          placeholder="شماره تلفن"
          id="phone_number"
          name="phone_number"
          value={formFields?.phone_number}
          onChange={handleChange}
          className="relative w-full py-2 px-2 focus:outline-none placeholder:text-gray-400 placeholder:text-md"
        />
        {state?.errors?.phone_number && (
          <Image
            className="absolute left-0 top-3"
            src={"/images/icons8-error.gif"}
            width={24}
            height={24}
            alt="error icon"
          />
        )}
        {state?.errors?.phone_number && (
          <span className="text-[11px] font-bold text-red-500">
            {state?.errors?.phone_number[0]}
          </span>
        )}
      </div>
      <div className="input-field relative">
        <input
          type="text"
          placeholder="ایمیل"
          id="email"
          name="email"
          value={formFields?.email}
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
          value={formFields?.password}
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
      <div className="input-field mt-10">
        <button
          className="btn_primary disabled:bg-royal-blue-200"
          disabled={isPending}
        >
          {!isPending ? "ایجاد حساب کاربری" : "کمی صبر کنید ..."}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
