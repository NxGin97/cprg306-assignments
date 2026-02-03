import Link from "next/link";

//overall flex layout
export default function FilterListById() {
  return(
    <div className="mt-5 max-w-[850px] mx-auto">
      <div className="flex items-center justify-start gap-4 mt-5 "> 
        <p className="font-bold text-2xl opacity-80">Sort by:</p>
        <nav>
          <ul className="flex gap-2">
            <FilterListNavSelected title="Id" pageLink="week-4" />
            <FilterListNav title="Category" pageLink="week-4a" />
          </ul>
        </nav>
      </div>
    </div>
  )
}

export function FilterListByCategory() {
  return(
    <div className="mt-5 max-w-[850px] mx-auto">
      <div className="flex items-center justify-start gap-4 mt-5 "> 
        <p className="font-bold text-2xl opacity-80">Sort by:</p>
        <nav>
          <ul className="flex gap-2">
            <FilterListNav title="Id" pageLink="week-4" />
            <FilterListNavSelected title="Category" pageLink="week-4a" />
          </ul>
        </nav>
      </div>
    </div>
  )
}

//component 'buttons'
export function FilterListNav({ title, pageLink }) {
  return (
    <li className=" w-[120px] bg-white opacity-70 m-1 px-3 py-2 rounded-md text-center text-base text-violet-100 shadow-xl/20 hover:bg-violet-200 hover:opacity-90 ">
      <Link
        href={pageLink}
        className="block w-full h-full text-violet-800 text-md"> {title}
      </Link>
    </li>
  );
}

export function FilterListNavSelected({ title, pageLink }) {
  return (
    <li className=" w-[120px] bg-violet-800 opacity-75 m-1 px-3 py-2 rounded-md text-center text-base text-violet-100 shadow-xl/20">
      <Link
        href={pageLink}
        className="block w-full h-full text-white text-md">{title}
        </Link>
    </li>
  );
}