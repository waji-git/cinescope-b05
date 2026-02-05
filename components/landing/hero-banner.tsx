
import React from "react";

export default function HeroBanner() {
  return (
    <section
      id="heroBanner"
      className="min-h-[100vh] w-full text-center py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/cine.jpg')" }}
    
    >
      {/* heroBanner */}
    </section>
  );
}
// import Image from "next/image";
// export default function HeroBanner() {
//   return (
//     <section className="relative min-h-screen w-full">
//       <Image
//         src="/cine.JPG"
//         alt="cine"
//         fill
//         priority
//         className="object-cover"
//       />
//       <div className="relative z-10 text-white text-center py-16">
//         heroBanner
//       </div>
//     </section>
//   );
// }