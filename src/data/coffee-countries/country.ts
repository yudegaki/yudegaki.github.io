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

// 中央アメリカのデータ
const centralAmericaData: RegionData = {
  id: 'centralAmerica',
  name: '中央アメリカ',
  geoChartRegion: '013',
  countryCodeMapping: {
    belize: 'BZ',
    costarica: 'CR',
    guatemala: 'GT',
    honduras: 'HN',
    mexico: 'MX',
    nicaragua: 'NI',
    panama: 'PA',
    elsalvador: 'SV',
  },
};

// 南アメリカのデータ
const southAmericaData: RegionData = {
  id: 'southAmerica',
  name: '南アメリカ',
  geoChartRegion: '005',
  countryCodeMapping: {
    argentina: 'AR',
    bolivia: 'BO',
    brazil: 'BR',
    chile: 'CL',
    colombia: 'CO',
    ecuador: 'EC',
    falklandislands: 'FK',
    frenchguiana: 'GF',
    guyana: 'GY',
    peru: 'PE',
    paraguay: 'PY',
    suriname: 'SR',
    venezuela: 'VE',
  },
};

// カリブ諸国のデータ
const caribbeanData: RegionData = {
  id: 'caribbean',
  name: 'カリブ諸国',
  geoChartRegion: '029',
  countryCodeMapping: {
    antiguaAndBarbuda: 'AG',
    anguilla: 'AI',
    aruba: 'AW',
    barbados: 'BB',
    saintBarthelemy: 'BL',
    cuba: 'CU',
    dominica: 'DM',
    dominicanRepublic: 'DO',
    grenada: 'GD',
    saintLucia: 'LC',
    montserrat: 'MS',
    saintKittsAndNevis: 'KN',
    saintVincentAndTheGrenadines: 'VC',
    trinidadAndTobago: 'TT',
    haiti: 'HT',
    jamaica: 'JM',
    bahamas: 'BS',
    turksAndCaicos: 'TC',
    puertoRico: 'PR',
    bonaireSintEustatiusSaba: 'BQ',
    sintMaarten: 'SX',
    guadeloupe: 'GP',
    martinique: 'MQ',
    virginIslandsUS: 'VI',
  },
};

export const allRegionsData: RegionData[] = [
  southeastAsiaData,
  africaData,
  centralAmericaData,
  southAmericaData,
  caribbeanData,
];
