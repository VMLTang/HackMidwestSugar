import { AfterViewInit, Component } from '@angular/core';

declare const SineWaves: any;

@Component({
    selector: 'sugar-path-chooser',
    templateUrl: './path-chooser.html',
    styleUrls: ['./path-chooser.scss']
})
export class PathChooserComponent implements AfterViewInit {
    public ngAfterViewInit() {
        // const canvas: HTMLCanvasElement = document.getElementById('waves') as HTMLCanvasElement;
        // const width = canvas!.width;

        const waves = new SineWaves({
            el: document.getElementById('waves'),
            speed: 5,
            ease: 'SineInOut',
            wavesWidth: '100%',

            waves: [
                {
                    timeModifier: 4,
                    lineWidth: 1,
                    amplitude: -25,
                    wavelength: 25
                },
                {
                    timeModifier: 2,
                    lineWidth: 1,
                    amplitude: -10,
                    wavelength: 30
                },
                {
                    timeModifier: 1,
                    lineWidth: 1,
                    amplitude: -30,
                    wavelength: 30
                },
                {
                    timeModifier: 3,
                    lineWidth: 1,
                    amplitude: 40,
                    wavelength: 40
                },
                {
                    timeModifier: 0.5,
                    lineWidth: 1,
                    amplitude: -60,
                    wavelength: 60
                },
                {
                    timeModifier: 1.3,
                    lineWidth: 1,
                    amplitude: -40,
                    wavelength: 40
                }
            ]
        });

        const gradient = waves.ctx.createLinearGradient(0, 0, waves.width, 0);
        gradient.addColorStop(0, 'rgba(25, 255, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(255, 25, 255, 0.75)');
        gradient.addColorStop(1, 'rgba(255, 255, 25, 0');

        let index = -1;
        while (++index < 6) {
            waves.waves[index].strokeStyle = gradient;
            waves.waves[index].y = 10;
        }
    }

    public onIHave(): void  {

    }

    public onINeed(): void {

    }
}
