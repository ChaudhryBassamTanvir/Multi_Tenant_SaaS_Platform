import React from 'react';

export const DashboardPage = () => {
  return (
    <div className="space-y-8">
      {/* Dashboard Heading */}
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* ================= KPI CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Collected */}
        <div className="relative bg-white aspect-square rounded-2xl shadow hover:shadow-lg transition p-6 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-400 to-green-600" />
          <p className="text-sm font-medium text-gray-500">Collected</p>
          <p className="mt-4 text-4xl font-bold text-gray-800">$32,400</p>
          <p className="mt-auto text-xs text-gray-400">Updated today</p>
        </div>

        {/* Pending */}
        <div className="relative bg-white aspect-square rounded-2xl shadow hover:shadow-lg transition p-6 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600" />
          <p className="text-sm font-medium text-gray-500">Pending</p>
          <p className="mt-4 text-4xl font-bold text-gray-800">$12,800</p>
          <p className="mt-auto text-xs text-gray-400">Awaiting payment</p>
        </div>

        {/* Customers */}
        <div className="relative bg-white aspect-square rounded-2xl shadow hover:shadow-lg transition p-6 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-400 to-violet-600" />
          <p className="text-sm font-medium text-gray-500">Customers</p>
          <p className="mt-4 text-4xl font-bold text-gray-800">120</p>
          <p className="mt-auto text-xs text-gray-400">Active users</p>
        </div>

        {/* Invoices */}
        <div className="relative bg-white aspect-square rounded-2xl shadow hover:shadow-lg transition p-6 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600" />
          <p className="text-sm font-medium text-gray-500">Invoices</p>
          <p className="mt-4 text-4xl font-bold text-gray-800">350</p>
          <p className="mt-auto text-xs text-gray-400">Total issued</p>
        </div>
      </div>

      {/* ================= REVENUE + INVOICES ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-gray-700">
            Recent Revenue
          </h2>

          <div className="mt-6 h-60 flex items-center justify-center rounded-xl border border-dashed text-gray-400">
            Chart goes here
          </div>
        </div>

        {/* Latest Invoices */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-gray-700">
            Latest Invoices
          </h2>

          <ul className="mt-6 space-y-4">
            {[
              { name: 'John Doe', amount: '$320', status: 'Paid' },
              { name: 'Sarah Khan', amount: '$150', status: 'Pending' },
              { name: 'Ali Raza', amount: '$540', status: 'Paid' },
              { name: 'Emma Smith', amount: '$210', status: 'Pending' },
            ].map((invoice, index) => (
              <li
                key={index}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {invoice.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    Invoice #{index + 1}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    {invoice.amount}
                  </p>
                  <p
                    className={`text-xs font-medium ${
                      invoice.status === 'Paid'
                        ? 'text-green-600'
                        : 'text-yellow-600'
                    }`}
                  >
                    {invoice.status}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
