import { Injectable } from '@angular/core';
import { UsersService } from '@sugar/app/core/user.service';
import { StarterUser } from '@sugar/app/start/start.types';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
    providedIn: 'root'
})
export class NeedsService {
    private user: StarterUser;

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

    public submitNeed(): void {
        this.http.post<any>('api/postings', {
            createdBy: this.user.userId
        }).subscribe(value => { console.log(value); });
    }

    public getNeeds(): Observable<any> {
        return this.http.get('/api/postings', {
            params: {
              cellNumber: 'id1234'
            },
            observe: 'response'
          });
    }
}
