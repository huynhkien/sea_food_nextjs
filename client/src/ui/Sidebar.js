"use client";
import { usePathname } from 'next/navigation';
import SidebarAdmin from './admin/SidebarAdmin';
import SidebarUser from './member/Sidebar';


export default function ConditionalHeader() {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  return isAdminRoute ? <SidebarAdmin /> : <SidebarUser/>;
}
