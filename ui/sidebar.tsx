"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Book,
  BookMarkedIcon,
  Bot,
  Home,
  LayoutDashboard,
  Menu,
  MenuIcon,
  Paperclip,
  ThermometerIcon,
  TrendingUp,
} from "lucide-react";

const data = [
  {
    id: 1,
    title: "Dashboard",
    icon: <LayoutDashboard className="h-6 w-6" />,
    route: "/dashboard",
  },
];

const Sidebar = () => {
  return (
    <div className={`m-6 w-1/6 rounded-lg transition-opacity`}>
      <ul className={`m-6`}>
        {data.map((item: any) => (
          <Link
            key={item.id}
            href={item.route}
            className="my-4 flex items-center justify-between rounded-md px-2 py-1 text-stone-600 transition-all hover:scale-105 hover:bg-stone-100"
          >
            <div className="flex items-center space-x-2">
              <div className="rounded-sm p-1">{item.icon}</div>
              <span className="text-md">{item.title}</span>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
