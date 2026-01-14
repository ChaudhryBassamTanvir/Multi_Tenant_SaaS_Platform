import React from 'react';
import { User } from 'lucide-react';

const MyAccount = () => {
  const userName = 'Haneen';

  return (
    <div className="min-h-screen bg-[#f7f8fc] px-8 py-10">

      {/* Page Title */}
      <h1 className="text-3xl font-semibold text-gray-900 mb-2">
        My Account
      </h1>

      {/* Subtitle */}
      <p className="text-sm text-violet-600 mb-8">
        Manage your personal information and account details
      </p>

      {/* Content Card */}
      <div className="max-w-xl bg-white rounded-xl shadow-sm border border-gray-200 p-6">

        {/* Name Field */}
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Full Name
        </label>

        <div className="relative">
          <input
            type="text"
            value={userName}
            disabled
            className="w-full px-4 py-3 pr-11 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none"
          />

          {/* Icon */}
          <User
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>

      </div>
    </div>
  );
};

export default MyAccount;
