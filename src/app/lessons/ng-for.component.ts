import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Lesson 5: ngFor
// Iterating over a list to render elements

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #20c997; color: white;">
        <h5>Lesson 5: ngFor</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Iterate over a collection and render elements for each item</p>

        <h6>1. Basic *ngFor:</h6>
        <ul class="list-group mb-3">
          <li class="list-group-item" *ngFor="let course of courses">
            {{ course }}
          </li>
        </ul>

        <h6>2. Using index:</h6>
        <ul class="list-group mb-3">
          <li class="list-group-item" *ngFor="let course of courses; let i = index">
            {{ i + 1 }}. {{ course }}
          </li>
        </ul>

        <h6>3. Using even/odd:</h6>
        <ul class="list-group mb-3">
          <li class="list-group-item"
              *ngFor="let course of courses; let isEven = even; let isOdd = odd"
              [class.list-group-item-info]="isEven"
              [class.list-group-item-warning]="isOdd">
            {{ course }} — {{ isEven ? 'Even' : 'Odd' }}
          </li>
        </ul>

        <h6>4. Using first/last:</h6>
        <ul class="list-group mb-3">
          <li class="list-group-item"
              *ngFor="let course of courses; let isFirst = first; let isLast = last"
              [class.list-group-item-success]="isFirst"
              [class.list-group-item-danger]="isLast">
            {{ course }}
            <span *ngIf="isFirst" class="badge bg-success ms-2">First</span>
            <span *ngIf="isLast" class="badge bg-danger ms-2">Last</span>
          </li>
        </ul>

        <h6>5. Iterating over objects:</h6>
        <table class="table table-bordered">
          <thead><tr><th>#</th><th>Name</th><th>Price</th></tr></thead>
          <tbody>
            <tr *ngFor="let product of products; let i = index">
              <td>{{ i + 1 }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.price | currency }}</td>
            </tr>
          </tbody>
        </table>

        <div class="alert alert-info mt-4">
          <strong>Exported values:</strong>
          <ul class="mb-0">
            <li><code>index</code> — position (0-based)</li>
            <li><code>first</code> / <code>last</code> — boolean</li>
            <li><code>even</code> / <code>odd</code> — boolean</li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class NgForComponent {
  courses = ['Angular', 'React', 'Vue', 'Svelte'];
  products = [
    { name: 'Laptop', price: 999 },
    { name: 'Phone', price: 699 },
    { name: 'Tablet', price: 499 },
    { name: 'Watch', price: 299 }
  ];
}
