import { Component } from '@angular/core';
import { NeedsService } from '@sugar/app/needs/needs.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
    selector: 'sugar-need',
    templateUrl: './need.html',
    styleUrls: ['./need.scss']
})
export class NeedComponent {
    constructor(
        private router: Router,
        private needsService: NeedsService
    ) {}

    public goBack(): void  {
        this.router.navigateByUrl('/home');
    }

    public submitNeed(): void {
        this.needsService.submitNeed();
    }
}
