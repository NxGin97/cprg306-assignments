import { useUserAuth } from "../contexts/AuthContext"
import { useRouter } from "next/navigation";
    
export default function SignOut() {
    const { firebaseSignOut } = useUserAuth();
    const router = useRouter();
    
    const handleLogout = async () => {
        try {
            await firebaseSignOut();
            // router.replace("/auth")
        } catch (error) {
            console.error("Logout Failed: ", error);
        }
    };

    return(
        <button onClick={handleLogout} className="bg-red-700 opacity-100 text-white rounded-xl px-2 right-align w-40 text-center fixed  hover:scale-105 hover:ease-out hover:duration-150 py-3 active:opacity-70 bottom-5 right-5">
            Sign out
        </button>
    )
}