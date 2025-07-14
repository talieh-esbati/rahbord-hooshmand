'use client';

import { TextField } from '@mui/material';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBox({
  value,
  onChange,
  placeholder = 'Search ...',
}: SearchBoxProps) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-white rounded-md"
    />
  );
}
