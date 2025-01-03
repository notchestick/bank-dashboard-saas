import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import { LayoutDashboard, CreditCard, PieChart, Users, Settings, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const drawerWidth = 240;

const Sidebar = () => {
  const { t } = useLanguage();

  const menuItems = [
    { text: t('navigation', 'dashboard'), icon: <LayoutDashboard /> },
    { text: t('navigation', 'transactions'), icon: <CreditCard /> },
    { text: t('navigation', 'analytics'), icon: <PieChart /> },
    { text: t('navigation', 'beneficiaries'), icon: <Users /> },
    { text: t('navigation', 'settings'), icon: <Settings /> },
    { text: t('navigation', 'help'), icon: <HelpCircle /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="div">
          {t('common', 'appName')}
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;