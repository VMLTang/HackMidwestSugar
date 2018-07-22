import { Injectable } from '@angular/core';
import { UsersService } from '@sugar/app/core/user.service';
import { MapService } from '@sugar/app/map/map-service';
import { StarterUser } from '@sugar/app/start/start.types';
import { environment } from '@sugar/environments/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';

declare const H: any;

@Injectable({
  providedIn: 'root'
})
export class StartService {
    private hasStartSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    private starter: StarterUser = {} as StarterUser;
    private platform = new H.service.Platform(environment.hereConfig);

    public hasStart$: Observable<boolean> = this.hasStartSubject.asObservable();
  constructor(
      private mapService: MapService,
      private userService: UsersService
    ) {
  }

  public submitZipCode(value: string): void  {
    const geocodingParams = {
        searchText: value
    };
    const geocoder = this.platform.getGeocodingService();
    geocoder.geocode(geocodingParams, (result: any) => {
        console.log(result);
        console.log(result.Response.View[0].Result[0].Location.DisplayPosition);
        this.starter.location = {
            lat: result.Response.View[0].Result[0].Location.DisplayPosition.Latitude,
            lng: result.Response.View[0].Result[0].Location.DisplayPosition.Longitude
        };

    }, (e: any) => {
        alert(e);
    });
      this.mapService.geocode(value);
  }

  public submitPhoneNumber(value: string): void {
      this.starter.phoneNumber = value;
  }

  public submitName(value: string): void  {
      this.starter.name = value;
      this.userService.createBasicUser(this.starter);
      this.hasStartSubject.next(false);
  }
}
