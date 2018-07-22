import { Injectable } from '@angular/core';
import { MapService } from '@sugar/app/map/map-service';
import { StarterUser } from '@sugar/app/start/start.types';
import { BehaviorSubject, Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartService {
    private hasStartSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    private starter: StarterUser = {} as StarterUser;

    public hasStart$: Observable<boolean> = this.hasStartSubject.asObservable();
  constructor(private mapService: MapService) {
  }

  public submitZipCode(value: string): void  {
      this.starter.zipcode = value;
      this.mapService.geocode(value);
  }

  public submitPhoneNumber(value: string): void {
      this.starter.phoneNumber = value;
  }

  public submitName(value: string): void  {
      this.starter.name = value;
      this.hasStartSubject.next(false);
  }
}
