import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringConvert',
  pure:false
})
export class StringConvertPipe implements PipeTransform {

  transform(value: string[], ): string[] {
     let res:string[]=[];

     for(let i=0; i < value.length; i++ ){
        if(value[i].includes('-')){
          let newStr=value[i].split('-').join(' ');
          res.push(newStr);

        }else {
          res.push(value[i]);

        }
     }
    return res;
  }

}
