import AdminHeader from '@/components/dashboard/admin-header';
import AdminSidebar from '@/components/dashboard/admin-sidebar'
import React from 'react'
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashBoardLayout({
  children,
}:Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
    
        <AdminHeader />
        <main className="flex-1 p-4 md:p-8">{children}</main>
  </SidebarInset>
    </SidebarProvider>
  );
}


