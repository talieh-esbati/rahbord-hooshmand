'use client';

import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import SectionHolder from '../SectionHolder';
import SearchBox from '../SearchBox';
import ProductListContent from '../Products/ProductListContent';

export default function SelectedProducts({
  selected,
  onRemove,
}: {
  selected: any[];
  onRemove: (product: any) => void;
}) {
  const [search, setSearch] = useState('');

  const filtered = selected.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SectionHolder
      icon={<ShoppingCart className="w-5 h-5 text-blue-600" />}
      title="Selected Products"
      searchBox={
        <SearchBox
          value={search}
          onChange={setSearch}
          placeholder="Search Selected..."
        />
      }
    >
      <ProductListContent
        products={filtered}
        onRemove={onRemove}
        mode="selected"
      />
    </SectionHolder>
  );
}
