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
  | 'YE'
  | 'ZA';

type centralAmericaCountryCode =
  | 'BZ'
  | 'CR'
  | 'GT'
  | 'HN'
  | 'MX'
  | 'NI'
  | 'PA'
  | 'SV';

type southAmericaCountryCode =
  | 'AR'
  | 'BO'
  | 'BR'
  | 'CL'
  | 'CO'
  | 'EC'
  | 'FK'
  | 'GF'
  | 'GY'
  | 'PE'
  | 'PY'
  | 'SR'
  | 'VE';

type caribbeanCountryCode =
  | 'AG'
  | 'AI'
  | 'AW'
  | 'BB'
  | 'BL'
  | 'CU'
  | 'DM'
  | 'DO'
  | 'GD'
  | 'LC'
  | 'MS'
  | 'KN'
  | 'VC'
  | 'TT'
  | 'HT'
  | 'JM'
  | 'BS'
  | 'TC'
  | 'PR'
  | 'BQ'
  | 'SX'
  | 'GP'
  | 'MQ'
  | 'VI';

export type CountryCode =
  | southeastAsiaCountryCode
  | africaCountryCode
  | centralAmericaCountryCode
  | southAmericaCountryCode
  | caribbeanCountryCode;

export type Region =
  | 'southeastAsia'
  | 'africa'
  | 'centralAmerica'
  | 'southAmerica'
  | 'caribbean';
