import "@/styles/globals.css";
import "@/styles/prosemirror.css";
import { dark } from "@clerk/themes";

import { Metadata } from "next";
import { ReactNode } from "react";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";

const title = "Hackburger - hackathon starter kit for Next.js";
const description =
  "Hackburger is a hackathon starter kit for Next.js with TypeScript, Tailwind CSS, and more.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@nawed2611",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className="font-[inter]">
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
