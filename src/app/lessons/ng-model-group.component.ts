import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Lesson 10: ngModelGroup
// Grouping related form fields together

@Component({
  selector: 'app-ng-model-group',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #fd7e14; color: white;">
        <h5>Lesson 10: ngModelGroup</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Group related form controls to create nested objects in form value</p>

        <form #f="ngForm">
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input type="text" class="form-control" ngModel name="username" required>
          </div>

          <div ngModelGroup="address" #addressGroup="ngModelGroup" class="border p-3 rounded mb-3">
            <h6 class="text-muted">Address Group</h6>
            <div class="mb-2">
              <label class="form-label">Street</label>
              <input type="text" class="form-control" ngModel name="street" required>
            </div>
            <div class="row">
              <div class="col-md-6 mb-2">
                <label class="form-label">City</label>
                <input type="text" class="form-control" ngModel name="city" required>
              </div>
              <div class="col-md-6 mb-2">
                <label class="form-label">Zip Code</label>
                <input type="text" class="form-control" ngModel name="zipCode">
              </div>
            </div>
            <div *ngIf="addressGroup.invalid && addressGroup.touched" class="text-danger">
              Please fill in the required address fields.
            </div>
          </div>

          <button class="btn btn-primary" type="submit">Submit</button>
        </form>

        <h6 class="mt-4">Form value (notice nested structure):</h6>
        <pre class="bg-light p-2 border rounded">{{ f.value | json }}</pre>

        <div class="alert alert-info mt-3">
          <strong>Output structure:</strong>
          <pre class="mb-0">&#123;
  "username": "john",
  "address": &#123;
    "street": "123 Main St",
    "city": "NYC",
    "zipCode": "10001"
  &#125;
&#125;</pre>
          <strong class="mt-2 d-block">Syntax:</strong>
          <code>ngModelGroup="groupName"</code> wraps related fields into a nested object.
        </div>
      </div>
    </div>
  `
})
export class NgModelGroupComponent {}
