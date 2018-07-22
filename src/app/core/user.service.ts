import { Injectable } from '@angular/core';
import { StarterUser } from '@sugar/app/start/start.types';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { BehaviorSubject, Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userSubject = new BehaviorSubject<StarterUser | null>(null);

  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  get userId() {
    return localStorage.getItem('userId') || null;
  }

  public createBasicUser(user: StarterUser): void {
      console.log('CREATE');
    this.http
      .post<any>('https://vmltang-sugar-api.azurewebsites.net/api/users',
      {
            cellNumber: user.phoneNumber,
            location: user.location,
            name: user.name
      }).subscribe(value =>  {
          console.log(value);
          const newUser: StarterUser = { ...user};
          newUser.userId = value.id;
          localStorage.setItem('userId', value.id);
          this.userSubject.next(newUser);
        });

  }
}
