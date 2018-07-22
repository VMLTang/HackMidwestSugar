import { Component } from '@angular/core';
import { NeedsService } from '@sugar/app/needs/needs.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
    selector: 'sugar-needs',
    templateUrl: './needs.html',
    styleUrls: ['./needs.scss']
})
export class NeedsComponent {
    public needs$: Observable<any>;
    constructor(private needsService: NeedsService) {
        this.needs$ = this.needsService.needs$;
     }
}
