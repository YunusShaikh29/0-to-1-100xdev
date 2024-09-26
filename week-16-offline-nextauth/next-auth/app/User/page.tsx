import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth"

async function page() {
    const session = await getServerSession(NEXT_AUTH)
  return (
    <>
    
    <div>User details page. Server component</div>
    {JSON.stringify(session)}
    </>

  )
}

export default page