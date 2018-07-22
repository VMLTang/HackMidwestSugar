import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { PostsService } from '@sugar/app/core/posts.service';
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
        private mapService: MapService,
        private postService: PostsService
    ) { }

    public ngAfterViewInit() {
        this.mapService.mapOptions$.subscribe(value => {
            if (this.map) {
                this.setZoom(value.zoom);
                this.setCenter(value.center);
            } else {
                this.map = new H.Map(
                    this.element.nativeElement,
                    this.defaultLayers.terrain.map,
                    value);
            }
        });

        this.postService.getPostings();

        this.postService.posts.subscribe(posts => {
            posts.map(post => {
                if (post.pickupLocation && post.pickupLocation.lat && post.pickupLocation.long) {
                    // tslint:disable-next-line:max-line-length
                const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;

                                const icon = new H.map.Icon(svgMarkup);
                                const coords = {lat: post.pickupLocation.lat, lng: post.pickupLocation.long};
                                const marker = new H.map.Marker(coords, {icon: icon});

                                this.map.addObject(marker);
                }
            });
        });


    }

    public setCenter(center: MapPoint): void {
    this.map.setCenter(center, true);
}

    public setZoom(zoom: number): void {
    this.map.setZoom(zoom, true);
}
}
