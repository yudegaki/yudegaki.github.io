import { RegionData } from '@/types/country';
import { allRegionsData } from '@/data/coffee-countries/country';

export const getRegionDataById = (regionId: string): RegionData | null => {
  const regionData = allRegionsData.find((region) => region.id === regionId);
  return regionData || null;
};

export const getAllRegionsData = (): RegionData[] => {
  return allRegionsData;
};
