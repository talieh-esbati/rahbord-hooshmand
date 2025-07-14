import { ReactNode } from 'react';

interface UserDetailFieldProps {
  label: string;
  children: ReactNode;
}

export default function UserDetailField({ label, children }: UserDetailFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm sm:text-base text-gray-500">{label}</p>
      <div>{children}</div>
    </div>
  );
}
