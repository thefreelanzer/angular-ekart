import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
  standalone: true,
})
export class PercentagePipe implements PipeTransform {
  transform(value: any, total: any, decimal: number) {
    return ((value / total) * 100).toFixed(decimal) + '%';
  }
}
