import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import { Wallet, TrendingUp, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Dashboard = () => {
  const { t } = useLanguage();

  const chartData = {
    xAxis: [{ data: [1, 2, 3, 4, 5, 6, 7] }],
    series: [
      {
        data: [2000, 3400, 2800, 4800, 3900, 4900, 5200],
      },
    ],
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={3}>
        <Paper sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Wallet />
            <Typography variant="h6" sx={{ ml: 1 }}>
              {t('dashboard', 'balance')}
            </Typography>
          </Box>
          <Typography variant="h4">24,500 PLN</Typography>
          <Typography variant="body2" color="text.secondary">
            +2.5% {t('dashboard', 'monthlyChange')}
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        <Paper sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <TrendingUp />
            <Typography variant="h6" sx={{ ml: 1 }}>
              {t('dashboard', 'income')}
            </Typography>
          </Box>
          <Typography variant="h4">8,200 PLN</Typography>
          <Typography variant="body2" color="success.main" sx={{ display: 'flex', alignItems: 'center' }}>
            <ArrowUpRight size={16} /> +12.5%
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        <Paper sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <ArrowDownRight />
            <Typography variant="h6" sx={{ ml: 1 }}>
              {t('dashboard', 'expenses')}
            </Typography>
          </Box>
          <Typography variant="h4">4,300 PLN</Typography>
          <Typography variant="body2" color="error.main" sx={{ display: 'flex', alignItems: 'center' }}>
            <ArrowUpRight size={16} /> +8.4%
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            {t('dashboard', 'expenseAnalysis')}
          </Typography>
          <Box sx={{ width: '100%', height: 300 }}>
            <LineChart
              xAxis={chartData.xAxis}
              series={chartData.series}
              height={300}
            />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;