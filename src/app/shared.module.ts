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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

/* @angular */

/* @angular/flex-layout */

/* @angular/cdk */

@NgModule({
  exports: [
    /* @angular */
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    /* @angular/flex-layout */
    FlexLayoutModule,

    /* @angular/cdk */
    LayoutModule,

    /* @angular/material */
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
})
export class SugarSharedModule {}
