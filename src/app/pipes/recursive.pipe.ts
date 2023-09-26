import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recursive',
})
export class RecursivePipe implements PipeTransform {
  transform(obj: any): {key: string, value: any}[] {
    return this.flattenObject(obj);
  }

  private flattenObject(obj: any): {key: string, value: any}[] {
    const result: any[] = [];

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object') {
          result.push(...this.flattenObject(obj[key]));
        } else {
          result.push({ key, value: obj[key] });
        }
      }
    }
    return result;
  }
}
