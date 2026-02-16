import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Lesson 7: ngFor and TrackBy
// Optimizing list rendering with trackBy

@Component({
  selector: 'app-ng-for-track-by',
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #20c997; color: white;">
        <h5>Lesson 7: ngFor and TrackBy</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Optimize ngFor re-rendering with trackBy function</p>

        <h6>1. Without TrackBy (re-creates all DOM elements):</h6>
        <button class="btn btn-primary mb-2" (click)="loadCourses()">Reload Courses</button>
        <ul class="list-group mb-3">
          <li class="list-group-item" *ngFor="let course of courses">
            {{ course.id }} — {{ course.name }}
          </li>
        </ul>

        <h6>2. With TrackBy (only updates changed elements):</h6>
        <button class="btn btn-success mb-2" (click)="loadCourses()">Reload Courses</button>
        <ul class="list-group mb-3">
          <li class="list-group-item" *ngFor="let course of courses; trackBy: trackCourse">
            {{ course.id }} — {{ course.name }}
          </li>
        </ul>

        <h6>3. The trackBy function:</h6>
        <div class="alert alert-secondary">
          <pre class="mb-0">trackCourse(index: number, course: any) &#123;
  return course.id;  // unique identifier
&#125;</pre>
        </div>

        <div class="alert alert-warning">
          <strong>Why use TrackBy?</strong>
          <ul class="mb-0">
            <li>Without <code>trackBy</code>: Angular compares by object reference. When the
              array is re-assigned (e.g., from HTTP), all DOM elements are destroyed & re-created.</li>
            <li>With <code>trackBy</code>: Angular uses the returned value (usually an id) to
              match existing DOM elements. Only changed elements are updated.</li>
          </ul>
        </div>

        <div class="alert alert-info">
          <strong>Syntax:</strong>
          <code>*ngFor="let item of items; trackBy: trackFn"</code><br><br>
          <strong>Best practice:</strong> Always use <code>trackBy</code> when iterating over
          data from a server to avoid unnecessary DOM manipulation.
        </div>
      </div>
    </div>
  `
})
export class NgForTrackByComponent {
  courses: any[] = [];

  constructor() {
    this.loadCourses();
  }

  loadCourses() {
    // Simulates an HTTP response — returns new objects with same data
    this.courses = [
      { id: 1, name: 'Angular' },
      { id: 2, name: 'React' },
      { id: 3, name: 'Vue' }
    ];
  }

  trackCourse(index: number, course: any) {
    return course.id;
  }
}
