import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutString'
})
export class CutStringPipe implements PipeTransform {

  transform(value: string) {
    var returnValue = value.substr(0, 500);
    return returnValue.substr(0, Math.min(returnValue.length, returnValue.lastIndexOf(' '))) + '...';
  }
}
