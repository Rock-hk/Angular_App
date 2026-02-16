import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Lesson 14: Working with Drop-down Lists
// Binding select/dropdown controls with ngModel

@Component({
  selector: 'app-working-with-dropdowns',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #fd7e14; color: white;">
        <h5>Lesson 14: Working with Drop-down Lists</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Binding select elements and rendering options dynamically</p>

        <form #f="ngForm">
          <h6>1. Static options:</h6>
          <div class="mb-3">
            <label class="form-label">Color</label>
            <select class="form-select" ngModel name="color">
              <option value="">-- Select a color --</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </select>
          </div>

          <h6>2. Dynamic options with *ngFor:</h6>
          <div class="mb-3">
            <label class="form-label">Contact Method</label>
            <select class="form-select" [(ngModel)]="selectedContact" name="contactMethod">
              <option value="">-- Select method --</option>
              <option *ngFor="let m of contactMethods" [value]="m.id">
                {{ m.name }}
              </option>
            </select>
            <p class="mt-1">Selected: <strong>{{ selectedContact || 'none' }}</strong></p>
          </div>

          <h6>3. Binding to object with [ngValue]:</h6>
          <div class="mb-3">
            <label class="form-label">Course</label>
            <select class="form-select" [(ngModel)]="selectedCourse" name="course">
              <option [ngValue]="null">-- Select a course --</option>
              <option *ngFor="let c of courses" [ngValue]="c">
                {{ c.name }}
              </option>
            </select>
          </div>
          <div *ngIf="selectedCourse" class="alert alert-success">
            Selected: {{ selectedCourse.name }} ({{ selectedCourse.price | currency }})
          </div>

          <h6>4. Multiple select:</h6>
          <div class="mb-3">
            <label class="form-label">Skills (hold Ctrl to multi-select)</label>
            <select class="form-select" multiple [(ngModel)]="selectedSkills" name="skills"
                    style="height: 120px;">
              <option *ngFor="let skill of skills" [value]="skill">{{ skill }}</option>
            </select>
            <p class="mt-1">Selected: {{ selectedSkills }}</p>
          </div>
        </form>

        <h6>Form value:</h6>
        <pre class="bg-light p-2 border rounded">{{ f.value | json }}</pre>

        <div class="alert alert-info mt-3">
          <strong>Key differences:</strong>
          <ul class="mb-0">
            <li><code>[value]="id"</code> — binds a string/number value</li>
            <li><code>[ngValue]="object"</code> — binds an entire object</li>
            <li>Use <code>multiple</code> attribute for multi-select</li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class WorkingWithDropdownsComponent {
  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'SMS' }
  ];
  selectedContact = '';

  courses = [
    { id: 1, name: 'Angular', price: 29.99 },
    { id: 2, name: 'React', price: 24.99 },
    { id: 3, name: 'Vue', price: 19.99 }
  ];
  selectedCourse: any = null;

  skills = ['JavaScript', 'TypeScript', 'Angular', 'React', 'Node.js'];
  selectedSkills: string[] = [];
}
