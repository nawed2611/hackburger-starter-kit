import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-[inter]">
      <h1 className="pb-2 text-4xl">Welcome to Hackburger Starter Kit</h1>
      <SignUp />
    </div>
  );
}
