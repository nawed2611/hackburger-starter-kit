"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/ui/sidebar";
import { toast } from "sonner";
import Navbar from "@/ui/navbar";

export default function JournalLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center font-[inter]">
            <Navbar />
            <div className="m-6 flex min-h-[85vh] w-full">
                <Sidebar />
                <div className="w-5/6">{children}</div>
            </div>
        </div>
    );
}
