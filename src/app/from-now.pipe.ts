import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'fromNow',
})
export class FromNowPipe implements PipeTransform {
  transform(value: any): string {
    const time = moment(value);
    return time.isValid() ? time.fromNow() : value;
  }
}
