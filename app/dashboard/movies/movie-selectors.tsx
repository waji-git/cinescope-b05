

'use client';

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, SlidersHorizontalIcon } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MovieSelectors() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const isFirstRender = useRef(true);

  const initialQuery = searchParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  useEffect(() => {
    // prevent router push on first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const params = new URLSearchParams(searchParams.toString());

    if (searchTerm) {
      params.set("q", searchTerm);
    } else {
      params.delete("q");
    }

    router.push(`${pathname}?${params.toString()}`);
  }, [searchTerm, searchParams, pathname, router]);

  return (
    <div className="flex flex-col w-full gap-4 md:flex-row md:items-center md:justify-between mt-2">
      
      {/* Search */}
      <div className="flex items-center gap-2 flex-1">
        <SearchIcon className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search movie..."
          className="h-9"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Status Filter */}
      <Select>
        <SelectTrigger className="h-9 w-[180px]">
          <SelectValue placeholder="Filter by status" />
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
