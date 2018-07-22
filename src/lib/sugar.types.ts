import { MapPoint } from '@sugar/lib/map.types';


export enum PostingType {
  Offer = 'OFFER',
  Request = 'REQUEST'
}

export enum PostingStatus {
  Pending = 'PENDING',
  Complete = 'COMPLETE',
  Expired = 'EXPIRED',
  Cancelled = 'CANCELED'
}

export interface PostingLocation {
  lat: number;
  long: number;
}

export interface PostingContent {
  message: string;
  item: string;
  quantity: number;
}

export interface Posting {
  id?: number;
  type: PostingType;
  status?: PostingStatus;
  pickupLocation?: PostingLocation;
  pickupTime?: string;
  expiresAt?: string;
  closedAt?: string;
  content?: PostingContent;
  createdAt?: string;
  createdBy?: User;
  grantedBy?: User;
}

export enum UserRole {
  Consumer = 'consumer',
  Producer = 'producer',
}

export interface User {
  id: string;
  cellNumber: string;
  name: string;
  verified: number;
  createdAt: string;
  updatedAt: string;
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
