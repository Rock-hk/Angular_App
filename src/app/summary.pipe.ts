import { Pipe, PipeTransform } from '@angular/core';

// Topic 12: Custom Pipes
// This pipe truncates text to a specified length and adds '...'
@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number): string {
    if (!value) return '';

    const actualLimit = limit ? limit : 50;

    if (value.length <= actualLimit) {
      return value;
    }

    return value.substring(0, actualLimit) + '...';
  }
}
