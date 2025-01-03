import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Avatar } from '@mui/material';
import { Bell, Settings } from 'lucide-react';
import LanguageSwitch from './LanguageSwitch';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const { t } = useLanguage();

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t('dashboard', 'title')}
        </Typography>
        <LanguageSwitch />
        <IconButton size="large" color="inherit">
          <Badge badgeContent={4} color="error">
            <Bell />
          </Badge>
        </IconButton>
        <IconButton size="large" color="inherit">
          <Settings />
        </IconButton>
        <Avatar sx={{ ml: 2 }} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80" />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;