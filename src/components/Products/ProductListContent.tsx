'use client';

import { Box, Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCard from './ProductCard';
import ProductSkeleton from '@/components/Spinner/ProductSkeleton';
import { Product } from '@/types/Product';

type Props = {
  products: Product[];
  isLoading?: boolean;
  error?: any;
  visibleCount?: number;
  onLoadMore?: () => void;
  onSelect?: (product: Product) => void;
  onRemove?: (product: Product) => void;
  selected?: Product[];
  mode?: 'list' | 'selected'; 
};

export default function ProductListContent({
  products,
  isLoading = false,
  error,
  visibleCount = products.length,
  onLoadMore,
  onSelect,
  onRemove,
  selected = [],
  mode = 'list',
}: Props) {
  if (isLoading) return <ProductSkeleton count={3} />;
  if (error) return <Typography color="error">error getting Product</Typography>;
  if (products.length === 0)
    return (
      <Typography variant="body2" color="text.secondary">
        no selcted product found.
      </Typography>
    );

  const list = products.slice(0, visibleCount);

  const renderList = (
    <Box display="flex" flexDirection="column" gap={2}>
      {list.map(product => {
        const isSelected = selected?.some(p => p.id === product.id);
        return (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={isSelected}
            onClick={mode === 'list' ? () => onSelect?.(product) : undefined}
            onRemove={mode === 'selected' ? () => onRemove?.(product) : undefined}
            removable={mode === 'selected'}
          />
        );
      })}
    </Box>
  );

  return mode === 'list' && onLoadMore ? (
    <InfiniteScroll
      dataLength={list.length}
      next={onLoadMore}
      hasMore={visibleCount < products.length}
      loader={<ProductSkeleton count={3} />}
    >
      {renderList}
    </InfiniteScroll>
  ) : (
    renderList
  );
}
