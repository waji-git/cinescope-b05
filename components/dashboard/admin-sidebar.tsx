import React from 'react'
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
} from "@/components/ui/sidebar";
import { Logo } from '@/components/shared/logo';
import { ModeToggle } from '@/components/mode-toggle';


export default function AdminSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      className="bg-primary/5 border-r border-primary/20"
    >
      <SidebarHeader>
        <div className="flex items-center p-2">
          <Logo />
          <h2 className="ml-2 text-xl font-bold"> CineScope 6</h2>

          <div className="ml-auto flex items-center">
            <ModeToggle />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='text-bold'>menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>dashboard</SidebarMenuItem>
              <SidebarMenuItem>movie </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

