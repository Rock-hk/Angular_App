import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Lesson 11: Safe Traversal Operator
// Using the ?. operator to safely access nested properties

@Component({
  selector: 'app-safe-traversal',
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #20c997; color: white;">
        <h5>Lesson 11: Safe Traversal Operator (?.) </h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Safely navigate nested object properties that might be null/undefined</p>

        <h6>1. The problem — accessing nested properties:</h6>
        <div class="alert alert-secondary">
          <pre class="mb-0">// This throws an error if task.assignee is null:
&#123;&#123; task.assignee.name &#125;&#125;

// Safe traversal prevents the error:
&#123;&#123; task.assignee?.name &#125;&#125;</pre>
        </div>

        <h6>2. Without safe traversal (using *ngIf):</h6>
        <p *ngIf="task.assignee">
          Assignee: {{ task.assignee.name }}
        </p>
        <p *ngIf="!task.assignee" class="text-muted">
          No assignee
        </p>

        <h6 class="mt-3">3. With safe traversal operator (?.):</h6>
        <p>Assignee: {{ task.assignee?.name || 'Not assigned' }}</p>

        <h6 class="mt-3">4. Deeply nested properties:</h6>
        <p>Customer City: {{ order?.customer?.address?.city || 'N/A' }}</p>
        <p>Customer Zip: {{ order?.customer?.address?.zipCode || 'N/A' }}</p>

        <h6 class="mt-3">5. Toggle assignee:</h6>
        <button class="btn btn-primary mb-3" (click)="toggleAssignee()">
          {{ task.assignee ? 'Remove' : 'Add' }} Assignee
        </button>
        <p>Current: {{ task.assignee?.name || 'None' }}</p>

        <div class="alert alert-info mt-4">
          <strong>Syntax:</strong> <code>object?.property?.nestedProperty</code><br><br>
          <strong>When to use:</strong>
          <ul class="mb-0">
            <li>When a property might be null or undefined</li>
            <li>When dealing with data from APIs that may have optional fields</li>
            <li>As a cleaner alternative to multiple <code>*ngIf</code> checks</li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class SafeTraversalComponent {
  task: any = {
    title: 'Build website',
    assignee: {
      name: 'John Doe'
    }
  };

  order: any = {
    id: 1,
    customer: {
      name: 'Jane',
      address: {
        city: 'New York',
        zipCode: '10001'
      }
    }
  };

  toggleAssignee() {
    if (this.task.assignee) {
      this.task.assignee = null;
    } else {
      this.task.assignee = { name: 'John Doe' };
    }
  }
}
