import { Injectable } from '@angular/core';
import { StarterUser } from '@sugar/app/start/start.types';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  public createBasicUser(user: StarterUser): void {
      console.log('CREATE');
    this.http
      .post<any>('https://vmltang-sugar-api.azurewebsites.net/api/users',
      {
            cellNumber: user.phoneNumber,
            name: user.name
      }).subscribe(value => console.log(value));

  }
}
