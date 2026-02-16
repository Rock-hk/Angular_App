import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Lesson 12: Disabling the Submit Button
// Disable submit until the form is valid

@Component({
  selector: 'app-disabling-submit',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #fd7e14; color: white;">
        <h5>Lesson 12: Disabling the Submit Button</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Disable the submit button when the form is invalid</p>

        <form #f="ngForm" (ngSubmit)="onSubmit(f)">
          <div class="mb-3">
            <label for="disName" class="form-label">Name</label>
            <input id="disName" type="text" class="form-control"
                   required minlength="3"
                   ngModel name="name">
          </div>
          <div class="mb-3">
            <label for="disEmail" class="form-label">Email</label>
            <input id="disEmail" type="email" class="form-control"
                   required email
                   ngModel name="email">
          </div>

          <button class="btn btn-primary" type="submit"
                  [disabled]="!f.valid">
            Submit
          </button>
          <span class="ms-2 text-muted" *ngIf="!f.valid">
            (Fill all fields to enable)
          </span>
        </form>

        <div *ngIf="submitted" class="alert alert-success mt-3">
          Form submitted successfully!
        </div>

        <h6 class="mt-4">How it works:</h6>
        <div class="alert alert-secondary">
          <pre class="mb-0">&lt;button
  type="submit"
  [disabled]="!f.valid"&gt;
  Submit
&lt;/button&gt;</pre>
        </div>

        <div class="alert alert-info mt-3">
          <strong>Key:</strong> Bind the button's <code>[disabled]</code> property to
          <code>!formRef.valid</code>. The button stays disabled until all
          validation rules pass.
        </div>
      </div>
    </div>
  `
})
export class DisablingSubmitComponent {
  submitted = false;

  onSubmit(form: any) {
    this.submitted = true;
  }
}
