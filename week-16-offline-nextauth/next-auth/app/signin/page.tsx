"use client"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();

    return <div>
        <button onClick={async () => {
            await signIn("google");
            router.push("/")
        }}>Login with google</button>

        <br />
        <button onClick={async () => {
            await signIn("github");
            router.push("/")
        }}>Login with Github</button>
        <br />
        <button onClick={async () => {
            const res = await signIn("credentials", {
                username: "",
                password: "",
                redirect: false,
            });
            console.log(res);
            router.push("/")
        }}>Login with email</button>
        
    </div>
}