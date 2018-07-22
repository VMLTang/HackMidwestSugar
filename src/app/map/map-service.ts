import { Injectable } from '@angular/core';
import { environment } from '@sugar/environments/environment.prod';
import { MapLocationOptions } from '@sugar/lib';
import { BehaviorSubject, Observable } from '../../../node_modules/rxjs';

declare const H: any;

@Injectable({
    providedIn: 'root'
})
export class MapService {
    private mapOptions: MapLocationOptions = { zoom: 15, center: { lng: 13.4, lat: 52.51 } } as MapLocationOptions;
    private mapOptionsSubject: BehaviorSubject<MapLocationOptions> = new BehaviorSubject<MapLocationOptions>(
        this.mapOptions
    );
    private platform = new H.service.Platform(environment.hereConfig);

    public mapOptions$: Observable<MapLocationOptions> = this.mapOptionsSubject.asObservable();
    constructor() { }

    public geocode(value: string): void {
        const geocodingParams = {
            searchText: value
        };
        const geocoder = this.platform.getGeocodingService();
        geocoder.geocode(geocodingParams, (result: any) => {
            console.log(result);
            console.log(result.Response.View[0].Result[0].Location.DisplayPosition);
            this.mapOptions.center = {
                lat: result.Response.View[0].Result[0].Location.DisplayPosition.Latitude,
                lng: result.Response.View[0].Result[0].Location.DisplayPosition.Longitude
            };
            this.mapOptionsSubject.next(this.mapOptions);

        }, (e: any) => {
            alert(e);
        });
    }
}
