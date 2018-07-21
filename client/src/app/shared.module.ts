import { NgModule } from '@angular/core';

/* @angular */
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/* @angular/flex-layout */
import { FlexLayoutModule } from '@angular/flex-layout';

/* @angular/cdk */
import { LayoutModule } from '@angular/cdk/layout';

/* @angular/material */
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    /* @angular */
    RouterModule,
    CommonModule,
    ReactiveFormsModule,

    /* @angular/flex-layout */
    FlexLayoutModule,

    /* @angular/cdk */
    LayoutModule,

    /* @angular/material */
    MatButtonModule,
  ],
})
export class SugarSharedModule {}
