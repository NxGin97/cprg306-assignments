export default function PageHeader({title}){
    return(
        <h1 className="rounded-xl bg-violet-200 max-w-[1060px] mx-auto text-center text-4xl p-8 text-gray-700 pb-10 sticky top-5 left-10 right-10 z-50 font-bold ">{title} </h1>
    )
}