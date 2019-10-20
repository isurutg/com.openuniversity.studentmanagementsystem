import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldFilter'
})
export class FieldFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return args.filter(item =>
      item['field_name'] === value
    );
  }

}
