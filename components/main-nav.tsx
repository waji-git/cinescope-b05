import Link from "next/link";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Badge } from "./ui/badge";

export default function MainNav() {
  return (
    <header className="border-primary/20 bg bg-background sticky top-0 z-50 w w-full border-b">
     <div className="container max-w-[87.5rem] mx-auto  px-36 flex h-16 items-center">
      <Link href= "/" className="flex items-center gap-2">
      <Logo className="h-8 w-8 border border-red-500" />
      
  <span className="text-primary text-xl font-bold">cincscope</span>
      <Badge className="h-8 w-5
       border border-amber-500" />
      <span className="text-primary text-xl font-bold">new Badge</span>
      </Link>

      <nav className="ml-auto flex items-center gap-4">
    <Link href="/movies">movies</Link>
    <Link href="/movies">genres</Link>
    <Link href="/movies">about</Link>
    <Link href="/movies">admin</Link>
      <ModeToggle />
      </nav>
      
     </div>
    </header>
  );
}