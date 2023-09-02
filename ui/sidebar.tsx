"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Book, BookMarkedIcon, Bot, Home, Menu, MenuIcon, Paperclip, ThermometerIcon, TrendingUp } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Home",
    icon: <Home className="w-6 h-6" />,
    route: "/",
  },
  {
    id: 3,
    title: "AMA",
    icon: <Bot className="w-6 h-6" />,
    route: "/ama",
  },
];

const Sidebar = () => {

  return (
    <div className={`m-6 rounded-lg transition-opacity bg-stone-50 w-1/6`}>
      <ul className={`m-6`}>
        {data.map((item: any) => (
          <Link
            key={item.id}
            href={item.route}
            className="flex my-6 items-center hover:scale-105 transition-all justify-between rounded-md px-2 py-1 text-stone-600 hover:bg-stone-100"
          >
            <div className="flex items-center space-x-2">
              <div className="rounded-sm p-1">
                {item.icon}
              </div>
              <span className="text-md">{item.title}</span>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
