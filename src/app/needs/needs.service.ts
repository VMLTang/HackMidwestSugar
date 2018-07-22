import { Injectable } from '@angular/core';
import { UsersService } from '@sugar/app/core/user.service';
import { StarterUser } from '@sugar/app/start/start.types';
import { environment } from '@sugar/environments/environment.prod';
import { PostingStatus, PostingType } from '@sugar/lib';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { BehaviorSubject, Observable } from '../../../node_modules/rxjs';

declare const H: any;

@Injectable({
    providedIn: 'root'
})
export class NeedsService {
    private user: StarterUser;
    private needsSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    private platform = new H.service.Platform(environment.hereConfig);

    public needs$: Observable<any> = this.needsSubject.asObservable();

    constructor(
        private userService: UsersService,
        private http: HttpClient
    ) {
        this.userService.user$.subscribe(value => {
            if (value) {
                console.log(value);
                this.user = value;

            }
        });
    }

    public submitNeed(value: string): void {
        const expireDate = new Date();
        expireDate.setHours(expireDate.getHours() + 6);

        const reverseGeocodingParameters = {
            prox: this.user.location.lat.toString() + ',' + this.user.location.lng.toString(),
            mode: 'retrieveAddresses',
            maxresults: 1
        };

        const geocoder = this.platform.getGeocodingService();
        geocoder.reverseGeocode(reverseGeocodingParameters, (result: any) => {
            console.log(result);
            this.http.post<any>('https://vmltang-sugar-api.azurewebsites.net/api/postings', {
                type: PostingType.Request,
                status: PostingStatus.Pending,
                expiresAt: expireDate.toString(),
                createdBy: this.user.userId,
                pickupLocation: {
                    lat: this.user.location.lat,
                    long: this.user.location.lng,
                    description: result.Response.View[0].Result[0].Location.Address.Label
                },
                content: {
                    message: value,
                    item: `Alex's nuts`,
                    quantity: 1
                }
            }).subscribe(returnValue => {
                console.log(returnValue);
                // this.getNeeds();
            });
        }, (e: any) => {
            console.log(e);
        });


    }

    public getNeeds(): void {
        this.http.get('/api/postings', {
            params: {
                cellNumber: 'id1234'
            },
            observe: 'response'
        }).subscribe(value => {
            this.needsSubject.next(value);
        });
    }
}
