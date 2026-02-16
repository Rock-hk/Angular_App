import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Lesson 6: Specific Validation Errors
// Displaying different error messages for different validation rules

@Component({
  selector: 'app-specific-validation-errors',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #fd7e14; color: white;">
        <h5>Lesson 6: Specific Validation Errors</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Show different error messages for each validation rule</p>

        <form>
          <div class="mb-3">
            <label for="specName" class="form-label">Username</label>
            <input
              id="specName"
              type="text"
              class="form-control"
              required
              minlength="3"
              maxlength="20"
              pattern="[a-zA-Z0-9]+"
              ngModel
              name="username"
              #usernameRef="ngModel">
            <div *ngIf="usernameRef.touched && usernameRef.errors" class="mt-1">
              <div *ngIf="usernameRef.errors['required']" class="text-danger">
                Username is required.
              </div>
              <div *ngIf="usernameRef.errors['minlength']" class="text-danger">
                Username must be at least {{ usernameRef.errors['minlength'].requiredLength }} characters.
                You entered {{ usernameRef.errors['minlength'].actualLength }}.
              </div>
              <div *ngIf="usernameRef.errors['pattern']" class="text-danger">
                Username can only contain letters and numbers.
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="specEmail" class="form-label">Email</label>
            <input
              id="specEmail"
              type="email"
              class="form-control"
              required
              email
              ngModel
              name="email"
              #emailRef="ngModel">
            <div *ngIf="emailRef.touched && emailRef.errors" class="mt-1">
              <div *ngIf="emailRef.errors['required']" class="text-danger">
                Email is required.
              </div>
              <div *ngIf="emailRef.errors['email']" class="text-danger">
                Please enter a valid email address.
              </div>
            </div>
          </div>

          <button class="btn btn-primary" type="submit">Submit</button>
        </form>

        <h6 class="mt-4">The errors object:</h6>
        <div class="alert alert-secondary">
          <pre class="mb-0">// usernameRef.errors might look like:
&#123;
  "required": true,
  "minlength": &#123;
    "requiredLength": 3,
    "actualLength": 1
  &#125;,
  "pattern": &#123;
    "requiredPattern": "[a-zA-Z0-9]+",
    "actualValue": "ab!"
  &#125;
&#125;</pre>
        </div>

        <div class="alert alert-info mt-3">
          <strong>Access specific errors:</strong>
          <code>controlRef.errors['validatorName']</code><br>
          Returns <code>null</code> if the control is valid.
        </div>
      </div>
    </div>
  `
})
export class SpecificValidationErrorsComponent {}
