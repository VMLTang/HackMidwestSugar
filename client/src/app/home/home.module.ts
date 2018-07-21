import { NgModule } from '@angular/core';
import { SugarSharedModule } from '@sugar/app/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SugarSharedModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
