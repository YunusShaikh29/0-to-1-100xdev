"use client"
import React from 'react'
import { signIn, signOut } from 'next-auth/react'
import { useSession } from "next-auth/react";


function Appbar() {
    const session = useSession()
  return (
    <div>
        <button onClick={() => signIn()}> Sign in </button>
        <button onClick={() => signOut()}> Log out </button>
        {JSON.stringify(session)}
    </div>
  )
}

export default Appbar