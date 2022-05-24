import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../../_model/product";

@Pipe({
  name: 'arraySplice',
  pure:false
})
export class ArraySplicePipe implements PipeTransform {

  transform(value: Product[], filter:string='$f'): Product[] {

    let result:Product[]=[];
    for(let i=0; i < value.length; i++ ){
      if(value[i].productName.includes(filter)){
        result.push(value[i]);

      }
      

  }
  return result;
  }

}
