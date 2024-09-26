import { NEXT_AUTH } from "@/app/lib/auth"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import Discord from "next-auth/providers/discord"
import Google from "next-auth/providers/google"


const handler = NextAuth(NEXT_AUTH)


export {handler as GET, handler as POST}