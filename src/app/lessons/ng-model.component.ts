import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Lesson 4: ngModel
// Two-way data binding in forms

@Component({
  selector: 'app-ng-model',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #fd7e14; color: white;">
        <h5>Lesson 4: ngModel</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Two-way data binding for form controls using ngModel</p>

        <h6>1. One-way binding (ngModel without []):</h6>
        <div class="mb-3">
          <input type="text" class="form-control" ngModel name="simple"
                 #simpleRef="ngModel"
                 placeholder="Type here (one-way)">
          <small class="text-muted">Value: {{ simpleRef.value }}</small>
        </div>

        <h6>2. Two-way binding [(ngModel)]:</h6>
        <div class="mb-3">
          <input type="text" class="form-control" [(ngModel)]="firstName"
                 placeholder="First name">
          <p class="mt-1">Hello, <strong>{{ firstName || '...' }}</strong>!</p>
        </div>

        <h6>3. Binding to different input types:</h6>
        <div class="mb-2">
          <label class="form-label">Email:</label>
          <input type="email" class="form-control" [(ngModel)]="email">
        </div>
        <div class="mb-2">
          <label class="form-label">Age:</label>
          <input type="number" class="form-control" [(ngModel)]="age" style="width: 120px;">
        </div>
        <div class="mb-3">
          <label class="form-label">Bio:</label>
          <textarea class="form-control" [(ngModel)]="bio" rows="2"></textarea>
        </div>

        <h6>4. Model values:</h6>
        <div class="alert alert-secondary">
          <pre class="mb-0">firstName: {{ firstName }}
email: {{ email }}
age: {{ age }}
bio: {{ bio }}</pre>
        </div>

        <div class="alert alert-info mt-3">
          <strong>ngModel flavors:</strong>
          <ul class="mb-0">
            <li><code>ngModel</code> — one-way (template to component on submit)</li>
            <li><code>[ngModel]="value"</code> — one-way binding (component to template)</li>
            <li><code>[(ngModel)]="value"</code> — two-way binding (banana in a box!)</li>
          </ul>
          <strong class="mt-2 d-block">Requires:</strong> Import <code>FormsModule</code>
        </div>
      </div>
    </div>
  `
})
export class NgModelComponent {
  firstName = '';
  email = '';
  age = 0;
  bio = '';
}
