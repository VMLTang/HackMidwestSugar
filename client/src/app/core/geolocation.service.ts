import { Observable, Subscriber } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GeolocationService {

  readonly position: Observable<Position>;

  constructor() {
    this.position = Observable.create((sub: Subscriber<Position>) => {
      const watchId = navigator.geolocation.watchPosition(
        position => sub.next(position),
        error => sub.error(error)
      );

      return () => {
        console.log('destroying position watcher');
        navigator.geolocation.clearWatch(watchId);
      };
    });
  }

}
