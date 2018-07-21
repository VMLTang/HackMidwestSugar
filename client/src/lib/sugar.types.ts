import { MapPoint } from './map.types';

export enum UserRole {
  Consumer = 'consumer',
  Producer = 'producer',
}

export interface User {
  id: string;
}

// TODO: REMOVE OPTIONAL-NESS
export interface Transaction {
  id: string;
  description?: string;
  descriptionImage?: string;
  exchange?: Exchange;
  producer?: User;
  consumer?: User;
  time?: Date;
}

export interface Exchange {
  id: string;
  name: string;
  location: MapPoint;
  url: string;
}
