import Link from "next/link";
import MainNav from "@/components/main-nav";

export default function MoviesPage() {
  return (
     <div className="text-center min h-screen">
     <MainNav />
    <div className="text-center min h-screen">
        <main className = "h-96 bg-purple-400">content </main>
        <Link href="/" className= "text-white bg-black"> back home page</Link>
    <footer className="h-72 bg-orange-500" >this my footer</footer>
   </div>
   </div>
  );
}
