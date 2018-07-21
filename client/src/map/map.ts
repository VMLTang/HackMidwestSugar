import { AfterViewInit, Component, Input } from '@angular/core';
import { environment } from '@sugar/environments/environment.prod';

declare const H: any;

@Component({
    selector: 'sugar-map',
    templateUrl: './map.html'
})
export class MapComponent implements AfterViewInit {
    @Input() parentElement: HTMLElement;
    public platform = new H.service.Platform(environment.hereConfig);

    constructor() {
        console.log('here');
    }

    public ngAfterViewInit() {
        const defaultLayers = this.platform.createDefaultLayers();
        const map = new H.Map(this.parentElement,
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
