
export default function SortButton({type, sortBy, setSortBy})  {

    const buttonStyle = "w-auto max-w-180 m-1 px-3 py-2 rounded-md text-center text-base text-violet-100 shadow-xl/20 justify-self-center capitalize text-nowrap "
    const buttonStyleActive = `${buttonStyle} bg-violet-800 opacity-75`
    const buttonStyleInactive = `${buttonStyle} bg-white opacity-70 text-violet-800 hover:bg-violet-200 hover:opacity-90 hover:cursor-pointer`
    //sortBy and setSortBy must get passed down by item-list to call it here. 

    return(
        <button onClick={() => setSortBy(type)} className={ sortBy === type ? buttonStyleActive : buttonStyleInactive }>{type}</button>
    )
}