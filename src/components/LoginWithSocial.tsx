import Image from "next/image";
import React from "react";

const LoginWithSocial = () => {
  return (
    <div className="btns space-y-4 mt-5">
      <button className="btn_secondray group">
        ورود با حساب گوگل
        <Image
          src={"/images/Google.svg"}
          width={24}
          height={24}
          // className="group-hover:invert"
          alt="google icon"
        />
      </button>
      <button className="btn_secondray group">
        ورود با حساب گیت هاب
        <Image
          src={"/images/github.svg"}
          width={24}
          height={24}
          className="group-hover:invert"
          alt="git hub icon"
        />
      </button>
    </div>
  );
};

export default LoginWithSocial;
