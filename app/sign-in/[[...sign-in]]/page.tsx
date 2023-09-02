import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-[inter]">
      <h1 className="pb-2 text-4xl">Welcome to Lawyers</h1>
      <p className="pb-2 text-lg">Find all your needs!</p>
      <SignIn />
    </div>
  );
}
