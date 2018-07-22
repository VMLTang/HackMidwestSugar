import { Injectable } from '@angular/core';
import { UsersService } from '@sugar/app/core/user.service';
import { StarterUser } from '@sugar/app/start/start.types';
import { PostingStatus, PostingType } from '@sugar/lib';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { BehaviorSubject, Observable } from '../../../node_modules/rxjs';

@Injectable({
    providedIn: 'root'
})
export class NeedsService {
    private user: StarterUser;
    private needsSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    public needs$: Observable<any> = this.needsSubject.asObservable();

    constructor(
        private userService: UsersService,
        private http: HttpClient
    ) {
        this.userService.user$.subscribe(value => {
            if (value) {
                this.user = value;

            }
        });
    }

    public submitNeed(value: string): void {
        const expireDate = new Date();
        expireDate.setHours(expireDate.getHours() + 6);
        this.http.post<any>('https://vmltang-sugar-api.azurewebsites.net/api/postings', {
            type: PostingType.Request,
            status: PostingStatus.Pending,
            expiresAt: expireDate.toString(),
            createdBy: this.user.userId,
            pickupLocation: {
                lat: this.user.location.lat,
                long: this.user.location.lng
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
