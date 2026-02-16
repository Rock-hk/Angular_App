import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Lesson 2: ngIf
// Conditionally renders elements in the DOM

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #20c997; color: white;">
        <h5>Lesson 2: ngIf</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Conditionally add/remove elements from the DOM</p>

        <h6>1. Basic *ngIf:</h6>
        <button class="btn btn-primary mb-2" (click)="showCourses = !showCourses">
          {{ showCourses ? 'Hide' : 'Show' }} Courses
        </button>
        <div *ngIf="showCourses">
          <ul class="list-group">
            <li class="list-group-item">Angular</li>
            <li class="list-group-item">React</li>
            <li class="list-group-item">Vue</li>
          </ul>
        </div>

        <h6 class="mt-4">2. ngIf with else:</h6>
        <div *ngIf="courses.length > 0; else noCourses">
          <p>There are {{ courses.length }} courses available.</p>
        </div>
        <ng-template #noCourses>
          <p class="text-danger">No courses available.</p>
        </ng-template>
        <button class="btn btn-outline-secondary btn-sm" (click)="toggleCourses()">
          Toggle Courses Array
        </button>

        <h6 class="mt-4">3. ngIf with then/else:</h6>
        <div *ngIf="isLoggedIn; then loggedIn else loggedOut"></div>
        <ng-template #loggedIn>
          <p class="text-success">Welcome back, User!</p>
        </ng-template>
        <ng-template #loggedOut>
          <p class="text-warning">Please log in.</p>
        </ng-template>
        <button class="btn btn-outline-info btn-sm" (click)="isLoggedIn = !isLoggedIn">
          Toggle Login
        </button>

        <div class="alert alert-info mt-4">
          <strong>Syntax:</strong>
          <ul class="mb-0">
            <li><code>*ngIf="condition"</code></li>
            <li><code>*ngIf="condition; else elseBlock"</code></li>
            <li><code>*ngIf="condition; then thenBlock else elseBlock"</code></li>
          </ul>
          <strong class="mt-2 d-block">Note:</strong> Unlike <code>[hidden]</code>, <code>*ngIf</code>
          completely removes the element from the DOM when false.
        </div>
      </div>
    </div>
  `
})
export class NgIfComponent {
  showCourses = true;
  courses = ['Angular', 'React', 'Vue'];
  isLoggedIn = false;

  toggleCourses() {
    this.courses = this.courses.length > 0 ? [] : ['Angular', 'React', 'Vue'];
  }
}
