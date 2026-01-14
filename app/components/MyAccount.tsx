import React from 'react';
import { User } from 'lucide-react';

const MyAccount = () => {
  const userName = 'Chaudhry Bassam';

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 flex items-center justify-center p-6">
      
      <div className="w-full max-w-lg bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/40">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-violet-500 to-indigo-500 flex items-center justify-center text-white shadow-lg">
            <User size={26} />
          </div>

          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              My Account
            </h1>
            <p className="text-gray-600 text-sm">
              Personal profile & account information
            </p>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
          <label className="block text-sm font-semibold text-gray-500 mb-2">
            Full Name
          </label>

          <input
            type="text"
            value={userName}
            disabled
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 font-medium focus:outline-none"
          />
        </div>

        {/* Footer Text */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Your information is securely stored and protected
        </p>
      </div>

    </div>
  );
};

export default MyAccount;
