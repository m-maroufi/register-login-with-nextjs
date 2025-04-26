"use client";

import { useState } from "react";
import {
  Home,
  Users,
  ShoppingCart,
  MessageSquare,
  BarChart2,
  Menu,
} from "lucide-react";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen flex bg-gray-100 relative">
      {/* بلر پس زمینه وقتی سایدبار بازه (فقط موبایل) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-20"
        />
      )}

      {/* سایدبار */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 left-auto h-screen w-64 bg-white shadow-lg p-4 flex flex-col justify-between transition-transform duration-300 z-30 md:translate-x-0 md:static md:h-auto md:shadow-none md:bg-transparent`}
      >
        <div>
          {/* دکمه باز/بسته */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-blue-600 mb-8 transition md:hidden"
          >
            <Menu size={24} />
          </button>

          {/* لوگو */}
          <div className="mb-10 hidden md:block">
            <h2 className="text-2xl font-bold text-blue-600">مدیریت</h2>
          </div>

          {/* منو */}
          <nav className="space-y-6">
            <SidebarLink icon={<Home size={20} />} label="خانه" />
            <SidebarLink icon={<Users size={20} />} label="کاربران" />
            <SidebarLink icon={<ShoppingCart size={20} />} label="سفارشات" />
            <SidebarLink icon={<MessageSquare size={20} />} label="پیام‌ها" />
            <SidebarLink icon={<BarChart2 size={20} />} label="آمار" />
          </nav>
        </div>

        {/* خروج */}
        <button className="text-red-500 font-semibold flex items-center gap-2 mt-10">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7"
            />
          </svg>
          <span>خروج</span>
        </button>
      </aside>

      {/* محتوای اصلی */}
      <section className="flex-1 p-8">
        {/* دکمه منو فقط موبایل */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-gray-600 hover:text-blue-600 mb-8 transition md:hidden"
        >
          <Menu size={28} />
        </button>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">داشبورد مدیریتی</h1>
          <p className="text-gray-500 mt-2">به پنل مدیریت خوش آمدید</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard title="کاربران" value="120" color="text-blue-500" />
          <DashboardCard title="سفارشات" value="75" color="text-green-500" />
          <DashboardCard title="نظرات" value="48" color="text-yellow-500" />
          <DashboardCard title="گزارشات" value="5" color="text-red-500" />
        </div>
      </section>
    </main>
  );
}

function SidebarLink({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition cursor-pointer">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

function DashboardCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
      <span className={`text-2xl font-bold ${color}`}>{value}</span>
      <p className="text-gray-600 mt-2">{title}</p>
    </div>
  );
}
