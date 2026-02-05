import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Child Component with Input Properties
@Component({
  selector: 'app-product-card',
  template: `
    <div class="card mb-2">
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">Price: {{ price | currency }}</p>
        <span class="badge" [class.bg-success]="inStock" [class.bg-danger]="!inStock">
          {{ inStock ? 'In Stock' : 'Out of Stock' }}
        </span>
      </div>
    </div>
  `,
  imports: [CommonModule]
})
export class ProductCardComponent {
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() inStock: boolean = true;
}

// Lesson 3: Input Properties
@Component({
  selector: 'app-input-properties',
  imports: [CommonModule, FormsModule, ProductCardComponent],
  template: `
    <div class="card">
      <div class="card-header bg-primary text-white">
        <h5>Lesson 3: Input Properties</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Pass data from parent to child using &#64;Input()</p>

        <h6>1. Basic Input Properties:</h6>
        <app-product-card
          name="iPhone 15"
          [price]="999"
          [inStock]="true">
        </app-product-card>

        <app-product-card
          name="MacBook Pro"
          [price]="1999"
          [inStock]="false">
        </app-product-card>

        <h6 class="mt-4">2. Dynamic Input Properties:</h6>
        <div class="row mb-3">
          <div class="col-md-4">
            <input type="text" class="form-control" [(ngModel)]="productName" placeholder="Product name">
          </div>
          <div class="col-md-4">
            <input type="number" class="form-control" [(ngModel)]="productPrice" placeholder="Price">
          </div>
          <div class="col-md-4">
            <div class="form-check mt-2">
              <input type="checkbox" class="form-check-input" [(ngModel)]="productInStock" id="inStock">
              <label class="form-check-label" for="inStock">In Stock</label>
            </div>
          </div>
        </div>
        <app-product-card
          [name]="productName"
          [price]="productPrice"
          [inStock]="productInStock">
        </app-product-card>

        <h6 class="mt-4">3. Loop with Input Properties:</h6>
        @for (product of products; track product.name) {
          <app-product-card
            [name]="product.name"
            [price]="product.price"
            [inStock]="product.inStock">
          </app-product-card>
        }

        <div class="alert alert-info mt-4">
          <strong>Child Component:</strong>
          <pre class="mb-0">&#64;Input() name: string = '';
&#64;Input() price: number = 0;
&#64;Input() inStock: boolean = true;</pre>
          <strong class="mt-2 d-block">Parent Template:</strong>
          <pre class="mb-0">&lt;app-product-card
  [name]="'iPhone'"
  [price]="999"
  [inStock]="true"&gt;
&lt;/app-product-card&gt;</pre>
        </div>
      </div>
    </div>
  `
})
export class InputPropertiesComponent {
  productName = 'Custom Product';
  productPrice = 49.99;
  productInStock = true;

  products = [
    { name: 'iPad', price: 799, inStock: true },
    { name: 'AirPods', price: 249, inStock: true },
    { name: 'Apple Watch', price: 399, inStock: false }
  ];
}
