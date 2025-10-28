// import MainNav from "@/components/main-nav";
// import Link from "next/link";
export default function GenresPage() {
   return (        
  
 <div className="flex flex-col min-h-screen items-center justify-center  p-6 gap-6">
    <h1 className="text-primary font-bold text-3xl text capitalize">This is my first Heading as h1</h1>
    
    <div className="flex gap-4">
    <div className="w-40 h-40 border-primary border text-xs text-center">border primary</div>
    <div className="w-40 h-40 bg-primary text-xs text-center">background primary</div>
     <div className="w-40 h-40 outline-3 outline-primary text-xs text-center">outline</div>
  
      <div className="w-40 h-40  relative border border-primary"> 
        <h1 className="text-primary font-bold text-lg  text-center">Rgb seco</h1>
         <div className="w-20 h-20 bg-secondary absolute top-2 right-3"> </div>
       
      </div>
      <div className="w-40 h-40 relative bg-accent text-xs text-center"> name color</div>           
       
      </div>    
{/* 
  <div className="text-center min-h-screen">
      <MainNav />
      <main className="flex flex-col justify-center items-center gap-4 bg-purple-400 text-2xl py-60">
                <Link href="/" className="text-white bg-black px-4 py-2 rounded">Back Home Page </Link>
      </main>
      </div> */}
 </div> 
              )
} 
     

//     return (
//  <div className="flex min-h-screen items-center justify-center bg-amber-200 p-6 ">

// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4  gap-6">

// <div className="w-30 h-40 bg-red-200" >div-01</div>
//  <div className="w-30 h-40 bg-green-200" >div-01</div>
//  <div className="w-30 h-40 bg-purple-200" >div-01</div>
//  <div className="w-30 h-40 bg-orange-200" >div-01</div>
//  <div className="w-30 h-40 bg-pink-200" >div-01</div>
//  <div className="w-30 h-40 bg-cyan-200" >div-01</div>
//   <div className="w-30 h-40 bg-blue-200" >div-01</div>
//  <div className="w-30 h-40 bg-sky-200" >div-01 </div>
//  </div>
//   </div> 
// )
// }


//   example 01
 //       return (
//     <div className="flex flex-col md:flex-row bg-purple-300 min-h-screen">
   
//    <div className="h-20 w-30 p-6 bg-green-200 rounded text-center">div-1 </div>
//        <div className="h-20 w-30 p-6 bg-red-200 rounded text-center">div-2</div>
//        <div className="h-20 w-30 p-6 bg-orange-200 rounded text-center">div-3</div>
//         <div className="h-20 w-30 p-6 bg-yellow-200 rounded text-center">div-4 </div>
//      </div> 
     
//   )
// }
//   return (
//     <div className="flex flex-col md:flex-row bg-purple-300 min-h-screen">
   
//   <div className="flex-1 bg-green-200  text-center">div-1 </div>
//   <div className="flex-1 bg-red-200 text-center">div-2 </div>
//   <div className="flex-1 bg-orange-200  text-center">div-3 </div>
//   <div className="flex-1 bg-yellow-200  text-center">div-4 </div>
             
         
//         </div> 


//   )
// }

