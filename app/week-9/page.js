"use client";

// Import the useUserAuth hook
import { useEffect } from "react";
import { useUserAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";

import ReturnHome from "../components/ReturnHome";

// Use the useUserAuth hook to get the user object and the login and logout functions
export default function Home() {
    const { user, gitHubSignIn, googleSignIn, facebookSignIn } = useUserAuth();
    const router = useRouter();
    //Sign in using github

    const handleLogin = async (provider) => {
    try {
        await provider();
    } catch (error) {
        console.error("Login failed:", error);
    }
};

    useEffect(() => {
    if (user) {
      // redirect to shopping list when user logs in
    router.push("/week-9/shopping-list");
    }
}, [user, router]);

    //user is the user object returned from Firebase Authentication. 
    // If the user is not logged in, the value will be null.

    const buttonStyle = "relative flex justify-center bg-white w-[250px] m-auto border-1 border-solid border-gray-600 p-2 rounded-md my-2";
    const iconStyle = "absolute left-4 top-2.5 text-lg ";


return (
    <main className="bg-violet-100 py-10 min-h-screen">
    <div>
      {/* If user is NOT logged in */}
        {!user && (
            <section>
            <h2 className= "text-center text-3xl font-bold m-6">Sign In</h2>
            <div className="flex flex-col">
                <div className={buttonStyle}>
                    <FaGithub className={iconStyle}/>
                    <button  onClick={() => handleLogin(gitHubSignIn)}>Sign in with GitHub</button>
                </div>
                <div className={buttonStyle}>
                    <FaGoogle className={iconStyle}/>
                    <button onClick={() => handleLogin(googleSignIn)}>Sign in with Google</button>
                </div>
                {/* I planned to do facebook too, but there was just..  too many steps.  */}
                {/* <div className={buttonStyle}>
                    <FaFacebook className={iconStyle}/>
                    <button  onClick={() => handleLogin(facebookSignIn)}>Login with Facebook</button>
                </div> */}
            </div>
            </section>
        )}
        </div>
        <ReturnHome />
    </main>
    );
}