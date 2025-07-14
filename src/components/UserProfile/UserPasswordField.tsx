'use client';

import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

interface UserPasswordFieldProps {
  password: string;
}

export default function UserPasswordField({ password }: UserPasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <input
        type={visible ? 'text' : 'password'}
        value={password}
        readOnly
        className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={() => setVisible((prev) => !prev)}
        type="button"
        className="text-gray-500 hover:text-gray-700"
        aria-label="Toggle Password Visibility"
      >
        {visible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </button>
    </div>
  );
}
