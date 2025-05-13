import { CountryCode } from '@/types/country';
import { useEffect, useRef, useState } from 'react';

interface GeoChartProps {
  onSelectCountry: (countryCode: string) => void;
  regionCode: string;
  countryCodeMapping: Record<string, string>;
  quizIndex: number;
  collectAnswer?: CountryCode;
}

declare global {
  interface Window {
    google: any;
  }
}

export const GeoChart = ({
  onSelectCountry,
  regionCode,
  countryCodeMapping,
  quizIndex,
  collectAnswer,
}: GeoChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [chart, setChart] = useState<any>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryCode | null>(
    null
  );

  useEffect(() => {
    const loadGoogleCharts = () => {
      if (
        typeof window !== 'undefined' &&
        window.google &&
        window.google.charts
      ) {
        return Promise.resolve();
      }

      return new Promise<void>((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.async = true;
        script.onload = () => {
          if (window.google && window.google.charts) {
            window.google.charts.load('current', {
              packages: ['geochart'],
              mapsApiKey: '',
            });
            window.google.charts.setOnLoadCallback(() => {
              setIsLoaded(true);
              resolve();
            });
          }
        };
        document.head.appendChild(script);
      });
    };

    loadGoogleCharts();
  }, []);

  const drawChart = () => {
    const data = new window.google.visualization.DataTable();
    data.addColumn('string', 'Country');
    data.addColumn('number', 'Value');

    const countryValues: Record<string, number> = {};

    Object.values(countryCodeMapping).forEach((code) => {
      countryValues[code] = 3;
    });

    if (selectedCountry) {
      countryValues[selectedCountry] = 2;
    }

    if (collectAnswer) {
      countryValues[collectAnswer] = 1;
    }

    Object.entries(countryValues).forEach(([code, value]) => {
      data.addRows([[code, value]]);
    });

    const parentWidth = chartRef.current?.parentElement?.clientWidth || 0;
    const geoChartWidth = parentWidth * 0.8;

    const options = {
      region: regionCode,
      resolution: 'countries',
      displayMode: 'regions',
      backgroundColor: '#ffffff',
      datalessRegionColor: '#f1f5f9',
      defaultColor: '#e2e8f0',
      colorAxis: {
        colors: collectAnswer
          ? ['#8B0000', '#006400', '#e2e8f0']
          : ['#006400', '#e2e8f0'],
      },
      width: geoChartWidth,
      legend: 'none',
      tooltip: { trigger: 'none' },
      enableRegionInteractivity: true,
      keepAspectRatio: true,
    };

    const newChart = new window.google.visualization.GeoChart(chartRef.current);

    window.google.visualization.events.addListener(newChart, 'select', () => {
      const selection = newChart.getSelection();
      if (selection.length === 0) return;

      const countryCode = data.getValue(selection[0].row, 0);
      setSelectedCountry(countryCode);
      onSelectCountry(countryCode);
    });

    newChart.draw(data, options);
    setChart(newChart);
  };

  useEffect(() => {
    if (!isLoaded || !chartRef.current) return;

    drawChart();
    const handleResize = () => {
      if (chart) {
        drawChart();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoaded, selectedCountry, collectAnswer]);

  useEffect(() => {
    setSelectedCountry(null);
  }, [quizIndex]);

  return <div ref={chartRef}>{!isLoaded && <p>地図を読み込み中...</p>}</div>;
};
