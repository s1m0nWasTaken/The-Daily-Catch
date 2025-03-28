"use client";

import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '../../config/firebase'; 
import { doc, getDoc } from 'firebase/firestore';
import { getBasePath } from '../../utils/path';


type UserProtectedRoute = Readonly<{
  children: React.ReactNode;
}>;

export default function UserProtectedRoute({ children }: Readonly<{ children: ReactNode }>) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;
    
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!isMounted) return;
      
      if (!user) {
        console.log("No user, redirecting to login");
        const basePath = getBasePath();
        router.push(`${basePath}/login`);
        return;
      }

      const userRole = sessionStorage.getItem('userRole') ?? '';

      if (userRole === 'admin') {
        console.log("Admin accessing user area, allowing access");
        setAuthenticated(true);
        setLoading(false);
        return;
      }
      
      if (user.email === 'admin@thedailycatch.com') {
        sessionStorage.setItem('userRole', 'admin');
        setAuthenticated(true);
        setLoading(false);
        return;
      }
      
      try {
        const userDoc = await getDoc(doc(db, "user_roles", user.uid));
        
        if (userDoc.exists() && userDoc.data().role === "admin") {
          sessionStorage.setItem('userRole', 'admin');
        } else {
          sessionStorage.setItem('userRole', 'user');
        }
        
        setAuthenticated(true);
        setLoading(false);
      } catch (error) {
        console.error("Error checking user role:", error);
        setAuthenticated(false);
        router.push('/login?error=database');
      }
    });

    const timeoutId = setTimeout(() => {
      if (isMounted) {
        setLoading(false);
      }
    }, 3000);

    return () => {
      isMounted = false;
      unsubscribe();
      clearTimeout(timeoutId);
    };
  }, [router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return authenticated ? <>{children}</> : null;
}