import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}

  formatNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
