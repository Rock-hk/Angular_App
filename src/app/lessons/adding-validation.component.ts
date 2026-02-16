import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Lesson 5: Adding Validation
// Adding HTML5 and Angular validation to form fields

@Component({
  selector: 'app-adding-validation',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #fd7e14; color: white;">
        <h5>Lesson 5: Adding Validation</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Using validation directives with ngModel</p>

        <form>
          <div class="mb-3">
            <label for="valName" class="form-label">Full Name</label>
            <input
              id="valName"
              type="text"
              class="form-control"
              required
              minlength="3"
              maxlength="50"
              ngModel
              name="fullName"
              #nameRef="ngModel">
            <div class="mt-1">
              <small>Valid: {{ nameRef.valid }} | Touched: {{ nameRef.touched }}</small>
            </div>
            <div *ngIf="nameRef.touched && nameRef.invalid" class="text-danger">
              Name is required (min 3 characters).
            </div>
          </div>

          <div class="mb-3">
            <label for="valEmail" class="form-label">Email</label>
            <input
              id="valEmail"
              type="email"
              class="form-control"
              required
              ngModel
              name="email"
              #emailRef="ngModel">
            <div *ngIf="emailRef.touched && emailRef.invalid" class="text-danger">
              A valid email is required.
            </div>
          </div>

          <button class="btn btn-primary" type="submit">Submit</button>
        </form>

        <div class="alert alert-info mt-4">
          <strong>Validation attributes:</strong>
          <ul class="mb-0">
            <li><code>required</code> — field must not be empty</li>
            <li><code>minlength="n"</code> — minimum character count</li>
            <li><code>maxlength="n"</code> — maximum character count</li>
            <li><code>pattern="regex"</code> — must match regex</li>
            <li><code>email</code> — must be valid email format</li>
          </ul>
          <strong class="mt-2 d-block">Template ref:</strong>
          <code>#nameRef="ngModel"</code> gives access to the control's validation state.
        </div>
      </div>
    </div>
  `
})
export class AddingValidationComponent {}
