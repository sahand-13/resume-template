import ReactApexChart from 'react-apexcharts';
import { useTheme } from '@mui/material';
import React from 'react';
import BaseOptionChart from './BaseOptionChart';
import { merge } from 'lodash';

const LanguageChart = ({ data, category, title }) => {
  const theme = useTheme();

  const chartOptions = {
    colors: [theme.palette['primary'].main],

    series: [70],
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '80%',
        },
      },
    },
    labels: [title],
  };

  const series = data;

  return <ReactApexChart options={chartOptions} series={series} type="radialBar" height={250} width={250} />;
};

export default LanguageChart;
