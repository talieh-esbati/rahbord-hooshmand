import { Avatar, Box, Card, Skeleton } from '@mui/material';

const UserListSkeleton = ({ count = 5 }: { count?: number }) => {
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      {[...Array(count)].map((_, idx) => (
        <Card
          key={idx}
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: 2,
            p: 1,
            boxShadow: 'none',
            border: '1px solid #eee',
          }}
        >
          <Skeleton variant="circular" width={40} height={40} sx={{ mr: 2 }} />
          <Box flex={1}>
            <Skeleton variant="text" width="60%" height={20} />
            <Skeleton variant="text" width="40%" height={16} />
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default UserListSkeleton;
