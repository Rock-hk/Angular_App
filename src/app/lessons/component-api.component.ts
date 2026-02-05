import { Component, Input, Output, EventEmitter } from '@angular/core';

// Example reusable component with full API
@Component({
  selector: 'app-favorite',
  template: `
    <span
      class="favorite-icon"
      [class.active]="isFavorite"
      (click)="onClick()">
      {{ isFavorite ? '★' : '☆' }}
    </span>
  `,
  styles: [`
    .favorite-icon {
      font-size: 24px;
      cursor: pointer;
      color: #ccc;
      transition: color 0.2s;
    }
    .favorite-icon:hover { color: #ffc107; }
    .favorite-icon.active { color: #ffc107; }
  `]
})
export class FavoriteComponent {
  @Input() isFavorite = false;
  @Output() change = new EventEmitter<boolean>();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }
}

// Lesson 2: Component API
@Component({
  selector: 'app-component-api',
  imports: [FavoriteComponent],
  template: `
    <div class="card">
      <div class="card-header bg-dark text-white">
        <h5>Lesson 2: Component API</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Components communicate through Input and Output properties</p>

        <h6>Component API Diagram:</h6>
        <div class="border p-3 bg-light text-center mb-4">
          <div class="d-flex justify-content-center align-items-center gap-4">
            <div class="border p-2 bg-white">Parent</div>
            <div class="d-flex flex-column align-items-center">
              <div>&#64;Input() →</div>
              <div>← &#64;Output()</div>
            </div>
            <div class="border p-2 bg-primary text-white">Child</div>
          </div>
        </div>

        <h6>Example: Favorite Component</h6>
        <div class="d-flex align-items-center gap-3 mb-3">
          <app-favorite [isFavorite]="isFavorited" (change)="onFavoriteChange($event)"></app-favorite>
          <span>Status: {{ isFavorited ? 'Favorited' : 'Not favorited' }}</span>
        </div>

        <h6>Component API consists of:</h6>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Type</th>
              <th>Decorator</th>
              <th>Purpose</th>
              <th>Data Flow</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Input Property</td>
              <td><code>&#64;Input()</code></td>
              <td>Receive data from parent</td>
              <td>Parent → Child</td>
            </tr>
            <tr>
              <td>Output Property</td>
              <td><code>&#64;Output()</code></td>
              <td>Send events to parent</td>
              <td>Child → Parent</td>
            </tr>
          </tbody>
        </table>

        <div class="alert alert-info mt-4">
          <strong>Favorite Component Code:</strong>
          <pre class="mb-0">&#64;Component(&#123;
  selector: 'app-favorite',
  template: \`&lt;span (click)="onClick()"&gt;...&lt;/span&gt;\`
&#125;)
export class FavoriteComponent &#123;
  &#64;Input() isFavorite = false;      // Input: receive state
  &#64;Output() change = new EventEmitter&lt;boolean&gt;();  // Output: emit events

  onClick() &#123;
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);  // Notify parent
  &#125;
&#125;</pre>
        </div>
      </div>
    </div>
  `
})
export class ComponentApiComponent {
  isFavorited = false;

  onFavoriteChange(isFavorite: boolean) {
    this.isFavorited = isFavorite;
  }
}
