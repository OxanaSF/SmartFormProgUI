import { Box, CircularProgress } from '@mui/material';

export const Spinner = () => {
  return (
    <Box
      flexDirection={'column'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      minHeight={'100%'}
      width={'100%'}
      position={'fixed'}
    >
      <CircularProgress />
    </Box>
  );
};
