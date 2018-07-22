import { Component } from '@angular/core';
import { PostsService } from '@sugar/app/core/posts.service';
import { HaveService } from '@sugar/app/have/have.service';
import { FormControl, Validators } from '../../../node_modules/@angular/forms';
import { Router } from '../../../node_modules/@angular/router';

@Component({
    selector: 'sugar-have',
    templateUrl: './have.html',
    styleUrls: ['./have.scss']
})
export class HaveComponent {
    public needsFormControl: FormControl;
    constructor(
        private router: Router,
        private haveService: HaveService,
        private postsService: PostsService
    ) {
        this.needsFormControl = new FormControl('', [
            Validators.required
          ]);
    }

    public goBack(): void  {
        this.router.navigateByUrl('/home');
    }

    public submitNeed(): void {
        this.haveService.submitHave(this.needsFormControl.value);
        this.postsService.getPostings();
        this.router.navigateByUrl('/home');
    }
}
