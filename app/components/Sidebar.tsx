'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  HomeIcon,
  UsersIcon,
  DocumentTextIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { CgProfile } from "react-icons/cg";

type SidebarProps = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ selectedPage, setSelectedPage }) => {
  const menuItems = [
    { name: 'Dashboard', icon: <HomeIcon className="w-5 h-5 text-violet-600 " /> },
    { name: 'Customers', icon: <UsersIcon className="w-5 h-5 text-violet-600" /> },
    { name: 'Invoices', icon: <DocumentTextIcon className="w-5 h-5 text-violet-600" /> },
    { name: 'My Account', icon: <CgProfile  className="w-5 h-5 text-violet-600" /> },
  ];

  return (
    <div className="flex flex-col h-screen w-72 rounded-3xl shadow-sm bg-violet-600 text-gray-800 shadow-lg">
      {/* Logo + Text */}
      <div className="flex items-center gap-3 px-5 py-6">
        <Image
          src="/logo2.png"
          alt="Nimbus Logo"
          width={100}
          height={100}
          className="object-fit"
        />
        <span className="text-white text-2xl font-bold">Nimbus</span>
      </div>

      {/* Menu Items */}
      <div>
        
      </div>
      <nav className="flex-1 px-3 bg-white  space-y-2 mt-10">
        {menuItems.map((item:any) => (
          <button
            key={item.name}
            onClick={() => setSelectedPage(item.name)}
            className={`flex items-center gap-3 cursor-pointer text-violet-600 w-full px-4 py-3 rounded-lg transition-colors  mt-16${
              selectedPage === item.name
                ? 'bg-violet-600 text-white font-semibold'
                : 'bg-violet-600 text-white hover:bg-violet-300 hover:text-white'
            }`}
          >
            {item.icon}
            <span className='text-violet-600 '>{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="px-5 py-6 bg-white">
        <button className="flex items-center gap-3 w-full px-4 py-3 bg-red-600 cursor-pointer hover:bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
