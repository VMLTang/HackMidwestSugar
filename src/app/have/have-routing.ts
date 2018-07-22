import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HaveComponent } from '@sugar/app/have/have';




const expoRoutes: Routes = [
    {
        path: 'haves/new',
        component: HaveComponent,
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(expoRoutes),
    ],
    exports: [
        RouterModule,
    ],
})
export class HaveRoutingModule { }
