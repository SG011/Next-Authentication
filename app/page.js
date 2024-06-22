import Image from "next/image";
import { getServerSession } from "next-auth";

export default function Home() {
  return (
    <>
    Server Session:
      {session?.user?.name ? 
      (
        <div>{session?.user?.name}</div>
      )
      :
      (
        <div>Not Logged In</div>
      )
    }
      <button onClick={() => signOut()}>Sign Out</button>
    </>  
  )
}
