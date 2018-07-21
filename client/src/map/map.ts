import { Component } from '@angular/core';

declare const H: any;

@Component({
    selector: 'sugar-map',
    templateUrl: './map.html'
})
export class MapComponent {

    public platform = new H.service.Platform({
        'app_id': 'uf15v48L6LE8m0gPzETV',
        'app_code': 'wFGAWN-X2t5RLJYc8Ul6A'
    });

    title = 'app';
}


