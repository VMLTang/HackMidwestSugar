import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

/* @angular */

/* @angular/flex-layout */

/* @angular/cdk */

/* @angular/material */

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
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule
  ],
})
export class SugarSharedModule {}
