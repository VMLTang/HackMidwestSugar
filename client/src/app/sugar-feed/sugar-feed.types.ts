import { MapPoint } from '@sugar/app/map/map.types';

export interface Transaction {
    id: string;
    avator: string;
    description: string;
    descriptionImage: string;
    exchange: Exchange;
    time: Date;
}

export interface Exchange {
    id: string;
    name: string;
    location: MapPoint;
    url: string;
}
