import { ReactNode } from 'react';
import { Typography } from '@mui/material';

interface SectionHolderProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  searchBox?: ReactNode;
}

export default function SectionHolder({
  icon,
  title,
  children,
  searchBox,
}: SectionHolderProps) {
  return (
    <section className="rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-md border border-gray-200 p-4 md:p-6 w-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-primary/10 text-primary p-2 rounded-lg">
          {icon}
        </div>
        <Typography variant="h6" fontWeight="bold" className="text-gray-800">
          {title}
        </Typography>
      </div>

      {searchBox && (
        <div className="mb-4">{searchBox}</div>
      )}

      {children}
    </section>
  );
}
