'use client';

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { DashboardPage } from '../components/DashboardPage';
import { CustomersPage } from '../components/CustomersPage';
import InvoicesPage from '../components/InvoicesPage';
import MyAccount from '../components/MyAccount';

const Page = () => {
  const [selectedPage, setSelectedPage] = useState('Dashboard');

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8 overflow-auto transition-all duration-300">
        {selectedPage === 'Dashboard' && <DashboardPage />}
        {selectedPage === 'Customers' && <CustomersPage />}
        {selectedPage === 'Invoices' && <InvoicesPage />}
        {selectedPage === 'My Account' && <MyAccount />}
      </div>
    </div>
  );
};

export default Page;
