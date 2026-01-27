import Link from "next/link";

export default function NavListItem({ title, pageLink }) {
  return (
    <li className="bg-gray-600 m-10 p-10 rounded-xl text-center text-xl text-gray-100 max-w-[650px] mx-auto shadow-xl/20 hover:scale-105 hover:ease-out hover:duration-100">
      <Link
        href={pageLink}
        className="block w-full h-full hover:text-amber-300 text-white text-2xl"
      >
        {title}
      </Link>
    </li>
  );
}
