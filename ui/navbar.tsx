"use client";

import React, { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import Menu from "../app/menu";

const Navbar = () => {
    return (
        <div className="flex w-full items-center justify-between px-8 mt-4">
            <div className="">
                <h1 className="text-4xl">Lawyers</h1>
            </div>
            <div className="flex gap-x-4">
                <UserButton afterSignOutUrl="/" />
                <Menu />
            </div>
        </div>
    );
};

export default Navbar;
