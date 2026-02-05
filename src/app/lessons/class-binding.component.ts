import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Lesson 5: Class Binding
// Dynamically add/remove CSS classes

@Component({
  selector: 'app-class-binding',
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header bg-info text-white">
        <h5>Lesson 5: Class Binding</h5>
      </div>
      <div class="card-body">
        <h6>1. Single class binding:</h6>
        <button
          class="btn"
          [class.btn-primary]="isActive"
          [class.btn-secondary]="!isActive"
          (click)="isActive = !isActive">
          isActive: {{ isActive }}
        </button>

        <h6 class="mt-4">2. Multiple class bindings:</h6>
        <div
          class="p-3 border"
          [class.bg-warning]="isHighlighted"
          [class.text-danger]="hasError"
          [class.fw-bold]="isBold">
          This div has multiple class bindings
        </div>
        <div class="btn-group mt-2">
          <button class="btn btn-outline-warning" (click)="isHighlighted = !isHighlighted">
            Highlight: {{ isHighlighted }}
          </button>
          <button class="btn btn-outline-danger" (click)="hasError = !hasError">
            Error: {{ hasError }}
          </button>
          <button class="btn btn-outline-dark" (click)="isBold = !isBold">
            Bold: {{ isBold }}
          </button>
        </div>

        <h6 class="mt-4">3. Using [ngClass] for multiple classes:</h6>
        <div
          class="p-3 border"
          [ngClass]="{'bg-success': isSuccess, 'text-white': isSuccess, 'border-success': isSuccess}">
          Using ngClass directive
        </div>
        <button class="btn btn-outline-success mt-2" (click)="isSuccess = !isSuccess">
          Toggle Success: {{ isSuccess }}
        </button>

        <h6 class="mt-4">4. [ngClass] with array:</h6>
        <div class="p-3" [ngClass]="currentClasses">
          Classes applied: {{ currentClasses.join(', ') }}
        </div>

        <div class="alert alert-info mt-4">
          <strong>Syntax:</strong>
          <ul class="mb-0">
            <li><code>[class.className]="condition"</code> - Single class</li>
            <li><code>[ngClass]="&#123;'class1': cond1, 'class2': cond2&#125;"</code> - Object</li>
            <li><code>[ngClass]="['class1', 'class2']"</code> - Array</li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class ClassBindingComponent {
  isActive = true;
  isHighlighted = false;
  hasError = false;
  isBold = false;
  isSuccess = false;
  currentClasses = ['bg-light', 'border', 'rounded'];
}
