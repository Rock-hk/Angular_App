import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Lesson 4: ngSwitchCase
// Conditionally render one of multiple elements based on a value

@Component({
  selector: 'app-ng-switch-case',
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #20c997; color: white;">
        <h5>Lesson 4: ngSwitchCase</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Render different content based on a matching value</p>

        <h6>1. Basic ngSwitch:</h6>
        <div class="mb-3">
          <label class="form-label">Select view mode:</label>
          <select class="form-select" (change)="viewMode = $any($event.target).value">
            <option value="map">Map View</option>
            <option value="list">List View</option>
            <option value="table">Table View</option>
          </select>
        </div>

        <div [ngSwitch]="viewMode">
          <div *ngSwitchCase="'map'">
            <div class="alert alert-success">
              <i class="bi bi-map"></i> <strong>Map View</strong><br>
              Showing map with locations...
            </div>
          </div>
          <div *ngSwitchCase="'list'">
            <ul class="list-group">
              <li class="list-group-item">Item 1 - New York</li>
              <li class="list-group-item">Item 2 - London</li>
              <li class="list-group-item">Item 3 - Tokyo</li>
            </ul>
          </div>
          <div *ngSwitchCase="'table'">
            <table class="table table-bordered">
              <thead><tr><th>City</th><th>Country</th></tr></thead>
              <tbody>
                <tr><td>New York</td><td>USA</td></tr>
                <tr><td>London</td><td>UK</td></tr>
                <tr><td>Tokyo</td><td>Japan</td></tr>
              </tbody>
            </table>
          </div>
          <div *ngSwitchDefault>
            <p class="text-muted">Unknown view mode selected.</p>
          </div>
        </div>

        <h6 class="mt-4">2. With numeric values:</h6>
        <div class="btn-group mb-2">
          <button class="btn btn-outline-primary" (click)="rating = 1">1</button>
          <button class="btn btn-outline-primary" (click)="rating = 2">2</button>
          <button class="btn btn-outline-primary" (click)="rating = 3">3</button>
        </div>
        <div [ngSwitch]="rating">
          <p *ngSwitchCase="1" class="text-danger">Poor</p>
          <p *ngSwitchCase="2" class="text-warning">Average</p>
          <p *ngSwitchCase="3" class="text-success">Excellent!</p>
        </div>

        <div class="alert alert-info mt-4">
          <strong>Syntax:</strong>
          <pre class="mb-0">&lt;div [ngSwitch]="expression"&gt;
  &lt;div *ngSwitchCase="'value1'"&gt;...&lt;/div&gt;
  &lt;div *ngSwitchCase="'value2'"&gt;...&lt;/div&gt;
  &lt;div *ngSwitchDefault&gt;...&lt;/div&gt;
&lt;/div&gt;</pre>
        </div>
      </div>
    </div>
  `
})
export class NgSwitchCaseComponent {
  viewMode = 'map';
  rating = 1;
}
