import { AfterViewInit, Component } from '@angular/core';

declare const H: any;

@Component({
    selector: 'sugar-map',
    templateUrl: './map.html'
})
export class MapComponent implements AfterViewInit {

    public platform = new H.service.Platform({
        'app_id': 'uf15v48L6LE8m0gPzETV',
        'app_code': 'wFGAWN-X2t5RLJYc8Ul6Aw',
        useCIT: true,
        useHTTPS: true
    });

    constructor(private parentElement: HTMLElement) {
        console.log('here');
    }

    public ngAfterViewInit() {
        const defaultLayers = this.platform.createDefaultLayers();
        const map = new H.Map(
            this.parentElement,
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
