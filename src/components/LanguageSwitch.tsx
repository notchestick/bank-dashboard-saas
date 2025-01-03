import React from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Box sx={{ mx: 2 }}>
      <ToggleButtonGroup
        value={language}
        exclusive
        onChange={(_, newLang) => newLang && setLanguage(newLang)}
        size="small"
      >
        <ToggleButton value="pl">PL</ToggleButton>
        <ToggleButton value="en">EN</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default LanguageSwitch;