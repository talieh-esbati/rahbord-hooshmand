'use client';

import { Box, Card, Skeleton } from '@mui/material';

const ProductSkeletonList = ({ count = 3 }: { count?: number }) => {
  return (
    <Box mt={2} display="flex" flexDirection="column" gap={1.5}>
      {[...Array(count)].map((_, idx) => (
        <Card
          key={idx}
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: 2,
            border: '1px solid #eee',
            p: 1,
          }}
        >
          <Skeleton
            variant="rectangular"
            width={80}
            height={80}
            sx={{ mr: 2, borderRadius: 1 }}
          />
          <Box flex={1}>
            <Skeleton variant="text" width="80%" height={24} />
            <Skeleton variant="text" width="40%" height={18} />
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default ProductSkeletonList;
