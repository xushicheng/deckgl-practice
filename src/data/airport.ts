import { Feature, FeatureCollection, Point } from 'geojson';

export type AirPortProps = {
  scalerank: number;
  type: string;
  name: string;
  abbrev: string;
  location: string;
  gps_code: string;
  iata_code: string;
  wikipedia: string;
  natlscale: number;
  featureclass: string;
};

export type AirPort = Feature<Point, AirPortProps>;
export type AirPortCollection = FeatureCollection<Point, AirPortProps>;
