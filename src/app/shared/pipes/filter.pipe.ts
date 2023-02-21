import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[], searchTerm:string) {
    return value.filter(function(search:any){
    return ( search.PostName.toLowerCase().indexOf(searchTerm.toLowerCase())>-1)
    })
   }

}
