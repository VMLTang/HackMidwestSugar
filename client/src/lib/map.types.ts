import { MapPoint } from './map.types';

export interface MapPoint {
    lng: number;
    lat: number;
}

export interface MapLocationOptions {
    center: MapPoint;
    zoom: number;
}
