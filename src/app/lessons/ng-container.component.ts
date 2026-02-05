import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Lesson 12: ngContainer
@Component({
  selector: 'app-ng-container',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #20c997; color: white;">
        <h5>Lesson 12: ng-container</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">A grouping element that doesn't render in the DOM</p>

        <h6>1. Problem: Multiple structural directives</h6>
        <p class="small text-danger">This won't work: *ngIf and *ngFor on same element</p>
        <div class="border p-2 bg-light mb-3">
          <code>&lt;div *ngIf="show" *ngFor="let item of items"&gt;</code> - Error!
        </div>

        <h6>2. Solution: Use ng-container</h6>
        <div class="border p-3 mb-3">
          <ng-container *ngIf="showItems">
            <p *ngFor="let item of items" class="mb-1">{{ item }}</p>
          </ng-container>
        </div>
        <button class="btn btn-outline-primary btn-sm" (click)="showItems = !showItems">
          Toggle Items ({{ showItems }})
        </button>

        <h6 class="mt-4">3. ng-container doesn't create DOM element:</h6>
        <div class="row">
          <div class="col-md-6">
            <p class="small"><strong>With ng-container:</strong></p>
            <ul>
              <ng-container *ngFor="let fruit of fruits">
                <li>{{ fruit }}</li>
              </ng-container>
            </ul>
            <p class="small text-muted">Clean HTML structure</p>
          </div>
        </div>

        <h6 class="mt-4">4. Conditional rendering:</h6>
        <p>
          Hello,
          <ng-container *ngIf="isLoggedIn; else guest">
            <strong>{{ username }}</strong>
          </ng-container>
          <ng-template #guest>
            <em>Guest</em>
          </ng-template>
          !
        </p>
        <button class="btn btn-outline-secondary btn-sm" (click)="isLoggedIn = !isLoggedIn">
          Toggle Login ({{ isLoggedIn }})
        </button>

        <h6 class="mt-4">5. With ngSwitch:</h6>
        <select class="form-select form-select-sm w-auto mb-2" [(ngModel)]="selectedTab">
          <option value="home">Home</option>
          <option value="profile">Profile</option>
          <option value="settings">Settings</option>
        </select>
        <ng-container [ngSwitch]="selectedTab">
          <p *ngSwitchCase="'home'">Welcome to Home</p>
          <p *ngSwitchCase="'profile'">Your Profile</p>
          <p *ngSwitchCase="'settings'">Settings Page</p>
        </ng-container>

        <div class="alert alert-info mt-4">
          <strong>ng-container:</strong>
          <ul class="mb-0">
            <li>Logical grouping element</li>
            <li>Doesn't render any DOM element</li>
            <li>Perfect for multiple structural directives</li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class NgContainerComponent {
  showItems = true;
  items = ['Item 1', 'Item 2', 'Item 3'];
  fruits = ['Apple', 'Banana', 'Cherry'];
  isLoggedIn = true;
  username = 'John';
  selectedTab = 'home';
}
