'use client';

import { useState } from 'react';
import { useGetProductsQuery } from '@/api/storeApi';
import { Package } from 'lucide-react';
import SectionHolder from '../SectionHolder';
import SearchBox from '../SearchBox';
import ProductListContent from './ProductListContent';

export default function ProductsList({
  onSelect,
  selected,
}: {
  onSelect: (product: any) => void;
  selected: any[];
}) {
  const { data: products = [], isLoading, error } = useGetProductsQuery();
  const [visibleCount, setVisibleCount] = useState(10);
  const [search, setSearch] = useState('');

  const filtered = products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  const loadMore = () => setVisibleCount(prev => prev + 10);

  return (
    <SectionHolder
      icon={<Package className="w-5 h-5 text-blue-600" />}
      title="Products"
      searchBox={
        <SearchBox
          value={search}
          onChange={setSearch}
          placeholder="Search Products..."
        />
      }
    >
      <ProductListContent
        products={filtered}
        isLoading={isLoading}
        error={error}
        visibleCount={visibleCount}
        onLoadMore={loadMore}
        onSelect={onSelect}
        selected={selected}
        mode="list"
      />
    </SectionHolder>
  );
}
