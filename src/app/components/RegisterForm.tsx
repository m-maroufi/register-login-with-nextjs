import React from "react";

const RegisterForm = () => {
  return (
    <form action="" className="mt-8 space-y-4 pb-4">
      <div className="input-field">
        <input
          type="text"
          placeholder="نام"
          id="first_name"
          name="first_name"
          className="relative w-full py-2 px-2 focus:outline-none placeholder:text-gray-400 placeholder:text-md"
        />
      </div>
      <div className="input-field">
        <input
          type="text"
          placeholder="نام خانوادگی"
          id="last_name"
          name="last_name"
          className="relative w-full py-2 px-2 focus:outline-none placeholder:text-gray-400 placeholder:text-md"
        />
      </div>
      <div className="input-field">
        <input
          type="text"
          placeholder="شماره تلفن"
          id="phone_number"
          name="phone_number"
          className="relative w-full py-2 px-2 focus:outline-none placeholder:text-gray-400 placeholder:text-md"
        />
      </div>
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
      <div className="input-field mt-10">
        <button className="btn_primary ">ایجاد حساب کاربری</button>
      </div>
    </form>
  );
};

export default RegisterForm;
