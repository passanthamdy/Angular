import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerToX'
})
export class PowerToXPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return null;
  }

}
