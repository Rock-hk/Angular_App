import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Lesson 8: Cleaner Templates
// Simplifying validation markup in templates

@Component({
  selector: 'app-cleaner-templates',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #fd7e14; color: white;">
        <h5>Lesson 8: Cleaner Templates</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Reduce template verbosity by moving validation logic to the component</p>

        <h6>1. Verbose approach (checking errors in template):</h6>
        <div class="alert alert-secondary">
          <pre class="mb-0">&lt;div *ngIf="name.touched && name.errors"&gt;
  &lt;div *ngIf="name.errors['required']"&gt;...&lt;/div&gt;
  &lt;div *ngIf="name.errors['minlength']"&gt;...&lt;/div&gt;
&lt;/div&gt;</pre>
        </div>

        <h6 class="mt-3">2. Cleaner approach — use a getter in the component:</h6>
        <form>
          <div class="mb-3">
            <label for="cleanName" class="form-label">Username</label>
            <input
              id="cleanName"
              type="text"
              class="form-control"
              required
              minlength="3"
              [(ngModel)]="username"
              name="username"
              #usernameRef="ngModel">
            <div *ngIf="usernameRef.touched && usernameRef.errors" class="text-danger mt-1">
              {{ getValidationMessage(usernameRef) }}
            </div>
          </div>
        </form>

        <h6>3. Component class code:</h6>
        <div class="alert alert-secondary">
          <pre class="mb-0">getValidationMessage(control: any): string &#123;
  if (control.errors['required'])
    return 'This field is required.';
  if (control.errors['minlength'])
    return 'Minimum length is '
      + control.errors['minlength'].requiredLength;
  return '';
&#125;</pre>
        </div>

        <div class="alert alert-info mt-4">
          <strong>Tips for cleaner templates:</strong>
          <ul class="mb-0">
            <li>Move complex validation logic to component methods</li>
            <li>Use a shared validation message helper</li>
            <li>Keep templates focused on structure, not logic</li>
            <li>Consider creating a reusable validation message component</li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class CleanerTemplatesComponent {
  username = '';

  getValidationMessage(control: any): string {
    if (control.errors['required'])
      return 'This field is required.';
    if (control.errors['minlength'])
      return `Minimum length is ${control.errors['minlength'].requiredLength}. You entered ${control.errors['minlength'].actualLength}.`;
    return '';
  }
}
