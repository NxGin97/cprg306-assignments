export default function Item({name, quantity, category }) {
    const pStyle = "text-center text-gray-700 text-left";
    return (
        <li className="border-8 border-double border-violet-400 rounded-xl mx-auto w-[600px] p-5 my-5 ">
            <p className={pStyle}>{name}</p>
            <p className={pStyle}><span className="font-bold">Quantity: </span> {quantity}</p>
            <p className={pStyle}><span className="font-bold">Category: </span>{category}</p>
        </li>
    )
}