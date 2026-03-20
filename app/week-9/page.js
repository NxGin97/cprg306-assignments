"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";
import { getFirebaseErrorMessage } from "../utils/firebaseErrors";

import ReturnHome from "../components/ReturnHome";

export default function Home() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, googleSignIn, facebookSignIn, emailSignIn } = useUserAuth();
    const router = useRouter();

    const [errorMessage, setErrorMessage] = useState("");

    //email and password form
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //once a user exists, enter shopping page
    useEffect(() => {
        if (user) {
      // redirect to shopping list when user logs in
    router.push("/week-9/shopping-list");
}
}, [user, router]);

    //for email and password login
    const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
        await emailSignIn(email, password);
    }
    catch (error) {
        setErrorMessage(getFirebaseErrorMessage(error));
    }
    };

    //for github and google
    const handleLogin = async (provider) => {
    try {
        await provider();
    } catch (error) {
        setErrorMessage(getFirebaseErrorMessage(error));
    }
};

    //styling short cuts
    const buttonStyle = "relative flex justify-center bg-white w-[420px] m-auto border-1 border-solid border-violet-600 opacity-80 p-2 rounded-md my-2";
    const iconStyle = "absolute left-4 top-2.5 text-lg ";
    const inputStyle= "w-full rounded-sm p-2 border border-gray-400 bg-violet-100 my-2 opacity-80 h-10";

return (
    <main className="bg-violet-100 py-10 min-h-screen">
    <div className=" p-10">
      {/* If user is NOT logged in */}
        {!user && (
            <section>
            <h2 className= "text-center text-3xl font-bold m-6">Sign In</h2>
            <div className="flex flex-col">
                <form onSubmit={handleEmailLogin} className="w-[420px] m-auto mb-7 rounded-xl border border-gray-300 p-4 bg-white">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputStyle}
                        />
                        <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={inputStyle}
                        />
                        {errorMessage && (<p className="text-red-500 text-sm mb-2">{errorMessage}</p>)}
                    <button className={`${inputStyle} bg-violet-700 opacity-100 text-gray-100 hover:opacity-80 active:opacity-60`} type="submit">Sign in</button>
                </form> 
                <p className="text-center mb-3"> or </p>
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
            <div className="flex flex-row justify-center gap-1 items-baseline">
                <p className="text-center text-sm mt-2"> Don't have an account?</p>
                <button
                onClick={() => router.replace("/week-9/sign-up")}
                className=" text-sm text-blue-600 underline hover:text-blue-400 hover:cursor-pointer">Sign up
                </button>
            </div>
            </section>
        )}
        </div>
        <ReturnHome />
    </main>
    );
}