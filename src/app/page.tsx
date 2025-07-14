'use client';

import React, { useState } from 'react';
import ProductsList from '@/components/Products/ProductsList';
import UsersList from '@/components/Users/UsersList';
import SelectedProductsList from '@/components/SelectedProducts/SelectedProductsList';
import { useGetUsersQuery } from '@/api/storeApi';

export default function Home() {
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const { data: users = [], isLoading } = useGetUsersQuery();
  const [userSearch, setUserSearch] = useState('');

  const handleProductClick = (product: any) => {
    if (!selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts(prev => [...prev, product]);
    }
  };

  const handleRemove = (product: any) => {
    setSelectedProducts(prev => prev.filter(p => p.id !== product.id));
  };

  return (
    <main className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <ProductsList onSelect={handleProductClick} selected={selectedProducts} />
      <UsersList
        users={users}
        search={userSearch}
        onSearchChange={setUserSearch}
        isLoading={isLoading}
      />
      <SelectedProductsList selected={selectedProducts} onRemove={handleRemove} />
    </main>
  );
}
