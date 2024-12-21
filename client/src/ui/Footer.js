// components/ConditionalHeader.js
"use client"
import { usePathname } from 'next/navigation';
import Footer from "./public/Footer";


export default function ConditionalFooter() {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');
  const isUserRoute = pathname.startsWith('/user');

  return isAdminRoute || isUserRoute ? '' : <Footer />;
}
