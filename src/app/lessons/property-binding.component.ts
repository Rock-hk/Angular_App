import { Component } from '@angular/core';

// Lesson 2: Property Binding
// Binds component properties to DOM element properties using [property]="value"

@Component({
  selector: 'app-property-binding',
  template: `
    <div class="card">
      <div class="card-header bg-primary text-white">
        <h5>Lesson 2: Property Binding</h5>
      </div>
      <div class="card-body">
        <h6>1. Binding to src property:</h6>
        <img [src]="imageUrl" alt="Sample image" width="200">

        <h6 class="mt-3">2. Binding to disabled property:</h6>
        <button class="btn btn-primary" [disabled]="isDisabled">
          Submit
        </button>
        <p class="mt-2">Button is: {{ isDisabled ? 'Disabled' : 'Enabled' }}</p>
        <button class="btn btn-outline-secondary" (click)="isDisabled = !isDisabled">
          Toggle Disabled
        </button>

        <h6 class="mt-3">3. Binding to value property:</h6>
        <input type="text" class="form-control" [value]="defaultText">

        <h6 class="mt-3">4. Binding to hidden property:</h6>
        <p [hidden]="isHidden">This paragraph can be hidden!</p>
        <button class="btn btn-outline-info" (click)="isHidden = !isHidden">
          Toggle Hidden
        </button>

        <div class="alert alert-info mt-4">
          <strong>Syntax:</strong> <code>[property]="expression"</code><br>
          <strong>Examples:</strong>
          <ul class="mb-0">
            <li><code>[src]="imageUrl"</code></li>
            <li><code>[disabled]="isDisabled"</code></li>
            <li><code>[value]="defaultText"</code></li>
            <li><code>[hidden]="isHidden"</code></li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class PropertyBindingComponent {
  imageUrl = 'https://picsum.photos/200/150';
  isDisabled = true;
  defaultText = 'Default Value';
  isHidden = false;
}
