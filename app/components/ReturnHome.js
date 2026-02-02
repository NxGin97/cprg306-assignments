import Link from "next/link";  

export default function ReturnHome() {
  return (
    <div className="bg-gray-600 text-white rounded-xl px-2 right-align w-40 text-center fixed  hover:scale-105 hover:ease-out hover:duration-150 py-3 bottom-5 right-5">
      <Link href="/">Go to Home Page</Link>
    </div>
  );
}