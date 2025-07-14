'use client';

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import UserListSkeleton from '@/components/Spinner/UserListSkeleton';
import { User } from '@/types/User';

interface Props {
  users: User[];
  isLoading: boolean;
}

const UserListContent = ({ users, isLoading }: Props) => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/users/${id}`);
  };

  if (isLoading) {
    return <UserListSkeleton count={5} />;
  }

  if (users.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary">
        No users found.
      </Typography>
    );
  }

  return (
    <List dense>
      {users.map((user) => (
        <ListItem
          key={user.id}
          component="button"
          onClick={() => handleClick(user.id)}
          className="rounded hover:bg-gray-100 transition"
          sx={{ cursor: 'pointer' }}
        >
          <ListItemAvatar>
            <Avatar>
              {user.name.firstname[0]}{user.name.lastname[0]}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${user.name.firstname} ${user.name.lastname}`}
            secondary={user.email}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default UserListContent;
