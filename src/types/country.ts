export interface RegionData {
  id: Region;
  name: string;
  geoChartRegion: string;
  countryCodeMapping: Record<string, CountryCode>;
}

type southeastAsiaCountryCode =
  | 'TH'
  | 'VN'
  | 'MY'
  | 'SG'
  | 'ID'
  | 'PH'
  | 'MM'
  | 'KH'
  | 'LA'
  | 'BN';

type africaCountryCode =
  | 'DZ'
  | 'EG'
  | 'EH'
  | 'LY'
  | 'MA'
  | 'SD'
  | 'SS'
  | 'TN'
  | 'BF'
  | 'BJ'
  | 'CI'
  | 'CV'
  | 'GH'
  | 'GM'
  | 'GN'
  | 'GW'
  | 'LR'
  | 'ML'
  | 'MR'
  | 'SH'
  | 'SL'
  | 'SN'
  | 'AO'
  | 'CD'
  | 'ZR' // ZR is outdated; replaced by CD (Congo, The Democratic Republic of the)
  | 'CF'
  | 'CG'
  | 'CM'
  | 'GA'
  | 'GQ'
  | 'ST'
  | 'TD'
  | 'NG'
  | 'BI'
  | 'DJ'
  | 'ER'
  | 'ET'
  | 'KE'
  | 'KM'
  | 'MG'
  | 'MU'
  | 'MW'
  | 'MZ'
  | 'RE'
  | 'RW'
  | 'SC'
  | 'SO'
  | 'TZ'
  | 'UG'
  | 'BW'
  | 'LS'
  | 'NA'
  | 'SZ'
  | 'ZA';

export type CountryCode = southeastAsiaCountryCode | africaCountryCode;

export type Region = 'southeastAsia' | 'africa';
