
  const invoices = [
    { id: 101, customer: 'Alice Johnson', amount: '$500', status: 'Paid' },
    { id: 102, customer: 'Bob Smith', amount: '$300', status: 'Pending' },
    { id: 103, customer: 'Charlie Brown', amount: '$450', status: 'Paid' },
  ];

import React from 'react'

const InvoicesPage = () => {
  return (
    <>
     <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Invoices</h1>

      <div className="overflow-auto bg-white rounded-xl shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-violet-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Invoice ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td className="px-6 py-4">{invoice.id}</td>
                <td className="px-6 py-4">{invoice.customer}</td>
                <td className="px-6 py-4">{invoice.amount}</td>
                <td className="px-6 py-4">{invoice.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
    </>
  )
}

export default InvoicesPage
