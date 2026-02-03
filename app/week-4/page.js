import ReturnHome from "../components/ReturnHome"
import PageHeader from "../components/PageHeader"
import ItemList from "./item-list"
import FilterListById from "../components/FilterListNav"

export default function Page() {
    return (
        <main className="bg-violet-100 py-10">
        <PageHeader title="Week 4: Shopping List" />
        <FilterListById />
        <ItemList />
        <ReturnHome />
        </main>
    )
}