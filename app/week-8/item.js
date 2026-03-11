
const pStyle = "text-gray-700 capitalize";
const divStyle = "border-8 border-double border-violet-400 bg-white rounded-xl mx-auto p-5 my-5 "

//onSelect is added to each item whenever user clicks on it.
export default function Item({name, quantity, category, onSelect}) {

    return (
        <div className={`${divStyle} hover:bg-violet-100 hover:cursor-pointer`} onClick={onSelect}>
            <p className={pStyle}>{name}</p>
            <p className={pStyle}><span className="font-bold">Quantity: </span> {quantity}</p>
            <p className={pStyle}><span className="font-bold">Category: </span>{category}</p>
        </div>
    )
}

export function MealItem({name}) {
    return(
    <div className={`${divStyle} h-full`}>
        <p className={pStyle}>{name}</p>
    </div>
    )
}