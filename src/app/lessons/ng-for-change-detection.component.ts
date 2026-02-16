import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Lesson 6: ngFor and Change Detection
// How Angular detects changes in arrays and re-renders the list

@Component({
  selector: 'app-ng-for-change-detection',
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #20c997; color: white;">
        <h5>Lesson 6: ngFor and Change Detection</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">How Angular detects changes in arrays used with *ngFor</p>

        <h6>1. Current list:</h6>
        <ul class="list-group mb-3">
          <li class="list-group-item" *ngFor="let course of courses">
            {{ course }}
          </li>
        </ul>

        <h6>2. Add/Remove items:</h6>
        <div class="btn-group mb-3">
          <button class="btn btn-success" (click)="addCourse()">Add Course</button>
          <button class="btn btn-danger" (click)="removeCourse()">Remove Last</button>
          <button class="btn btn-warning" (click)="changeCourse()">Change First</button>
        </div>

        <h6>3. Re-assign the entire array:</h6>
        <button class="btn btn-info mb-3" (click)="loadFromServer()">
          Load from Server (new array)
        </button>

        <div class="alert alert-warning">
          <strong>How Change Detection Works:</strong>
          <ul class="mb-0">
            <li><strong>push/splice:</strong> Angular detects the change because it checks the
              array reference. It re-renders the DOM for new items.</li>
            <li><strong>Re-assigning array:</strong> Angular sees a new reference, so it
              destroys and re-creates ALL DOM elements.</li>
            <li>This can be expensive for large lists!</li>
          </ul>
        </div>

        <div class="alert alert-info">
          <strong>Key Point:</strong> When you re-assign the array
          (e.g., from an HTTP response), Angular destroys all existing DOM elements and
          re-creates them. Use <code>trackBy</code> to optimize this (next lesson).
        </div>
      </div>
    </div>
  `
})
export class NgForChangeDetectionComponent {
  courses = ['Angular', 'React', 'Vue'];

  addCourse() {
    this.courses.push('Course ' + (this.courses.length + 1));
  }

  removeCourse() {
    this.courses.pop();
  }

  changeCourse() {
    this.courses[0] = 'Updated Angular';
  }

  loadFromServer() {
    // Simulates loading data from server — creates a brand new array
    this.courses = ['Angular', 'React', 'Vue'];
  }
}
