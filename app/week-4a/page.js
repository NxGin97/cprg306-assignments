import ReturnHome from "../components/ReturnHome"
import PageHeader from "../components/PageHeader"
import ItemByCategory from "./item-list-category"
import {FilterListByCategory} from "../components/FilterListNav"


export default function Page() {
    return (
        <main className="bg-violet-100 py-10">
        <PageHeader title="Week 4: Shopping List" />
        <FilterListByCategory />
        <ItemByCategory />
        <ReturnHome />
        </main>
    )
}