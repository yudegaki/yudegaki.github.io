import { useEffect, useRef, useState } from 'react';
import { useMobile } from '@/hooks/use-mobile';
import { Card } from '@/components/ui/card';

interface GeoChartProps {
  onSelectCountry: (countryCode: string) => void;
  selectedCountry: string | null;
  regionCode: string;
  countryCodeMapping: Record<string, string>;
}

declare global {
  interface Window {
    google: any;
  }
}

export function GeoChart({
  onSelectCountry,
  selectedCountry,
  regionCode,
  countryCodeMapping,
}: GeoChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  const [chart, setChart] = useState<any>(null);

  // Google Charts のロード
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

  // チャートの描画
  useEffect(() => {
    if (!isLoaded || !chartRef.current) return;

    const drawChart = () => {
      const data = new window.google.visualization.DataTable();
      data.addColumn('string', 'Country');
      data.addColumn('number', 'Value');

      // 国コードと値のマッピングを作成
      const countryValues: Record<string, number> = {};

      // すべての国を値1（非選択）で初期化
      Object.values(countryCodeMapping).forEach((code) => {
        countryValues[code] = 1;
      });

      // 選択された国があれば値2（選択）に設定
      if (selectedCountry) {
        countryValues[selectedCountry] = 2;
      }

      // データ行を追加
      Object.entries(countryValues).forEach(([code, value]) => {
        data.addRows([[code, value]]);
      });

      const regionSetting = regionCode; // デフォルトは指定された地域全体

      const options = {
        region: regionSetting,
        resolution: 'countries',
        displayMode: 'regions',
        height: isMobile ? 300 : 600,
        backgroundColor: '#ffffff',
        datalessRegionColor: '#f1f5f9',
        defaultColor: '#e2e8f0',
        colorAxis: {
          colors: [
            '#e2e8f0', // 非選択
            '#f97316', // 選択された国
          ],
        },
        legend: 'none',
        tooltip: { trigger: 'none' },
        enableRegionInteractivity: true,
        keepAspectRatio: true,
      };

      const newChart = new window.google.visualization.GeoChart(
        chartRef.current
      );

      window.google.visualization.events.addListener(newChart, 'select', () => {
        const selection = newChart.getSelection();
        if (selection.length === 0) return;

        const countryCode = data.getValue(selection[0].row, 0);
        onSelectCountry(countryCode);
      });

      newChart.draw(data, options);
      setChart(newChart);
    };

    drawChart();

    // ウィンドウサイズ変更時に再描画
    const handleResize = () => {
      if (chart) {
        drawChart();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [
    isLoaded,
    selectedCountry,
    isMobile,
    onSelectCountry,
    regionCode,
    countryCodeMapping,
  ]);

  return <div ref={chartRef}></div>;
}
