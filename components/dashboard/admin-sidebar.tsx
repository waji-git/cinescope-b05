'use client'
import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon,FilmIcon,UserIcon,UsersIcon,MessageSquareIcon,BarChartIcon,SettingsIcon } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Logo } from '@/components/shared/logo';
import { ModeToggle } from '@/components/mode-toggle';
 import { Item } from '@radix-ui/react-dropdown-menu';




const menuItems = [
  { title: "dashboard", href: "/dashboard", Icon: HomeIcon, exact: true },
  { title: "Movies", href: "/dashboard/movies", Icon: FilmIcon},
  { title: "Users", href: "/dashboard/users", Icon: UsersIcon },
  { title: "Reviews", href: "/dashboard/genres", Icon: MessageSquareIcon },
  { title: "Analytics", href: "/dashboard/Analytics", Icon: BarChartIcon },
  { title: "Settings", href: "/dashboard/settings", Icon: SettingsIcon },
];

const accountItems = [
  { title: "Profile", href: "/dashboard/profile", Icon: UserIcon },
  { title: "Public site", href: "/", Icon: FilmIcon },
  
];

export default function AdminSidebar() {
  const pathname =usePathname();
  const isActive =(Item: {href:string; exact?:boolean})=>{
if(Item.exact){
return pathname === Item.href;
}
if(Item.href==="/"){
  return pathname === "/"
}
return pathname.startsWith(Item.href);
  };
    
  
  return (
    <Sidebar
      collapsible="icon"
      className="bg-primary/5 border-r border-primary/20"
    >
      <SidebarHeader className="bg-primary/5">
        <div className="flex items-center p-2">
          <Logo />
          <h2 className="ml-2 text-xl font-bold"> CineScope 6</h2>

          <div className="ml-auto flex items-center">
            <ModeToggle />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-primary/5">
        <SidebarGroup>
          <SidebarGroupLabel className="text-bold">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((Item) => (
                <SidebarMenuItem key={Item.title}>
                  <SidebarMenuButton
                    className={
                      isActive(Item)
                        ? "bg-primary text-white font-medium hover:bg-primary/90 hover:text-white"
                        : "hover: bg-primary/10"
                    }
                    asChild
                  >
                    <Link href={Item.href}>
                      <Item.Icon className="size-4 " />
                      <span>{Item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-bold">Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((Item) => (
                <SidebarMenuItem key={Item.title}>
                  <SidebarMenuButton
                    className={
                      isActive(Item)
                        ? "bg-primary text-white  font-medium hover:bg-primary/90 hover:text-white"
                        : "hover: bg-primary/10"
                    }
                    asChild
                  >
                    <Link href={Item.href}>
                      <Item.Icon className="size-4 " />
                      <span>{Item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup />
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}

