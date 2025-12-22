
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Option, OptionIcon, SearchIcon } from 'lucide-react';
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlidersHorizontalIcon } from "lucide-react";

export default function MovieSelectors() {
  return (
    // <div className="flex items-center gap-3 w-full"></div>
    <div className="flex flex-col w-full gap-4 md:flex-row md:items-center md:justify-between">
      <SearchIcon className="h-4 w-4 text-muted-foreground" />
      <Input placeholder="search movie ..." className="h-9 flex-1" />

      {/* Status Filter */}
      <Select>
        <SelectTrigger className="h-9 w-[180px]">
          <SelectValue placeholder="filter by status" />
        </SelectTrigger>
        <SelectContent align="start">
          <SelectGroup>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Filters Button */}
      <Button variant="outline" size="sm" className="h-9">
        <SlidersHorizontalIcon className="mr-2 h-4 w-4" />
        Filters
      </Button>
    </div>
  );
}

// export default function MovieSelectors() {
//   return (
//     <div className="flex-1">
//         <div className="flex w-full items-center space-x-2 md:w-1/2 ">
//             <Input placeholder="search movie ..." className="h-9" />
//         </div>
//       <div className="flex items-center gap-2">
//         <Select>
//           <SelectTrigger className="h-9 w-[180px]">
//             <SelectValue placeholder="filter by status" />
//           </SelectTrigger>
//           <SelectContent align="start">
//             <SelectGroup>
//               {/* <SelectLabel>Fruits</SelectLabel> */}
//               <SelectItem value="all">All Statuses</SelectItem>
//               <SelectItem value="published">Published</SelectItem>
//               <SelectItem value="draft">Draft</SelectItem>
//               <SelectItem value="archived">Archived</SelectItem>
             
//             </SelectGroup>
//           </SelectContent>
//         </Select>
// <Button variant="outline" size="sm" className="h-9">
// <SlidersHorizontalIcon className="mr-2 h-4 w-4"/>Filters
// </Button>

//       </div>
//     </div>
//   );
// }
