import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Lesson 9: ngClass
// Dynamically add/remove multiple CSS classes

@Component({
  selector: 'app-ng-class',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #20c997; color: white;">
        <h5>Lesson 9: ngClass</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Dynamically apply multiple CSS classes based on conditions</p>

        <h6>1. Using [class.name] (single class):</h6>
        <button
          class="btn mb-3"
          [class.btn-primary]="isActive"
          [class.btn-secondary]="!isActive"
          (click)="isActive = !isActive">
          {{ isActive ? 'Active' : 'Inactive' }}
        </button>

        <h6>2. Using [ngClass] with an object:</h6>
        <div class="mb-3">
          <span
            class="badge fs-6"
            [ngClass]="{
              'bg-success': status === 'active',
              'bg-warning': status === 'pending',
              'bg-danger': status === 'inactive'
            }">
            {{ status }}
          </span>
          <div class="btn-group ms-3">
            <button class="btn btn-sm btn-outline-success" (click)="status = 'active'">Active</button>
            <button class="btn btn-sm btn-outline-warning" (click)="status = 'pending'">Pending</button>
            <button class="btn btn-sm btn-outline-danger" (click)="status = 'inactive'">Inactive</button>
          </div>
        </div>

        <h6>3. Using [ngClass] with an array:</h6>
        <p [ngClass]="['text-primary', 'fw-bold', 'fs-5']">
          This has multiple classes applied via array.
        </p>

        <h6>4. Combining conditions:</h6>
        <div class="mb-3">
          <label><input type="checkbox" [(ngModel)]="isBold"> Bold</label>
          <label class="ms-3"><input type="checkbox" [(ngModel)]="isItalic"> Italic</label>
        </div>
        <p [ngClass]="{ 'fw-bold': isBold, 'fst-italic': isItalic }">
          Style me with checkboxes!
        </p>

        <div class="alert alert-info mt-4">
          <strong>ngClass accepts:</strong>
          <ul class="mb-0">
            <li><strong>Object:</strong> <code>[ngClass]="&#123; 'class': condition &#125;"</code></li>
            <li><strong>Array:</strong> <code>[ngClass]="['class1', 'class2']"</code></li>
            <li><strong>String:</strong> <code>[ngClass]="'class1 class2'"</code></li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class NgClassComponent {
  isActive = true;
  status = 'active';
  isBold = false;
  isItalic = false;
}
