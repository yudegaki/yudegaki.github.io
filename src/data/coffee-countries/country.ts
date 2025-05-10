import { RegionData } from '@/types/country';

// 東南アジアのデータ
const southeastAsiaData: RegionData = {
  id: 'southeastAsia',
  name: '東南アジア',
  geoChartRegion: '035',
  countryCodeMapping: {
    thailand: 'TH',
    vietnam: 'VN',
    malaysia: 'MY',
    singapore: 'SG',
    indonesia: 'ID',
    philippines: 'PH',
    myanmar: 'MM',
    cambodia: 'KH',
    laos: 'LA',
    brunei: 'BN',
  },
};

// アフリカのデータ
const africaData: RegionData = {
  id: 'africa',
  name: 'アフリカ',
  geoChartRegion: '002',
  countryCodeMapping: {
    egypt: 'EG',
    nigeria: 'NG',
    southafrica: 'ZA',
    kenya: 'KE',
    morocco: 'MA',
    ghana: 'GH',
    ethiopia: 'ET',
    tanzania: 'TZ',
    algeria: 'DZ',
    senegal: 'SN',
    rwanda: 'RW',
    madagascar: 'MG',
  },
};

export const allRegionsData: RegionData[] = [southeastAsiaData, africaData];
