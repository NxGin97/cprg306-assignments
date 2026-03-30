"use client";

import { useEffect } from "react";
import { useUserAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import LoginForm from "../components/LoginForm";

export default function Home() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, loading } = useUserAuth();
    const router = useRouter();

    if(loading) {
        return <p className="text-center mt-10"> Loading... </p>
    }
    
    useEffect(() => {
        if (user) {
        router.push("/week-10/shopping-list");
        }
    }, [user, router]);

return (
    <main className="bg-violet-100 py-10 min-h-screen">
        <div className=" p-10">
        
            {!user ? <LoginForm/> : <p className="text-center mt-10">Redirecting...</p>}
        </div>
    </main>
    );
}