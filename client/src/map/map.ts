import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnChanges,
    SimpleChanges
    } from '@angular/core';
import { environment } from '@sugar/environments/environment.prod';
import { MapLocationOptions } from '@sugar/map/map.types';

declare const H: any;

@Component({
    selector: 'sugar-map',
    templateUrl: './map.html',
    styleUrls: [ './map.component.scss' ]
})
export class MapComponent implements AfterViewInit, OnChanges {
    @Input() mapLocationOptions: MapLocationOptions;
    private map: any;
    private platform = new H.service.Platform(environment.hereConfig);
    private defaultLayers = this.platform.createDefaultLayers();

    constructor(
        private element: ElementRef
    ) {
        console.log('here');
    }

    public ngAfterViewInit() {
    }

    public ngOnChanges(changes: SimpleChanges): void  {
        console.log('changed', changes, this.mapLocationOptions);
        if (changes.mapLocationOptions.firstChange) {
            console.log('first change');
            this.map = new H.Map(
                this.element.nativeElement,
                this.defaultLayers.normal.map,
                this.mapLocationOptions);
        }
        console.log(this.map);
        // this.map.zo
    }
}
