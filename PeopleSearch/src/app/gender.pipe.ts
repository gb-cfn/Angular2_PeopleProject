import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    value = value.toUpperCase();
    return (value === 'F') ? 'Female' :
      (value === 'M') ? 'Male' : 'Unknown';
  }

}
