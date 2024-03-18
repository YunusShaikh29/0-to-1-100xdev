import { NextRequest } from "next/server";

export function GET(){
    return Response.json({
        name: "yunus",
        password: "something"
    })
}

export async function POST(req: NextRequest){
    const body = await req.json()

    return Response.json({
        name: body.name,
        password: body.password
    })
}