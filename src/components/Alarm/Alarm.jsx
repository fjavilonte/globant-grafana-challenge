import React from 'react';

import { Box } from '@mui/system';
import {
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';

const styledListItem = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr) auto',
  mb: 1,
  bgcolor: '#22252b',
};
const styledButton = { ml: 1, minWidth: '95px' };

const Alarm = ({
  id,
  name,
  source,
  metric,
  trigger,
  paused,
  firing,
  handlePause,
  handleDelete,
  handleEdit,
}) => (
  <ListItem sx={styledListItem}>
    <ListItemText>{name}</ListItemText>
    <ListItemText>{source}</ListItemText>
    <ListItemText>{metric}</ListItemText>
    <ListItemText>{trigger}%</ListItemText>
    <ListItemText>
      {!paused ? 'Active' : 'Paused'}
    </ListItemText>
    <Box component='div'>
      <Button
        variant='outlined'
        color='primary'
        sx={styledButton}
        onClick={() => handleEdit(id)}
        data-testid="editbutton"
      >
        Edit
      </Button>
      <Button
        variant='outlined'
        color='error'
        sx={styledButton}
        data-testid="deletebutton"
        onClick={() => handleDelete(id)}
        
      >
        Delete
      </Button>
      {firing ? (
        <Button
          data-testid="firingbutton"
          variant='contained'
          color='error'
          sx={styledButton}
          
        >
          Firing
        </Button>
      ) : (
        <Button
          variant='outlined'
          color='warning'
          sx={styledButton}
          onClick={() => handlePause(id)}
          data-testid="isActive"
        >
          {!paused ? 'Pause' : 'Resume'}
        </Button>
      )}
    </Box>
  </ListItem>
);

export default Alarm;
