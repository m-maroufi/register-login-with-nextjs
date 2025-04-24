import LoginForm from "@/app/components/LoginForm";
import LoginWithSocial from "@/app/components/LoginWithSocial";
import Image from "next/image";
import Link from "next/link";

export default async function Login() {
  const sleep = (ms: number = 1000) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await sleep();

  return (
    <>
      <div className="bg-catskill-white overflow-hidden min-h-screen relative pb-40 mobile-form lg:hidden">
        <Image
          src={"/images/header.svg"}
          alt=""
          className="fixed -top-3 right-0 z-10"
          width={297}
          height={155}
        />
        <div className="container mx-auto px-10 max-w-md w-full">
          <div className="head-form mt-30 flex items-center flex-col space-y-4 text-center">
            <h1 className="font-bold text-3xl text-center text-oxford-blue">
              به
              <span className="text-blue-500 inline-block mx-1">پادا</span>
              خوش آمدید
            </h1>
            <p className="font-medium text-sm text-gray-500">
              اطلاعات حساب کاربری خود را وارد کنید
            </p>
          </div>
          <LoginForm />
          <div className="or-line my-5 relative">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-catskill-white z-10 px-8 block">
              یا
            </span>
            <span className="border border-gray-300 block w-full"></span>
          </div>
          <LoginWithSocial />
        </div>
        <div className="text-center mt-6 text-sm text-gray-600">
          آیا هنوز حساب کاربری ندارید ؟
          <Link
            href={"/"}
            className="font-semibold text-lg text-royal-blue-500 inline-block px-3 py-1"
          >
            ثبت نام
          </Link>
        </div>
        <Image
          src={"/images/footer.svg"}
          alt=""
          className="fixed -bottom-3 left-0 z-10"
          width={155}
          height={155}
        />
      </div>
      <div className="desktop-form bg-catskill-white overflow-hidden h-[calc(100vh-24px)] relative hidden lg:flex md:items-center lg:container lg:max-w-6xl lg:w-full mx-auto py-6 px-4">
        <div className="banner w-1/2 relative h-full rounded-2xl overflow-hidden">
          <Image
            src="/images/sign-up.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="banner w-1/2 overflow-y-auto ">
          <div className="container mx-auto px-10 max-w-lg w-full">
            <div className="head-form  flex items-center flex-col space-y-4 text-center sticky top-0 z-10 bg-catskill-white ">
              <h1 className="font-bold text-3xl text-center text-oxford-blue">
                به
                <span className="text-blue-500 inline-block mx-1">پادا</span>
                خوش آمدید
              </h1>
              <p className="font-medium text-md text-gray-500">
                اطلاعات حساب کاربری خود را وارد کنید
              </p>
            </div>
            {/* login form */}
            <LoginForm />
            {/*  */}
            <div className="or-line h-10 relative flex items-center justify-center">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-catskill-white z-10 px-8 block">
                یا
              </span>
              <span className="border border-gray-300 block w-full"></span>
            </div>
            <LoginWithSocial />
          </div>
          <div className="text-center mt-6 text-sm text-gray-600">
            آیا هنوز حساب کاربری ندارید ؟
            <Link
              href={"/"}
              className="font-semibold text-lg text-royal-blue-500 inline-block px-3 py-1"
            >
              ثبت نام
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
