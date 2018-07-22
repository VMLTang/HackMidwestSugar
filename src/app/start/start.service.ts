import { Injectable } from '@angular/core';
import { StarterUser } from '@sugar/app/start/start.types';

@Injectable({
  providedIn: 'root'
})
export class StartService {
    private starter: StarterUser = {} as StarterUser;
  constructor() {
  }

  public submitZipCode(value: string): void  {
      this.starter.zipcode = value;
  }

  public submitPhoneNumber(value: string): void {
      this.starter.phoneNumber = value;
  }

  public submitName(value: string): void  {
      this.starter.name = value;
  }
}
