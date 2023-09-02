import Navbar from "@/ui/navbar";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center sm:px-5">
      <Navbar />
      <div className="m-6 flex min-h-[85vh] w-full">
        <h1 className="m-4 mx-auto text-2xl">Welcome to Lawyers Marketplace</h1>
      </div>
    </div>
  );
}
