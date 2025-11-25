
import MainNav from "@/components/main-nav";
import HeroBanner from "@/components/landing/hero-banner";
import FeaturedMovie from "@/components/landing/featured-movie";
import Footer from "@/components/shared/footer";



export default function HomePage() {
  return (
    <div className=" flex flex-col relative min h-screen">
     <MainNav />
     <main className="flex-1">
    <HeroBanner />
    <FeaturedMovie />
    </main>
  <Footer />
   </div>
   
  );
}
