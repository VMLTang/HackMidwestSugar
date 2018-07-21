import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { environment } from '@sugar/environments/environment.prod';

declare const H: any;

@Component({
    selector: 'sugar-map',
    templateUrl: './map.html',
    styleUrls: [ './map.component.scss' ]
})
export class MapComponent implements AfterViewInit {
    public platform = new H.service.Platform(environment.hereConfig);

    constructor(
        private element: ElementRef
    ) {
        console.log('here');
    }

    public ngAfterViewInit() {
        const defaultLayers = this.platform.createDefaultLayers();
        const map = new H.Map(
            this.element.nativeElement,
            defaultLayers.normal.map,
            {
                zoom: 10,
                center: { lat: 52.5, lng: 13.4 }
            });

        // // Instantiate (and display) a map object:
        // const map = new H.Map(
        //     document.getElementById('mapContainer'),
        //     defaultLayers.normal.map,
        //     {
        //         zoom: 10,
        //         center: { lat: 52.5, lng: 13.4 }
        //     });


        console.log(map);


    }
}
