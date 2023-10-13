"use client";
import Navbar from "@/ui/navbar";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useUser } from "@clerk/nextjs";
import { useCompletion } from "ai/react";
import { toast } from "sonner";

interface Chat {
  message: string;
  author: string;
}

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setChats([...chats, { message: input, author: 'user' }]);
    setLoading(true);

    fetch('/api/generate', {
      method: 'POST',
      body: JSON.stringify({
        message: input,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div className="border p-4 w-1/2 mx-auto">
      <div
        ref={chatContainerRef}
        className="mx-2 mt-2 h-[70vh] overflow-y-auto shadow"
      >
        {chats.map((chat, index) => (
          <div
            key={index}
            className={`mx-2.5 my-2 rounded-lg py-0.5 ${chat.author === 'user' ? 'text-right' : 'w-[90%] text-left'
              }`}
          >
            <span
              className={`inline-block rounded-lg px-2 py-0.5 text-base font-medium ${chat.author === 'user'
                ? 'rounded-br-none bg-[#FFEFD9] text-[#FF9500]'
                : 'rounded-bl-none bg-gray-100 text-black'
                }`}
            >
              {chat.message}
            </span>
          </div>
        ))}

        {loading && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity }}
            className="ml-2 mt-2 flex h-4 w-4 animate-spin items-start rounded-full ring-gray-400"
          >
            <div className="h-2 w-2 rounded-full bg-gray-400"></div>
          </motion.div>
        )}
      </div>
      <div className="z-1 mx-4 rounded-lg bg-gray-200 py-2 drop-shadow-md">
        <form onSubmit={handleSubmit} >
          <div className="flex items-center px-4 py-2">
            <input
              type="text"
              value={input}
              placeholder="Ask here..."
              disabled={loading}
              onChange={event =>
                setInput(
                  event.target.value
                )}
              className="w-full border-none bg-inherit text-[#707070] outline-none placeholder:text-[#707070]"
            />
          </div>
        </form>
      </div >
    </div >
  );
};
export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center sm:px-5">
      <Navbar />
      <div className="m-6 flex flex-col min-h-[85vh] w-full">
        <h1 className="m-4 mx-auto text-2xl">
          Welcome to Hackburger Starter Kit
        </h1>

        <Chatbot />
      </div>
    </div>
  );
}
