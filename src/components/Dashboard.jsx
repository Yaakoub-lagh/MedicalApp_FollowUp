import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SettingsIcon from '@mui/icons-material/Settings';
import Info from './Info';
import RDV from './RDV';
import Incident from './Incident';
import Parametre from './Parametre';

const tabs = [
  { name: 'Info', path: 'info', icon: <InfoIcon /> },
  { name: 'RDV', path: 'rdv', icon: <CalendarTodayIcon /> },
  { name: 'Incident', path: 'incident', icon: <ReportProblemIcon /> },
  { name: 'Parametre', path: 'parametre', icon: <SettingsIcon /> },
];

const drawerWidth = 240;

function Dashboard() {
  const handleLogout = () => {
    window.location.href = '/'; // Redirect to login
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#49d3d0',
            color: '#ffffff',
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Medical App
          </Typography>
        </Toolbar>
        <List>
          {tabs.map((tab) => (
            <ListItem
              button
              key={tab.name}
              component={Link}
              to={`/dashboard/${tab.path}`}
              sx={{
                '&:hover': {
                  backgroundColor: '#1565c0',
                },
              }}
            >
              <ListItemIcon sx={{ color: '#ffffff' }}>{tab.icon}</ListItemIcon>
              <ListItemText primary={tab.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#e3f2fd',
          padding: 3,
          minHeight: '100vh',
        }}
      >
        {/* Header */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#49d3d0' }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton color="inherit" onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Content Rendering */}
        <Toolbar />
        <Routes>
          <Route path="info" element={<Info />} />
          <Route path="rdv" element={<RDV />} />
          <Route path="incident" element={<Incident />} />
          <Route path="parametre" element={<Parametre />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Dashboard;
