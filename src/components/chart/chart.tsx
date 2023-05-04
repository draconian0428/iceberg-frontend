/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { CHART_NFT_DATA } from '../../pages/mynfts';

export const NFTChart = ({ nfts }: { nfts: CHART_NFT_DATA[] }) => {
  const [oldValues, setOldValues] = useState<number[]>([]);
  const [cusValues, setCusValues] = useState<number[]>([]);
  const [nftNames, setNFTNames] = useState<string[]>([]);

  useEffect(() => {
    console.log(nfts);
    setOldValues([]);
    setCusValues([]);
    setNFTNames([]);
    for (let i = 0; i < nfts.length; i++) {
      setNFTNames((old) => [...old, nfts[i].name]);
      setOldValues((old) => [...old, nfts[i].oldValue]);
      setCusValues((old) => [...old, nfts[i].value]);
    }
  }, [nfts]);

  const series = [
    {
      data: oldValues,
      name: 'old value'
    },
    {
      data: cusValues,
      name: 'custom value'
    }
  ];
  const options: any = {
    chart: {
      type: 'bar',
      height: 430
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top'
        }
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    xaxis: {
      categories: nftNames,
      labels: {
        show: true,
        style: {
          color: 'blue'
        }
      }
    }
  };

  return <ReactApexChart options={options} series={series} type="bar" height={500} />;
};
