import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Lesson 7: Styling Invalid Input Fields
// Using Angular CSS classes to style validation states

@Component({
  selector: 'app-styling-invalid-inputs',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #fd7e14; color: white;">
        <h5>Lesson 7: Styling Invalid Input Fields</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Angular automatically adds CSS classes to form controls based on their state</p>

        <h6>1. Try interacting with this field:</h6>
        <form>
          <div class="mb-3">
            <label for="styleInput" class="form-label">Name (required)</label>
            <input
              id="styleInput"
              type="text"
              class="form-control"
              required
              ngModel
              name="name"
              #nameRef="ngModel">
          </div>
        </form>

        <h6>2. Current CSS classes on the input:</h6>
        <ul class="list-group mb-3">
          <li class="list-group-item" [class.list-group-item-success]="nameRef.pristine">
            <code>ng-pristine</code> / <code>ng-dirty</code>:
            <strong>{{ nameRef.pristine ? 'pristine' : 'dirty' }}</strong>
          </li>
          <li class="list-group-item" [class.list-group-item-success]="nameRef.untouched">
            <code>ng-untouched</code> / <code>ng-touched</code>:
            <strong>{{ nameRef.touched ? 'touched' : 'untouched' }}</strong>
          </li>
          <li class="list-group-item" [class.list-group-item-danger]="nameRef.invalid">
            <code>ng-valid</code> / <code>ng-invalid</code>:
            <strong>{{ nameRef.valid ? 'valid' : 'invalid' }}</strong>
          </li>
        </ul>

        <h6>3. Custom CSS to style invalid fields:</h6>
        <div class="alert alert-secondary">
          <pre class="mb-0">/* Add to styles.css or component styles */
.form-control.ng-touched.ng-invalid &#123;
  border-color: red;
&#125;

.form-control.ng-touched.ng-valid &#123;
  border-color: green;
&#125;</pre>
        </div>

        <div class="alert alert-info mt-3">
          <strong>Angular auto-adds these classes:</strong>
          <table class="table table-sm mb-0 mt-2">
            <thead><tr><th>State</th><th>True</th><th>False</th></tr></thead>
            <tbody>
              <tr><td>Visited</td><td><code>ng-touched</code></td><td><code>ng-untouched</code></td></tr>
              <tr><td>Changed</td><td><code>ng-dirty</code></td><td><code>ng-pristine</code></td></tr>
              <tr><td>Valid</td><td><code>ng-valid</code></td><td><code>ng-invalid</code></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host ::ng-deep .form-control.ng-touched.ng-invalid {
      border-color: #dc3545;
      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.15);
    }
    :host ::ng-deep .form-control.ng-touched.ng-valid {
      border-color: #28a745;
      box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.15);
    }
  `]
})
export class StylingInvalidInputsComponent {}
