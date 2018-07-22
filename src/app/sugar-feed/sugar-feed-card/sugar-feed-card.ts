import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
  } from '@angular/core';
import { environment } from '@sugar/environments/environment.prod';
import { Posting } from '@sugar/lib';
import { BehaviorSubject, Observable } from '../../../../node_modules/rxjs';

declare const H: any;

@Component({
  selector: 'sugar-feed-card',
  templateUrl: './sugar-feed-card.html',
  styleUrls: ['./sugar-feed-card.scss']
})
export class SugarFeedCardComponent implements OnChanges {
  @Input() post: Posting;
  private platform = new H.service.Platform(environment.hereConfig);
  private locationSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  public location$: Observable<string | null> = this.locationSubject.asObservable();
    public onLike(): void {

    }

    public toogleComment(): void {

    }

    public submitComment(): void {
    }

    public ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      if (changes.post.currentValue) {
        const reverseGeocodingParameters = {
          prox: changes.post.currentValue.pickupLocation.lat.toString() + ',' + changes.post.currentValue.pickupLocation.long.toString(),
          mode: 'retrieveAddresses',
          maxresults: 1
        };

        const geocoder = this.platform.getGeocodingService();
        geocoder.reverseGeocode(reverseGeocodingParameters, (result: any) => {
          console.log(result);
          this.locationSubject.next(result.Response.View[0].Result[0].Location.Address.Label);
        }, (e: any) => {
          console.log(e);
          this.locationSubject.next('');
         });
        console.log(reverseGeocodingParameters);
      }
    }
}
