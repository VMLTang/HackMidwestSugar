import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
  } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { StartService } from '@sugar/app/start/start.service';
import { BehaviorSubject, Observable } from '../../../node_modules/rxjs';

export class RegisterErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class EmailErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'sugar-start',
  templateUrl: './start.html',
  styleUrls: ['./start.scss']
})
export class StartComponent {
  // tslint:disable-next-line:max-line-length
  private registerStepSubject: BehaviorSubject<'LOCATION' | 'PHONE NUMBER' | 'NAME' | 'SUBMITTING'> = new BehaviorSubject<'LOCATION' | 'PHONE NUMBER' | 'NAME' | 'SUBMITTING'>('LOCATION');

  public registerStep$: Observable<'LOCATION' | 'PHONE NUMBER' | 'NAME' | 'SUBMITTING'> = this.registerStepSubject.asObservable();

  public locationFormControl: FormControl;
  public locationMatcher: RegisterErrorStateMatcher;

  public phoneNumberFormControl: FormControl;
  public phoneNumberMatcher: EmailErrorStateMatcher;

  public nameFormControl: FormControl;
  public nameMatcher: RegisterErrorStateMatcher;
  constructor(private starterService: StartService) {

    this.locationFormControl = new FormControl('', [
      Validators.required
    ]);

    this.locationMatcher = new RegisterErrorStateMatcher();

    this.phoneNumberFormControl = new FormControl('', [
      Validators.required
    ]);

    this.phoneNumberMatcher = new EmailErrorStateMatcher();

    this.nameFormControl = new FormControl('', [
      Validators.required
    ]);

    this.nameMatcher = new RegisterErrorStateMatcher();

  }

  public submitZipCode(): void {
    if (this.locationFormControl.valid) {
      this.starterService.submitZipCode(this.locationFormControl.value);
      this.registerStepSubject.next('PHONE NUMBER');
    }
  }

  public submitPhoneNumber(): void {
    if (this.phoneNumberFormControl.valid) {
      this.starterService.submitPhoneNumber(this.phoneNumberFormControl.value);
      this.registerStepSubject.next('NAME');
    }
  }

  public submitName(): void {
    if (this.nameFormControl.valid) {
      this.starterService.submitName(this.nameFormControl.value);
      this.registerStepSubject.next('SUBMITTING');

      /// NEED TO ADD CODE TO HIT AN API
    }
  }

}
