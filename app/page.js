"use client" 

import NavListItem from "./components/NavListItem";
import PageHeader from "./components/PageHeader";
import { useUserAuth } from "./contexts/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SignOut from "./components/SignOut";

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
    pageLink: "week-5",
    },
    {
    title: "Week 6",
    pageLink: "week-6",
    },
    {
    title: "Week 7",
    pageLink: "week-7",
    },
    {
    title: "Week 8",
    pageLink: "week-8",
    },
    {
    title: "Week 9",
    pageLink: "week-9",
    },
    {
    title: "Week 10",
    pageLink: "week-10",
    },
  ];

  const {user, loading} = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if(!loading) {
      if(user) {
        router.replace("/");
      } else {
      router.replace("/auth") //or week-9 
      }
    }
  }, [user, loading, router]);

return (
  <main className="bg-violet-100 py-10">
    {loading ? (
      <p className="text-center mt-10">Loading...</p>
    ) : !user ? (
      <p className="text-center mt-10">Redirecting to login...</p>
    ) : (
      <>
        <PageHeader title="CPRG 306: Web Development 2 - Assignments" />
        <nav>
          <ul>
            {pages.map((page, index) => (<NavListItem key={index} {...page} />))}
          </ul>
        </nav>
      </>
    )}
    <SignOut/>
  </main>
);
}