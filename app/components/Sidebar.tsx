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
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

type SidebarProps = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ selectedPage, setSelectedPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: <HomeIcon className="w-5 h-5 text-violet-600" /> },
    { name: 'Customers', icon: <UsersIcon className="w-5 h-5 text-violet-600" /> },
    { name: 'Invoices', icon: <DocumentTextIcon className="w-5 h-5 text-violet-600" /> },
    { name: 'My Account', icon: <CgProfile className="w-5 h-5 text-violet-600" /> },
  ];

  return (
    <>
      {/* Hamburger for mobile */}
      <div className="lg:hidden flex items-center justify-between bg-violet-600 px-4 py-4">
        <div className="flex items-center gap-2">
          <Image src="/logo2.png" alt="Nimbus Logo" width={40} height={40} className="object-contain" />
          <span className="text-white font-bold text-xl">Nimbus</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX className="w-6 h-6 text-white" /> : <HiOutlineMenuAlt3 className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full z-50 w-72 rounded-3xl shadow-sm bg-violet-600 text-gray-800 shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:flex lg:flex-col
        `}
      >
        {/* Logo */}
        <div className="hidden lg:flex items-center gap-3 px-5 py-6">
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
        <nav className="flex-1 px-3 bg-white space-y-2 mt-10">
          {menuItems.map((item: any) => (
            <button
              key={item.name}
              onClick={() => {
                setSelectedPage(item.name);
                setIsOpen(false); // close on mobile after click
              }}
              className={`flex items-center gap-3 cursor-pointer text-violet-600 w-full px-4 py-3 rounded-lg transition-colors mt-16${
                selectedPage === item.name
                  ? 'bg-violet-600 text-white font-semibold'
                  : 'bg-violet-600 text-white hover:bg-violet-300 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="text-violet-600">{item.name}</span>
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

      {/* ⚡ No overlay anymore */}
    </>
  );
};

export default Sidebar;
