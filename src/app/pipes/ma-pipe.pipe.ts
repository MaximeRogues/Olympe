import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maPipe'
})
export class MaPipePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const listeNom = value.split(' ');
    return listeNom[0][0] + '.' + listeNom[1][0]; 
  }

}
