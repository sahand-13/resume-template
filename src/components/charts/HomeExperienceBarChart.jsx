import { useTheme } from '@mui/material';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import BaseOptionChart from './BaseOptionChart';
import { merge } from 'lodash';
const HomeExperienceBarChart = ({ title, data, category }) => {
  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    colors: [theme.palette['primary'].main],
    legend: { show: false },
    brush: {
      enabled: false,
      target: undefined,
      autoScaleYaxis: false,
    },
    chart: {
      stackType: '100%',
      stacked: true,
      stackType: '',
    },

    plotOptions: {
      area: {
        fillTo: 'end',
      },
      bar: {
        barHeight: 40,
        borderRadius: 2,
        horizontal: true,
        borderRadiusApplication: 'around',
      },
    },
    tooltip: {
      enabled: true,
      x: {
        formatter: (val, opt) => {
          return opt.series[0][opt.seriesIndex] + '%';
        },
      },
      y: {
        formatter: function (value, opt) {
          return value + '%';
        },
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
      categories: category,
    },
    yaxis: {
      max: 100,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
      labels: {
        formater: (e) => {
          return e + '%';
        },
      },
      title: {
        text: title,
      },
    },
  });

  const series = [
    {
      name: '',
      data: data,
    },
  ];

  return <ReactApexChart options={chartOptions} series={series} type="bar" height={280} width={500} />;
};

export default HomeExperienceBarChart;
