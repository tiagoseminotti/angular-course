import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: string[], order?: any): any {
    if (order === 'ASC') {
      return value.sort(function(a: any, b: any){
        if (a.name > b.name){
          return 1;
        }
        if (a.name < b.name){
          return -1;
        }
        return 0;
      });
    }
    if (order === 'DESC') {
      return value.sort(function(a: any, b: any){
        if (a.name > b.name){
          return -1;
        }
        if (a.name < b.name){
          return 1;
        }
        return 0;
      });
    }
  }
}