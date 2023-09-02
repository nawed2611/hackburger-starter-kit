import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <div className="flex font-[inter] min-h-screen flex-col items-center justify-center">
    <h1 className="text-4xl pb-2">Welcome to Lawyers</h1>
    <p className="text-lg pb-2">Find all your needs!</p>
    <SignIn />
  </div>
}
