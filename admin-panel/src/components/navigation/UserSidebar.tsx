// src/components/UserSidebar.tsx
"use client";

import React from 'react';
import Link from 'next/link';

interface UserSidebarProps
{
  readonly isOpen: boolean;
  readonly setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function UserSidebar({ isOpen, setIsOpen }: UserSidebarProps)
{
  const closeSidebar = () =>
  {
    setIsOpen(false);
  };

  return (
    <>
      {/* Add overlay when sidebar is open */}
      {isOpen && (
        <button
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden w-full h-full border-0 cursor-default"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
        ></button>
      )}

      <div
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-[#0F243B] text-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } z-40 shadow-lg`}
      >
        <div className="p-4">
          <nav className="h-full flex flex-col">
            <ul className="space-y-2">
              <li>
                <Link href="/user/near-you" className="flex items-center p-2 rounded hover:bg-blue-700" onClick={closeSidebar}>
                  <span className="ml-3">Near You</span>
                </Link>
              </li>
              <li>
                <Link href="/user/profile" className="flex items-center p-2 rounded hover:bg-blue-700" onClick={closeSidebar}>
                  <span className="ml-3">My Profile</span>
                </Link>
              </li>
              <li>
                <Link href="/user/maps" className="flex items-center p-2 rounded hover:bg-blue-700" onClick={closeSidebar}>
                  <span className="ml-3">Maps</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}