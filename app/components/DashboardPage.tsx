import React, { useState } from 'react';

export const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* Example summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-gray-700">Total Customers</h2>
          <p className="mt-2 text-2xl font-bold text-violet-600">120</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-gray-700">Total Invoices</h2>
          <p className="mt-2 text-2xl font-bold text-violet-600">350</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-gray-700">Revenue</h2>
          <p className="mt-2 text-2xl font-bold text-violet-600">$45,200</p>
        </div>
      </div>

      {/* Placeholder for charts or graphs */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-gray-700">Monthly Revenue</h2>
        <div className="mt-4 h-40 flex items-center justify-center text-gray-400">
          Chart goes here
        </div>
      </div>
    </div>
  );
};
