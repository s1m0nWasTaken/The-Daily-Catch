// src/app/page.tsx
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { getBasePath } from '../utils/path';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Clear any existing sessions on app start
    const clearAndRedirect = () => {
      // Clear session storage to prevent auto-login
      sessionStorage.removeItem('userRole');
      
      // Always redirect to login page on first load
      router.push('/login');  // No need for basePath here
    };
    
    clearAndRedirect();
  }, [router]);

  // Add return statement for proper rendering
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}