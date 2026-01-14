'use client';

import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";

const InvoicesPage = () => {
  const [search, setSearch] = useState('');

  const invoices = [
    { id: 101, customer: 'Alice Johnson', email: 'alice@example.com', amount: '$500', date: '2026-01-10', status: 'Paid' },
    { id: 102, customer: 'Bob Smith', email: 'bob@example.com', amount: '$300', date: '2026-01-11', status: 'Pending' },
    { id: 103, customer: 'Charlie Brown', email: 'charlie@example.com', amount: '$450', date: '2026-01-12', status: 'Paid' },
  ];

  const filteredInvoices = invoices.filter(
    (inv) =>
      inv.customer.toLowerCase().includes(search.toLowerCase()) ||
      inv.email.toLowerCase().includes(search.toLowerCase()) ||
      inv.status.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Invoices</h1>

      {/* Search + Create Invoice */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
        <div className="relative flex-1 w-full sm:w-auto">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search invoices..."
            value={search}
            onChange={(e:any) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-violet-600"
          />
        </div>
        <button className="px-4 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors cursor-pointer w-full sm:w-auto">
          Create Invoice
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block overflow-hidden bg-gray-100 rounded-xl shadow">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-violet-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Invoice ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {filteredInvoices.length > 0 ? (
              filteredInvoices.map((invoice) => (
                <tr key={invoice.id} className="bg-gray-50 hover:bg-gray-200 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">{invoice.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{invoice.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{invoice.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{invoice.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{invoice.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusBadge(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                  No invoices found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden space-y-4">
        {filteredInvoices.length > 0 ? (
          filteredInvoices.map((invoice) => (
            <div key={invoice.id} className="bg-white p-4 rounded-xl shadow space-y-2">
              <div><span className="font-semibold">Invoice ID:</span> {invoice.id}</div>
              <div><span className="font-semibold">Customer:</span> {invoice.customer}</div>
              <div><span className="font-semibold">Email:</span> {invoice.email}</div>
              <div><span className="font-semibold">Amount:</span> {invoice.amount}</div>
              <div><span className="font-semibold">Date:</span> {invoice.date}</div>
              <div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusBadge(invoice.status)}`}>
                  {invoice.status}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white p-4 rounded-xl shadow text-center text-gray-500">
            No invoices found.
          </div>
        )}
      </div>
    </div>
  );
};

export default InvoicesPage;
