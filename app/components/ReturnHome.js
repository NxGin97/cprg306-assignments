import Link from "next/link";  

export default function Return() {
  return (
    <div className="bg-gray-600 text-white rounded-xl p-2 right-align w-40 text-center fixed bottom-10 right-10 hover:scale-105 hover:ease-out hover:duration-150 ">
      <Link href="/">Go to Home Page</Link>
    </div>
  );
}