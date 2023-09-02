
import Navbar from "@/ui/navbar";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center sm:px-5">
      <Navbar />
      <div className="w-full m-6 min-h-[85vh] flex">
        <h1 className="text-2xl mx-auto m-4">Welcome to Lawyers Marketplace</h1>
      </div>
    </div>
  );
}
