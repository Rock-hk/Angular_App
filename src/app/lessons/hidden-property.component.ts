  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';

  // Lesson 3: Hidden Property
  // Using [hidden] vs *ngIf to hide elements

  @Component({
    selector: 'app-hidden-property',
    imports: [CommonModule],
    template: `
      <div class="card">
        <div class="card-header" style="background-color: #20c997; color: white;">
          <h5>Lesson 3: Hidden Property</h5>
        </div>
        <div class="card-body">
          <p class="text-muted">Using the [hidden] property vs *ngIf</p>

          <h6>1. Using [hidden]:</h6>
          <button class="btn btn-primary mb-2" (click)="isHidden = !isHidden">
            Toggle Hidden
          </button>
          <p [hidden]="isHidden">
            This paragraph uses <code>[hidden]</code> — it stays in the DOM but is hidden via CSS.
          </p>

          <h6 class="mt-3">2. Using *ngIf:</h6>
          <button class="btn btn-primary mb-2" (click)="isRemoved = !isRemoved">
            Toggle ngIf
          </button>
          <p *ngIf="!isRemoved">
            This paragraph uses <code>*ngIf</code> — it is completely removed from the DOM.
          </p>

          <h6 class="mt-3">3. Inspect the DOM:</h6>
          <p class="text-muted">Right-click and inspect each paragraph to see the difference:</p>
          <ul>
            <li><code>[hidden]</code>: Element exists in DOM with <code>hidden</code> attribute</li>
            <li><code>*ngIf</code>: Element is completely removed from DOM</li>
          </ul>

          <div class="alert alert-warning mt-3">
            <strong>When to use which?</strong>
            <ul class="mb-0">
              <li><strong>[hidden]:</strong> When you need to toggle frequently (cheaper to show/hide)</li>
              <li><strong>*ngIf:</strong> When the element is large or has heavy initialization
                (saves resources when hidden)</li>
            </ul>
          </div>

          <div class="alert alert-info mt-3">
            <strong>Gotcha:</strong> <code>[hidden]</code> won't work if the element has
            <code>display: flex</code> or other CSS that overrides the hidden attribute.
            In that case, use <code>*ngIf</code> instead.
          </div>
        </div>
      </div>
    `
  })
  export class HiddenPropertyComponent {
    isHidden = false;
    isRemoved = false;
  }
