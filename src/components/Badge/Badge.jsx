import React from 'react';

import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const styledBadge = {
  width: 35,
  height: 35,
  borderRadius: '50%',
  padding: '2px',
  bgcolor: '#c9c9cf',
  color: '#111217',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Badge = ({ count }) => (
  <Box sx={styledBadge} component='span'>
    <Typography variant='subtitle1' fontWeight='bold' data-testid="counter">
      {count}
    </Typography>
  </Box>
);

export default Badge;
