import NavListItem from "./components/NavListItem";
import PageHeader from "./components/PageHeader";

export default function Home() {
  const pages = [
    {
    title: "Week 2",
    pageLink: "week-2",
    },
    {
    title: "Week 3",
    pageLink: "week-3",
    },
    {
    title: "Week 4",
    pageLink: "week-4",
    },
    {
    title: "Week 5",
    pageLink: "empty-page",
    },
    {
    title: "Week 6",
    pageLink: "empty-page",
    },
    {
    title: "Week 7",
    pageLink: "empty-page",
    },
    {
    title: "Week 8",
    pageLink: "empty-page",
    },
  ];

  return (
  <main className="bg-violet-100 py-10">
      <PageHeader title="CPRG 306: Web Development 2 - Assignments" />
      <nav>
        <ul>
          <NavListItem {...pages[0]} />
          <NavListItem {...pages[1]} />
          <NavListItem {...pages[2]} />
          <NavListItem {...pages[3]} />
          <NavListItem {...pages[4]} />
          <NavListItem {...pages[5]} />
          <NavListItem {...pages[6]} />
        </ul>
      </nav>
    </main>
  );
}
