import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Lesson 15: Working with Radio Buttons
// Binding radio buttons with ngModel

@Component({
  selector: 'app-working-with-radio-buttons',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #fd7e14; color: white;">
        <h5>Lesson 15: Working with Radio Buttons</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Binding radio button groups with ngModel</p>

        <form #f="ngForm">
          <h6>1. Static radio buttons:</h6>
          <div class="mb-3">
            <div class="form-check">
              <input type="radio" class="form-check-input" id="male"
                     name="gender" value="male" ngModel>
              <label class="form-check-label" for="male">Male</label>
            </div>
            <div class="form-check">
              <input type="radio" class="form-check-input" id="female"
                     name="gender" value="female" ngModel>
              <label class="form-check-label" for="female">Female</label>
            </div>
            <div class="form-check">
              <input type="radio" class="form-check-input" id="other"
                     name="gender" value="other" ngModel>
              <label class="form-check-label" for="other">Other</label>
            </div>
          </div>

          <h6>2. Dynamic radio buttons with *ngFor:</h6>
          <div class="mb-3">
            <label class="form-label">Preferred contact method:</label>
            <div *ngFor="let method of contactMethods" class="form-check">
              <input type="radio" class="form-check-input"
                     [id]="'contact-' + method.id"
                     name="contactMethod"
                     [value]="method.id"
                     [(ngModel)]="selectedMethod">
              <label class="form-check-label" [for]="'contact-' + method.id">
                {{ method.name }}
              </label>
            </div>
            <p class="mt-1">Selected method: <strong>{{ selectedMethod || 'none' }}</strong></p>
          </div>

          <h6>3. Radio buttons with conditional content:</h6>
          <div class="mb-3">
            <label class="form-label">Membership type:</label>
            <div *ngFor="let plan of plans" class="form-check">
              <input type="radio" class="form-check-input"
                     [id]="'plan-' + plan.id"
                     name="membership"
                     [value]="plan.id"
                     [(ngModel)]="selectedPlan">
              <label class="form-check-label" [for]="'plan-' + plan.id">
                {{ plan.name }} — {{ plan.price | currency }}/mo
              </label>
            </div>
          </div>
          <div *ngIf="getSelectedPlan() as plan" class="alert alert-success">
            You selected: <strong>{{ plan.name }}</strong> at {{ plan.price | currency }}/month.
            {{ plan.description }}
          </div>
        </form>

        <h6 class="mt-3">Form value:</h6>
        <pre class="bg-light p-2 border rounded">{{ f.value | json }}</pre>

        <div class="alert alert-info mt-3">
          <strong>Key points:</strong>
          <ul class="mb-0">
            <li>All radios in a group share the same <code>name</code></li>
            <li>Use <code>[value]</code> to set each option's value</li>
            <li>Use <code>[(ngModel)]</code> for two-way binding</li>
            <li>The bound property holds the value of the selected radio</li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class WorkingWithRadioButtonsComponent {
  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Text' }
  ];
  selectedMethod = '';

  plans = [
    { id: 'basic', name: 'Basic', price: 9.99, description: 'Access to basic features.' },
    { id: 'pro', name: 'Pro', price: 19.99, description: 'Includes advanced analytics.' },
    { id: 'enterprise', name: 'Enterprise', price: 49.99, description: 'Full access + dedicated support.' }
  ];
  selectedPlan = '';

  getSelectedPlan() {
    return this.plans.find(p => p.id === this.selectedPlan) || null;
  }
}
