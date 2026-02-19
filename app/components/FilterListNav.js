import Link from "next/link";
//Im sure theres probably a simpler way to do the toggle using active but my brain just can't
//overall flex layout 
export default function FilterListById() {
  return(
    <div className="mt-5 max-w-[850px] mx-auto">
      <div className="flex items-center justify-start gap-4 mt-5 "> 
        <p className="font-bold text-2xl opacity-80">Sort by:</p>
          <div className="flex gap-2">
            <SortTabActive title="Id" pageLink="week-4" />
            <SortTab title="Category" pageLink="week-4a" />
          </div>
      </div>
    </div>
  )
}

export function FilterListByCategory() {
  return(
    <div className="mt-5 max-w-[850px] mx-auto">
      <div className="flex items-center justify-start gap-4 mt-5 "> 
        <p className="font-bold text-2xl opacity-80">Sort by:</p>
          <div className="flex gap-2">
            <SortTab title="Id" pageLink="week-4" />
            <SortTabActive title="Category" pageLink="week-4a" />
          </div>
      </div>
    </div>
  )
}

const buttonStyle = "w-[120px] m-1 px-3 py-2 rounded-md text-center text-base text-violet-100 shadow-xl/20"

//component 'buttons'
export function SortTab({ title, pageLink }) {
  return (
    <li className={`${buttonStyle} bg-white opacity-70  hover:bg-violet-200 hover:opacity-90 hover:cursor-pointer`}>
      <Link
        href={pageLink}
        className="block w-full h-full text-violet-800 text-md"> {title}
      </Link>
    </li>
  );
}

export function SortTabActive({ title, pageLink }) {
  return (
    <li className={`${buttonStyle} bg-violet-800 opacity-75`}>
      <Link
        href={pageLink}
        className="block w-full h-full text-white text-md">{title}
        </Link>
    </li>
  );
}