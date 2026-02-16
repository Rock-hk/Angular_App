import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Lesson 13: Working with Check Boxes
// Binding checkboxes with ngModel

@Component({
  selector: 'app-working-with-checkboxes',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #fd7e14; color: white;">
        <h5>Lesson 13: Working with Check Boxes</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Binding checkboxes using ngModel for boolean values</p>

        <form #f="ngForm">
          <h6>1. Simple checkbox:</h6>
          <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="newsletter"
                   ngModel name="isSubscribed">
            <label class="form-check-label" for="newsletter">
              Subscribe to newsletter
            </label>
          </div>

          <h6>2. Two-way bound checkbox:</h6>
          <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="terms"
                   [(ngModel)]="acceptTerms" name="acceptTerms">
            <label class="form-check-label" for="terms">
              I accept the terms and conditions
            </label>
          </div>
          <p>Terms accepted: <strong>{{ acceptTerms }}</strong></p>

          <h6>3. Conditional content based on checkbox:</h6>
          <div class="form-check mb-2">
            <input type="checkbox" class="form-check-input" id="shipping"
                   [(ngModel)]="showShipping" name="showShipping">
            <label class="form-check-label" for="shipping">
              Ship to a different address?
            </label>
          </div>
          <div *ngIf="showShipping" class="border p-3 rounded mb-3">
            <div class="mb-2">
              <label class="form-label">Shipping Address</label>
              <input type="text" class="form-control" ngModel name="shippingAddress"
                     placeholder="Enter shipping address">
            </div>
          </div>
        </form>

        <h6>Form value:</h6>
        <pre class="bg-light p-2 border rounded">{{ f.value | json }}</pre>

        <div class="alert alert-info mt-3">
          <strong>Key point:</strong> Checkboxes bind to <code>boolean</code> values.
          Use <code>[(ngModel)]</code> for two-way binding or <code>ngModel</code>
          to track in the form value.
        </div>
      </div>
    </div>
  `
})
export class WorkingWithCheckboxesComponent {
  acceptTerms = false;
  showShipping = false;
}
