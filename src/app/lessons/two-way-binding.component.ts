import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Lesson 10: Two-way Binding
// Sync data between component and template using [(ngModel)]

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #20c997; color: white;">
        <h5>Lesson 10: Two-way Binding</h5>
      </div>
      <div class="card-body">
        <h6>1. Basic two-way binding:</h6>
        <input type="text" class="form-control" [(ngModel)]="username" placeholder="Enter username">
        <p class="mt-2">Username: {{ username }}</p>
        <button class="btn btn-outline-primary" (click)="username = 'JohnDoe'">Set to JohnDoe</button>
        <button class="btn btn-outline-danger ms-2" (click)="username = ''">Clear</button>

        <h6 class="mt-4">2. Two-way binding with different input types:</h6>
        <div class="row">
          <div class="col-md-6">
            <label>Email:</label>
            <input type="email" class="form-control" [(ngModel)]="email">
            <small class="text-muted">{{ email }}</small>
          </div>
          <div class="col-md-6">
            <label>Age:</label>
            <input type="number" class="form-control" [(ngModel)]="age">
            <small class="text-muted">{{ age }}</small>
          </div>
        </div>

        <h6 class="mt-4">3. Checkbox two-way binding:</h6>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" [(ngModel)]="isSubscribed" id="subscribe">
          <label class="form-check-label" for="subscribe">Subscribe to newsletter</label>
        </div>
        <p>Subscribed: {{ isSubscribed }}</p>

        <h6 class="mt-4">4. Select two-way binding:</h6>
        <select class="form-select" [(ngModel)]="selectedCountry">
          <option value="">Select country</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="canada">Canada</option>
        </select>
        <p class="mt-2">Selected: {{ selectedCountry }}</p>

        <h6 class="mt-4">5. Radio buttons:</h6>
        <div class="form-check">
          <input type="radio" class="form-check-input" [(ngModel)]="gender" value="male" id="male">
          <label class="form-check-label" for="male">Male</label>
        </div>
        <div class="form-check">
          <input type="radio" class="form-check-input" [(ngModel)]="gender" value="female" id="female">
          <label class="form-check-label" for="female">Female</label>
        </div>
        <p>Gender: {{ gender }}</p>

        <h6 class="mt-4">6. Textarea:</h6>
        <textarea class="form-control" [(ngModel)]="bio" rows="3" placeholder="Enter bio"></textarea>
        <p class="mt-2">Bio length: {{ bio.length }} characters</p>

        <div class="alert alert-info mt-4">
          <strong>Syntax:</strong> <code>[(ngModel)]="property"</code><br>
          <strong>"Banana in a box"</strong> = [( )]<br>
          <strong>Requires:</strong> <code>FormsModule</code> import<br>
          <strong>Equivalent to:</strong>
          <code>[ngModel]="property" (ngModelChange)="property = $event"</code>
        </div>
      </div>
    </div>
  `
})
export class TwoWayBindingComponent {
  username = '';
  email = '';
  age = 25;
  isSubscribed = false;
  selectedCountry = '';
  gender = '';
  bio = '';
}
