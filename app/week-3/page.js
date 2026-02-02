import ReturnHome from "../components/ReturnHome";
import PageHeader from "../components/PageHeader";
import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="bg-violet-100 py-10">
      <PageHeader title="Week 3: Shopping List" />
      <GroceryItemList />
      <ReturnHome />
    </main>
  );
}