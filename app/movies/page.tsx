import Link from "next/link";
import MainNav from "@/components/main-nav";

export default function MoviesPage() {
  return (
     <div className="text-center min h-screen">
     <MainNav />
    <div className="text-center min h-screen">
        <main className = "flex flex-col justify-center items-center gap-4 flex-12 bg-purple-400 text-2xl py-60">This is My Movie page 
          <Link href="/" className= "text-white bg-black"> back home page</Link>
        </main>
             
    </div>
   </div>
  );
}
// h-96 bg-purple-400 flex flex-col justify-center items-center gap-4 flex-12
