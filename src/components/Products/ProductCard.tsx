'use client';

import {
  Card,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import { Trash2 } from 'lucide-react';

export default function ProductCard({
  product,
  isSelected = false,
  onClick,
  onRemove,
  removable = false,
}: {
  product: any;
  isSelected?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  removable?: boolean;
}) {
  return (
    <Card
      onClick={onClick}
      className="transition hover:shadow-md"
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        '&:hover': {
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          transform: onClick ? 'scale(1.0003)' : 'none',
          borderColor: isSelected ? '#4caf50' : undefined,
        },
        borderRadius: 2,
        border: isSelected ? '2px solid #4caf50' : '1px solid #ddd',
        boxShadow: isSelected ? 3 : '0 1px 2px rgba(0,0,0,0.05)',
        p: 1,
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{ width: 80, height: 80, objectFit: 'contain', mr: 2 }}
      />
      <Box flex={1}>
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          className="text-sm md:text-base line-clamp-3"
        >
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          price: {product.price} $
        </Typography>
      </Box>
      {removable && onRemove && (
        <IconButton color="error" onClick={onRemove}>
          <Trash2 className="w-5 h-5" />
        </IconButton>
      )}
    </Card>
  );
}
