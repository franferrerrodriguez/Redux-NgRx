import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapType'
})
export class MapTypePipe implements PipeTransform {

  transform(value: any): any {
    return value === 'ingress' ? 'INGRESO' : 'EGRESO';
  }

}
