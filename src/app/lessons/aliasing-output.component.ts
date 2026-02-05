import { Component, Output, EventEmitter } from '@angular/core';

// Toggle Switch with aliased output
@Component({
  selector: 'app-toggle-switch',
  template: `
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        [checked]="isOn"
        (change)="toggle()"
        role="switch">
      <label class="form-check-label">{{ isOn ? 'ON' : 'OFF' }}</label>
    </div>
  `
})
export class ToggleSwitchComponent {
  isOn = false;

  // Alias: internal 'stateChange' exposed as 'toggled' externally
  @Output('toggled') stateChange = new EventEmitter<boolean>();

  toggle() {
    this.isOn = !this.isOn;
    this.stateChange.emit(this.isOn);
  }
}

// Rating component with aliased output
@Component({
  selector: 'app-rating-input',
  template: `
    <div class="d-inline-block">
      @for (star of [1,2,3,4,5]; track star) {
        <span
          class="fs-4"
          style="cursor: pointer"
          (click)="rate(star)"
          (mouseenter)="hover = star"
          (mouseleave)="hover = 0">
          {{ (hover || rating) >= star ? '★' : '☆' }}
        </span>
      }
    </div>
  `
})
export class RatingInputComponent {
  rating = 0;
  hover = 0;

  // Alias: internal 'ratingSelected' exposed as 'rated' externally
  @Output('rated') ratingSelected = new EventEmitter<number>();

  rate(value: number) {
    this.rating = value;
    this.ratingSelected.emit(value);
  }
}

// Lesson 7: Aliasing Output Properties
@Component({
  selector: 'app-aliasing-output',
  imports: [ToggleSwitchComponent, RatingInputComponent],
  template: `
    <div class="card">
      <div class="card-header bg-warning">
        <h5>Lesson 7: Aliasing Output Properties</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Use aliases to expose different names for output events</p>

        <h6>1. Toggle Switch with aliased output:</h6>
        <app-toggle-switch (toggled)="onToggle($event)"></app-toggle-switch>
        <p class="mt-2">Switch state: {{ switchState ? 'ON' : 'OFF' }}</p>
        <p class="text-muted">
          Internal: <code>stateChange</code> → External: <code>toggled</code>
        </p>

        <h6 class="mt-4">2. Rating with aliased output:</h6>
        <app-rating-input (rated)="onRated($event)"></app-rating-input>
        <p class="mt-2">Selected rating: {{ selectedRating }} stars</p>
        <p class="text-muted">
          Internal: <code>ratingSelected</code> → External: <code>rated</code>
        </p>

        <h6 class="mt-4">3. Multiple instances:</h6>
        <div class="row">
          <div class="col-md-4">
            <p>Dark Mode:</p>
            <app-toggle-switch (toggled)="darkMode = $event"></app-toggle-switch>
            <small class="text-muted">{{ darkMode }}</small>
          </div>
          <div class="col-md-4">
            <p>Notifications:</p>
            <app-toggle-switch (toggled)="notifications = $event"></app-toggle-switch>
            <small class="text-muted">{{ notifications }}</small>
          </div>
          <div class="col-md-4">
            <p>Sound:</p>
            <app-toggle-switch (toggled)="sound = $event"></app-toggle-switch>
            <small class="text-muted">{{ sound }}</small>
          </div>
        </div>

        <div class="alert alert-info mt-4">
          <strong>Syntax:</strong>
          <pre class="mb-0">// Internal name 'stateChange', external name 'toggled'
&#64;Output('toggled') stateChange = new EventEmitter&lt;boolean&gt;();

// Method 2: Object parameter (Angular 16+)
&#64;Output(&#123; alias: 'toggled' &#125;) stateChange = new EventEmitter&lt;boolean&gt;();</pre>
          <strong class="mt-2 d-block">Usage:</strong>
          <pre class="mb-0">&lt;app-toggle (toggled)="onToggle($event)"&gt;&lt;/app-toggle&gt;</pre>
        </div>
      </div>
    </div>
  `
})
export class AliasingOutputComponent {
  switchState = false;
  selectedRating = 0;
  darkMode = false;
  notifications = false;
  sound = false;

  onToggle(state: boolean) {
    this.switchState = state;
  }

  onRated(rating: number) {
    this.selectedRating = rating;
  }
}
