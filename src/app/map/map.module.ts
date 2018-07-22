import { NgModule } from '@angular/core';
import { MapService } from '@sugar/app/map/map-service';
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
  providers: [MapService],
  bootstrap: []
})
export class MapModule { }
