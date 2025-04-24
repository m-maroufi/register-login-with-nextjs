"use client";
import React, { useActionState, useEffect } from "react";
import { registerUser } from "@/_actions/registerAction";
import Image from "next/image";
import { notify } from "@/utils/toast";

const RegisterForm = () => {
  // @ts-ignore
  const [state, action, isPending] = useActionState(registerUser, {});
  useEffect(() => {
    if (state.success) {
      notify("اعتبار سنجی با موفقیت انجام شد", "success", 4000);
    }
    if (state.errors) {
      notify("لطفا فیلد ها را با دقت پر کنید", "error");
    }
  }, [state]);
  return (
    <form action={action} className="mt-8 space-y-2 pb-4">
      <div className="input-field relative">
        <input
          type="text"
          placeholder="نام"
          id="first_name"
          name="first_name"
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
