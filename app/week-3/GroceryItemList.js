import Item from "./GroceryItem";

export default function GroceryItemList() {
    const item1 = {
    name: "Milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
    };
    
    const item2 = {
    name: "Bread 🍞",
    quantity: 2,
    category: "bakery",
    };
    
    const item3 = {
    name: "Eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
    };
    
    const item4 = {
    name: "Bananas 🍌",
    quantity: 6,
    category: "produce",
    };
    
    const item5 = {
    name: "Broccoli 🥦",
    quantity: 3,
    category: "produce",
    };
    
    const item6 = {
    name: "Chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
    };
    
    const item7 = {
    name: "Pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
    };
    
    const item8 = {
    name: "Spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
    };
    
    const item9 = {
    name: "Toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
    };
    
    const item10 = {
    name: "Paper towels, 6 pack",
    quantity: 1,
    category: "household",
    };
    
    const item11 = {
    name: "Dish soap 🍽️",
    quantity: 1,
    category: "household",
    };
    
    const item12 = {
    name: "Hand soap 🧼",
    quantity: 4,
    category: "household",
    };

    return (
        <section>
            <ul className="min-h-screen flex flex-col items-center justify-center font-size-30">
                <Item{...item1} />
                <Item{...item2} />
                <Item{...item3} />
                <Item{...item4} />
                <Item{...item5} />
                <Item{...item6} />
                <Item{...item7} />
                <Item{...item8} />
                <Item{...item9} />
                <Item{...item10} />
                <Item{...item11} />
                <Item{...item12} />
            </ul>
        </section>
    )
    }
