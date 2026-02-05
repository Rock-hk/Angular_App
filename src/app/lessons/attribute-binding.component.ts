import { Component } from '@angular/core';

// Lesson 3: Attribute Binding
// Use [attr.attributeName] for HTML attributes that don't have corresponding DOM properties

@Component({
  selector: 'app-attribute-binding',
  template: `
    <div class="card">
      <div class="card-header bg-success text-white">
        <h5>Lesson 3: Attribute Binding</h5>
      </div>
      <div class="card-body">
        <h6>1. Colspan attribute binding:</h6>
        <table class="table table-bordered">
          <tr>
            <td [attr.colspan]="colSpan" class="bg-info text-white text-center">
              This cell spans {{ colSpan }} columns
            </td>
          </tr>
          <tr>
            <td>Column 1</td>
            <td>Column 2</td>
            <td>Column 3</td>
          </tr>
        </table>
        <button class="btn btn-outline-primary" (click)="colSpan = colSpan === 3 ? 1 : 3">
          Toggle Colspan
        </button>

        <h6 class="mt-4">2. Aria attributes for accessibility:</h6>
        <button class="btn btn-warning" [attr.aria-label]="ariaLabel">
          Accessible Button
        </button>
        <p class="mt-2">aria-label: "{{ ariaLabel }}"</p>

        <h6 class="mt-4">3. Data attributes:</h6>
        <div class="p-3 bg-light" [attr.data-id]="productId" [attr.data-category]="category">
          Product ID: {{ productId }}, Category: {{ category }}
        </div>

        <div class="alert alert-info mt-4">
          <strong>When to use Attribute Binding:</strong>
          <ul class="mb-0">
            <li>When there's no DOM property (colspan, aria-*, data-*)</li>
            <li>Syntax: <code>[attr.attributeName]="expression"</code></li>
          </ul>
          <strong>Property vs Attribute:</strong>
          <ul class="mb-0">
            <li><code>[disabled]</code> - Property binding (preferred)</li>
            <li><code>[attr.disabled]</code> - Attribute binding</li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class AttributeBindingComponent {
  colSpan = 2;
  ariaLabel = 'Click to submit form';
  productId = 'PRD-001';
  category = 'Electronics';
}
