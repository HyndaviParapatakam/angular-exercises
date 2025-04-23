import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureUppercase',
  pure: true
})
export class PureUppercasePipe implements PipeTransform {
  transform(value: string): string {
    console.log('Pure pipe executed for:', value);
    return value.toUpperCase();
  }
}
