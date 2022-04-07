import React, { useEffect, useState } from 'react';

import { Box } from '@mui/system';
import { List, ListItem, Typography } from '@mui/material';

import useAlarmList from '../../hooks/useAlarmList';
import { useGlobalState } from '../../context/alarmscontext';

import Card from '../../components/Card/Card';

const styledDashboard = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'auto',
};

const Dashboard = () => {
  const [state] = useGlobalState();
  const [dashboarState, setDashboardState] = useState({
    url: '',
  });
  const [isLoading] = useAlarmList(dashboarState.url);

  useEffect(
    () =>
      setDashboardState({
        url: `alarms`,
      }),
    []
  );
  return (
    <Box component='section' sx={styledDashboard}>
      <Card isLoading={isLoading}>
        <Typography variant='h5'>
          There are Turned {state.activeAlarmsCount}/
          {state.totalAlarmsCount} On Alarms
        </Typography>
      </Card>
      <Card isLoading={isLoading}>
        <Typography variant='h5'>Just another widget To be implemented in future sprints</Typography>
        <List>
          <ListItem>
            <Typography variant='h6'>
              
            </Typography>
          </ListItem>
          
          
        </List>
      </Card>
    </Box>
  );
};

export default Dashboard;
