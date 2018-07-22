import { NgModule } from '@angular/core';
import { PathChooserComponent } from '@sugar/app/path-chooser/path-choose';
import { SugarSharedModule } from '@sugar/app/shared.module';

@NgModule({
  declarations: [
    PathChooserComponent
  ],
  imports: [
    SugarSharedModule
  ],
  exports: [
    PathChooserComponent
  ],
  providers: [],
  bootstrap: []
})
export class PathChooserModule { }
