import { Component } from '@angular/core';
import { NeedsService } from '@sugar/app/needs/needs.service';
import { FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
    selector: 'sugar-need',
    templateUrl: './need.html',
    styleUrls: ['./need.scss']
})
export class NeedComponent {
    public needsFormControl: FormControl;
    constructor(
        private router: Router,
        private needsService: NeedsService
    ) {
        this.needsFormControl = new FormControl('', [
            Validators.required
          ]);
    }

    public goBack(): void  {
        this.router.navigateByUrl('/home');
    }

    public submitNeed(): void {
        console.log('submit');
        this.needsService.submitNeed(this.needsFormControl.value);
    }
}
