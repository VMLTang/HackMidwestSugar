import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* @angular */
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* @angular/flex-layout */
import { FlexLayoutModule } from '@angular/flex-layout';

/* @angular/cdk */
import { LayoutModule } from '@angular/cdk/layout';

/* @angular/material */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    MatListModule,
    MatToolbarModule
  ],
})
export class SugarSharedModule {}
