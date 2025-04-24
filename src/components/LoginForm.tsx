import React from "react";

const LoginForm = () => {
  return (
    <form action="" className="mt-8 space-y-4 pb-4">
      <div className="input-field">
        <input
          type="text"
          placeholder="ایمیل"
          id="email"
          name="email"
          className="relative w-full py-2 px-2 focus:outline-none placeholder:text-gray-400 placeholder:text-md"
        />
      </div>
      <div className="input-field">
        <input
          type="text"
          placeholder="کلمه عبور"
          id="password"
          name="password"
          className="relative w-full py-2 px-2 focus:outline-none placeholder:text-gray-400 placeholder:text-md"
        />
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
