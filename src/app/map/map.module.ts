import { NgModule } from '@angular/core';
import { MapComponent } from '@sugar/app/map/map';
import { MapService } from '@sugar/app/map/map-service';
import { SugarSharedModule } from '@sugar/app/shared.module';

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
