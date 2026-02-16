import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Lesson 9: ngForm
// Accessing the form object and handling form submission

@Component({
  selector: 'app-ng-form',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #fd7e14; color: white;">
        <h5>Lesson 9: ngForm</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Angular automatically creates an ngForm directive for every &lt;form&gt; tag</p>

        <form #f="ngForm" (ngSubmit)="onSubmit(f)">
          <div class="mb-3">
            <label for="formName" class="form-label">Full Name</label>
            <input id="formName" type="text" class="form-control"
                   required minlength="3"
                   ngModel name="fullName">
          </div>
          <div class="mb-3">
            <label for="formEmail" class="form-label">Email</label>
            <input id="formEmail" type="email" class="form-control"
                   required email
                   ngModel name="email">
          </div>
          <div class="mb-3">
            <label for="formPhone" class="form-label">Phone</label>
            <input id="formPhone" type="text" class="form-control"
                   ngModel name="phone">
          </div>
          <button class="btn btn-primary" type="submit">Submit</button>
        </form>

        <h6 class="mt-4">Form state:</h6>
        <ul class="list-group mb-3">
          <li class="list-group-item">Valid: <strong>{{ f.valid }}</strong></li>
          <li class="list-group-item">Touched: <strong>{{ f.touched }}</strong></li>
          <li class="list-group-item">Submitted: <strong>{{ f.submitted }}</strong></li>
        </ul>

        <h6>Form value (JSON):</h6>
        <pre class="bg-light p-2 border rounded">{{ f.value | json }}</pre>

        <div *ngIf="submitted" class="alert alert-success">
          <strong>Form submitted!</strong>
          <pre class="mb-0">{{ submittedData | json }}</pre>
        </div>

        <div class="alert alert-info mt-3">
          <strong>Key concepts:</strong>
          <ul class="mb-0">
            <li><code>#f="ngForm"</code> — template reference to the form</li>
            <li><code>(ngSubmit)="onSubmit(f)"</code> — handles form submission</li>
            <li><code>f.value</code> — object with all form field values</li>
            <li><code>f.valid</code> — true if all fields are valid</li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class NgFormComponent {
  submitted = false;
  submittedData: any = null;

  onSubmit(form: any) {
    this.submitted = true;
    this.submittedData = form.value;
  }
}
