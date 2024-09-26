import  CredentialsProvider  from "next-auth/providers/credentials"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const NEXT_AUTH = {
    providers: [
      CredentialsProvider({
        name: "Email",
        credentials: {
          username: {label: "Email", type: "text", placeholder: "Email"},
          password: {label: "Password", type: "password", placeholder: "Password",},
        },
        async authorize(credentials: any){
          // console.log(credentials)
          
          return {
            id: "1",
            name: credentials.username,
            email: credentials.password
          }
        }
      }),
      Google({
        name: "Google",
        clientId: process.env.GOOGLE_ID || "",
        clientSecret: process.env.GOOGLE_SECRET || "",
      }),
      // Discord({
      //   name: "Discord",
      //   clientId: "snowflake",
      //   clientSecret: "someSecrete"
      // }),
      Github({
        clientId: process.env.GITHUB_ID || "",
        clientSecret: process.env.GITHUB_SECRET || ""
      })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
    //   jwt: ({token, user} : any) => {
    //     // console.log("token:", token)
    //     // console.log("user:" ,user)
    //     // token.userId = token.sub
    //     // console.log(token)
  
    //     return token
    //   },
      session: ({session, token, user}: any) => {
        // console.log("session:",session, "token:", token,"user:", user)
        if(session && session.user){
          session.user.id = token.sub
        }
        console.log(session)
        return session
      }
    },
    // pages: {
    //     signIn: "/signin"
    // }
  }