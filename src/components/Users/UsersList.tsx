'use client';

import { useGetUsersQuery } from '@/api/storeApi';
import { Users } from 'lucide-react';
import SectionHolder from '../SectionHolder';
import SearchBox from '../SearchBox';
import UserListContent from './UserListContent';
import { useState } from 'react';

export default function UsersList() {
  const { data: users = [], isLoading } = useGetUsersQuery();
  const [search, setSearch] = useState('');

  const filtered = users.filter((user) =>
    `${user.name.firstname} ${user.name.lastname}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SectionHolder
      icon={<Users className="w-5 h-5 text-blue-600" />}
      title="Users"
      searchBox={
        <SearchBox
          value={search}
          onChange={setSearch}
          placeholder="Search User..."
        />
      }
    >
      <UserListContent users={filtered} isLoading={isLoading} />
    </SectionHolder>
  );
}
