import { NgModule } from '@angular/core';
import { SugarSharedModule } from '@sugar/app/shared.module';
import { MapComponent } from './map';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    SugarSharedModule
  ],
  exports: [
    MapComponent
  ],
  providers: [],
  bootstrap: []
})
export class MapModule { }
