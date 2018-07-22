import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeedComponent } from '@sugar/app/needs/need/need';
import { NeedsComponent } from '@sugar/app/needs/needs';




const expoRoutes: Routes = [
    {
        path: 'needs/new',
        component: NeedComponent,
    },
    {
        path: 'needs',
        component: NeedsComponent,
        children: [
            {
                path: ':needsId',
                component: NeedsComponent
            }
        ]
    },
    {
        path: 'needs',
        component: NeedsComponent,
    },
];


@NgModule({
    imports: [
        RouterModule.forChild(expoRoutes),
    ],
    exports: [
        RouterModule,
    ],
})
export class NeedsRoutingModule { }
