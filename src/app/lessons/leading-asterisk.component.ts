import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Lesson 8: The Leading Asterisk
// Understanding the * prefix in structural directives

@Component({
  selector: 'app-leading-asterisk',
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #20c997; color: white;">
        <h5>Lesson 8: The Leading Asterisk (*)</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">What the * prefix means in structural directives</p>

        <h6>1. The shorthand syntax (with *):</h6>
        <div class="alert alert-secondary">
          <pre class="mb-0">&lt;div *ngIf="showMessage"&gt;
  Hello World!
&lt;/div&gt;</pre>
        </div>

        <h6>2. What Angular converts it to (expanded form):</h6>
        <div class="alert alert-secondary">
          <pre class="mb-0">&lt;ng-template [ngIf]="showMessage"&gt;
  &lt;div&gt;
    Hello World!
  &lt;/div&gt;
&lt;/ng-template&gt;</pre>
        </div>

        <h6 class="mt-3">3. Live example — both produce the same result:</h6>
        <button class="btn btn-primary mb-2" (click)="showMessage = !showMessage">
          Toggle ({{ showMessage }})
        </button>
        <p *ngIf="showMessage" class="text-success">Using *ngIf shorthand</p>
        <ng-template [ngIf]="showMessage">
          <p class="text-info">Using ng-template (expanded form)</p>
        </ng-template>

        <h6 class="mt-3">4. Same applies to *ngFor:</h6>
        <div class="alert alert-secondary">
          <strong>Shorthand:</strong>
          <pre class="mb-1">&lt;div *ngFor="let item of items"&gt;...&lt;/div&gt;</pre>
          <strong>Expanded:</strong>
          <pre class="mb-0">&lt;ng-template ngFor let-item [ngForOf]="items"&gt;
  &lt;div&gt;...&lt;/div&gt;
&lt;/ng-template&gt;</pre>
        </div>

        <div class="alert alert-info mt-4">
          <strong>Key Takeaway:</strong> The <code>*</code> is syntactic sugar.
          Angular rewrites <code>*ngIf</code> and <code>*ngFor</code> into
          <code>&lt;ng-template&gt;</code> behind the scenes. You rarely need to write
          the expanded form, but understanding it helps when debugging.
        </div>
      </div>
    </div>
  `
})
export class LeadingAsteriskComponent {
  showMessage = true;
}
