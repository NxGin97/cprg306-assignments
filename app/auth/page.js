"use client";

import { useEffect } from "react";
import { useUserAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import LoginForm from "../components/LoginForm";

export default function Home() {
   
    const { user } = useUserAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
    router.push("/");
}
}, [user, router]);

return (
    <main className="bg-violet-100 py-10 min-h-screen">
        <div className=" p-10">
            {!user ? <LoginForm/> : <p className="text-center">Redirecting...</p>}
        </div>
    </main>
    );
}