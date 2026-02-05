import { Component, Input } from '@angular/core';

// Child Component with Aliased Input
@Component({
  selector: 'app-user-badge',
  template: `
    <span class="badge" [class]="'bg-' + color">
      {{ displayName }}
    </span>
  `
})
export class UserBadgeComponent {
  // Aliasing: internal property name differs from external binding name
  @Input('username') displayName: string = '';
  @Input() color: string = 'primary';
}

// Another example with alias
@Component({
  selector: 'app-star-rating',
  template: `
    <span class="text-warning">
      @for (star of stars; track $index) {
        <span>{{ star <= rating ? '★' : '☆' }}</span>
      }
    </span>
    <span class="ms-2">({{ rating }}/5)</span>
  `
})
export class StarRatingComponent {
  @Input('value') rating: number = 0;
  stars = [1, 2, 3, 4, 5];
}

// Lesson 4: Aliasing Input Properties
@Component({
  selector: 'app-aliasing-input',
  imports: [UserBadgeComponent, StarRatingComponent],
  template: `
    <div class="card">
      <div class="card-header bg-success text-white">
        <h5>Lesson 4: Aliasing Input Properties</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Use aliases to expose a different public API name</p>

        <h6>1. User Badge with aliased input:</h6>
        <p>
          <app-user-badge username="john_doe" color="primary"></app-user-badge>
          <app-user-badge username="admin" color="danger" class="ms-2"></app-user-badge>
          <app-user-badge username="guest" color="secondary" class="ms-2"></app-user-badge>
        </p>
        <p class="text-muted">
          External: <code>username</code> → Internal: <code>displayName</code>
        </p>

        <h6 class="mt-4">2. Star Rating with aliased input:</h6>
        <p>
          Product A: <app-star-rating [value]="4"></app-star-rating>
        </p>
        <p>
          Product B: <app-star-rating [value]="2"></app-star-rating>
        </p>
        <p>
          Product C: <app-star-rating [value]="5"></app-star-rating>
        </p>
        <p class="text-muted">
          External: <code>value</code> → Internal: <code>rating</code>
        </p>

        <h6 class="mt-4">Why use aliases?</h6>
        <ul>
          <li>Keep internal property names meaningful</li>
          <li>Change public API without breaking internal code</li>
          <li>Make component API more intuitive for consumers</li>
        </ul>

        <div class="alert alert-info mt-4">
          <strong>Syntax:</strong>
          <pre class="mb-0">// Method 1: String parameter
&#64;Input('externalName') internalName: string = '';

// Method 2: Object parameter (Angular 16+)
&#64;Input(&#123; alias: 'externalName' &#125;) internalName: string = '';</pre>
          <strong class="mt-2 d-block">Usage:</strong>
          <pre class="mb-0">&lt;app-component externalName="value"&gt;&lt;/app-component&gt;</pre>
        </div>
      </div>
    </div>
  `
})
export class AliasingInputComponent {}
