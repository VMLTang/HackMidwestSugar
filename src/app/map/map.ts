import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { MapService } from '@sugar/app/map/map-service';
import { environment } from '@sugar/environments/environment.prod';
import { MapPoint } from '@sugar/lib';

declare const H: any;

@Component({
    selector: 'sugar-map',
    templateUrl: './map.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
    private map: any;
    private platform = new H.service.Platform(environment.hereConfig);
    private defaultLayers = this.platform.createDefaultLayers();

    constructor(
        private element: ElementRef,
        private mapService: MapService
    ) { }

    public ngAfterViewInit() {
        this.mapService.mapOptions$.subscribe(value => {
            console.log('HERE');
            if (this.map) {
                this.setZoom(value.zoom);
                this.setCenter(value.center);
            } else {
                this.map = new H.Map(
                    this.element.nativeElement,
                    this.defaultLayers.normal.map,
                    value);
            }
        });
    }

    public setCenter(center: MapPoint): void {
    this.map.setCenter(center, true);
}

    public setZoom(zoom: number): void {
    this.map.setZoom(zoom, true);
}
}
