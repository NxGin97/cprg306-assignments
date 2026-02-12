import PageHeader from "../components/PageHeader"
import ReturnHome from "../components/ReturnHome"
import NewItem from "./NewItem"

export default function Page() {
    return (
        <main className="bg-violet-100 py-10 h-screen">
            <PageHeader title="Week 5: Basic Interactivity" />
            <NewItem />
            <ReturnHome />
        </main>
    )
}