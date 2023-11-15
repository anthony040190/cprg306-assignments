"use client"
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import Layout from "./layout";


export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
        await gitHubSignIn();
    }
    
    const handleSignOut = async () => {
        await firebaseSignOut();
    }

    const handleButton = (user !== null) ? handleSignOut : handleSignIn;
    let displayTitle = (user !== null) ? "Sign Out" : "Sign in with GitHub";
    
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Shopping List App</h1>
            {
            (user !== null) && ( 
                <div>
                    <p>Sign in as {user.displayName} ({user.email})</p>
                </div>
            )}     
            <button onClick={() => { handleButton() }} className="cursor-pointer hover:underline">{ displayTitle }</button> <br />

            {
             (user !== null) && ( 
                <Link href="/week8/shopping-list/" className="cursor-pointer hover:underline">Continue to your Shopping List</Link>
            )}  
        </div>
    );
}
