import { Injectable } from '@angular/core';
import { StarterUser } from '@sugar/app/start/start.types';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { BehaviorSubject, Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    private userSubject: BehaviorSubject<StarterUser | null> = new BehaviorSubject<StarterUser | null>(null);

    public user$: Observable<StarterUser | null> = this.userSubject.asObservable();
  constructor(private http: HttpClient) {
  }

  public createBasicUser(user: StarterUser): void {
      console.log('CREATE');
    this.http
      .post<any>('https://vmltang-sugar-api.azurewebsites.net/api/users',
      {
            cellNumber: user.phoneNumber,
            name: user.name
      }).subscribe(value =>  {
          console.log(value);
          const newUser: StarterUser = { ...user};
          newUser.userId = value.id;
          this.userSubject.next(newUser);
        });

  }
}
