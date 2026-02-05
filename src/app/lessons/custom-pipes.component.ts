import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Custom Pipe 1: Summary Pipe
@Pipe({ name: 'summary' })
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit: number = 50): string {
    if (!value) return '';
    if (value.length <= limit) return value;
    return value.substring(0, limit) + '...';
  }
}

// Custom Pipe 2: Reverse Pipe
@Pipe({ name: 'reverse' })
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.split('').reverse().join('');
  }
}

// Custom Pipe 3: Filter Pipe
@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(items: string[], searchText: string): string[] {
    if (!items || !searchText) return items;
    return items.filter(item =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}

// Custom Pipe 4: Time Ago Pipe
@Pipe({ name: 'timeAgo' })
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date): string {
    if (!value) return '';
    const seconds = Math.floor((new Date().getTime() - value.getTime()) / 1000);

    if (seconds < 60) return 'just now';
    if (seconds < 3600) return Math.floor(seconds / 60) + ' minutes ago';
    if (seconds < 86400) return Math.floor(seconds / 3600) + ' hours ago';
    return Math.floor(seconds / 86400) + ' days ago';
  }
}

// Lesson 12: Custom Pipes
@Component({
  selector: 'app-custom-pipes',
  imports: [FormsModule, SummaryPipe, ReversePipe, FilterPipe, TimeAgoPipe],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #e83e8c; color: white;">
        <h5>Lesson 12: Custom Pipes</h5>
      </div>
      <div class="card-body">
        <h6>1. Summary Pipe (truncate text):</h6>
        <p class="border p-2 bg-light">
          <strong>Original:</strong><br>{{ longText }}
        </p>
        <p class="border p-2">
          <strong>summary:</strong><br>{{ longText | summary }}
        </p>
        <p class="border p-2">
          <strong>summary:20:</strong><br>{{ longText | summary:20 }}
        </p>

        <h6 class="mt-4">2. Reverse Pipe:</h6>
        <p>Original: {{ name }}</p>
        <p>Reversed: {{ name | reverse }}</p>

        <h6 class="mt-4">3. Filter Pipe:</h6>
        <input
          type="text"
          class="form-control mb-2"
          [(ngModel)]="searchText"
          placeholder="Search fruits...">
        <ul class="list-group">
          @for (fruit of fruits | filter:searchText; track fruit) {
            <li class="list-group-item">{{ fruit }}</li>
          }
        </ul>

        <h6 class="mt-4">4. Time Ago Pipe:</h6>
        <p>Posted: {{ pastDate | timeAgo }}</p>
        <p>Updated: {{ recentDate | timeAgo }}</p>

        <h6 class="mt-4">Creating a Custom Pipe:</h6>
        <div class="alert alert-secondary">
          <pre class="mb-0">import &#123; Pipe, PipeTransform &#125; from '&#64;angular/core';

&#64;Pipe(&#123; name: 'summary' &#125;)
export class SummaryPipe implements PipeTransform &#123;
  transform(value: string, limit: number = 50): string &#123;
    if (!value) return '';
    if (value.length <= limit) return value;
    return value.substring(0, limit) + '...';
  &#125;
&#125;</pre>
        </div>

        <div class="alert alert-info mt-4">
          <strong>Steps to create custom pipe:</strong>
          <ol class="mb-0">
            <li>Import <code>Pipe</code> and <code>PipeTransform</code></li>
            <li>Add <code>&#64;Pipe</code> decorator with name</li>
            <li>Implement <code>PipeTransform</code> interface</li>
            <li>Add <code>transform()</code> method</li>
            <li>Import pipe in component or module</li>
          </ol>
        </div>
      </div>
    </div>
  `
})
export class CustomPipesComponent {
  longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  name = 'Angular';
  searchText = '';
  fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
  pastDate = new Date(Date.now() - 86400000 * 3); // 3 days ago
  recentDate = new Date(Date.now() - 3600000); // 1 hour ago
}
