import Link from "next/link";
import Image from "next/image";
import MainNav from "@/components/main-nav";

export default function HomePage() {
  return (
    <div className="text-center min h-screen">
     <MainNav />
  <main className = "flex flex-col justify-center items-center gap-4 flex-12 bg-purple-400 text-2xl py-16">
    This my homepage 
    <Link href="/movies" className= "text-white text-sm bg-black rounded-full px-6 py-3"> go movies page</Link>
      
<Image src ="/assets/naming.png" alt= "namin" 
width ={800}
 height= {300} />


 {/* <footer className=" bg-orange-500 border-primary/20 bg background sticky top-0 z-50 w w-full border-b"  >this my footer</footer> */}

   </main>
   </div>
   
  );
}
