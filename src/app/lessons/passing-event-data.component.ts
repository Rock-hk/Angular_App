import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

// Interface for type safety
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// Task Item Component
@Component({
  selector: 'app-task-item',
  template: `
    <div class="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          class="form-check-input me-2"
          [checked]="task.completed"
          (change)="onToggle()">
        <span [class.text-decoration-line-through]="task.completed">
          {{ task.title }}
        </span>
      </div>
      <button class="btn btn-sm btn-outline-danger" (click)="onDelete()">Delete</button>
    </div>
  `
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() toggle = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<Task>();

  onToggle() {
    this.toggle.emit(this.task);
  }

  onDelete() {
    this.delete.emit(this.task);
  }
}

// Product Component with rich event data
@Component({
  selector: 'app-product-item',
  imports: [CurrencyPipe],
  template: `
    <div class="card mb-2">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div>
          <h6 class="mb-0">{{ name }}</h6>
          <small class="text-muted">{{ price | currency }}</small>
        </div>
        <button class="btn btn-primary btn-sm" (click)="onAddToCart()">
          Add to Cart
        </button>
      </div>
    </div>
  `
})
export class ProductItemComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() price!: number;
  @Output() addToCart = new EventEmitter<{id: number, name: string, price: number, quantity: number}>();

  onAddToCart() {
    this.addToCart.emit({
      id: this.id,
      name: this.name,
      price: this.price,
      quantity: 1
    });
  }
}

// Lesson 6: Passing Event Data
@Component({
  selector: 'app-passing-event-data',
  imports: [TaskItemComponent, ProductItemComponent, CurrencyPipe],
  template: `
    <div class="card">
      <div class="card-header bg-info text-white">
        <h5>Lesson 6: Passing Event Data</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Pass complex data objects through events</p>

        <h6>1. Task List with Event Data:</h6>
        <div class="list-group">
          @for (task of tasks; track task.id) {
            <app-task-item
              [task]="task"
              (toggle)="onTaskToggle($event)"
              (delete)="onTaskDelete($event)">
            </app-task-item>
          }
        </div>
        <p class="mt-2 text-muted">Last action: {{ lastAction }}</p>

        <h6 class="mt-4">2. Products with Rich Event Data:</h6>
        @for (product of products; track product.id) {
          <app-product-item
            [id]="product.id"
            [name]="product.name"
            [price]="product.price"
            (addToCart)="onAddToCart($event)">
          </app-product-item>
        }

        <h6 class="mt-3">Shopping Cart:</h6>
        <div class="border p-3 bg-light">
          @if (cart.length === 0) {
            <p class="text-muted mb-0">Cart is empty</p>
          } @else {
            <ul class="mb-0">
              @for (item of cart; track item.id) {
                <li>{{ item.name }} - {{ item.price | currency }}</li>
              }
            </ul>
            <hr>
            <strong>Total: {{ cartTotal | currency }}</strong>
          }
        </div>

        <div class="alert alert-info mt-4">
          <strong>Child Component:</strong>
          <pre class="mb-0">&#64;Output() addToCart = new EventEmitter&lt;&#123;
  id: number,
  name: string,
  price: number
&#125;&gt;();

onAdd() &#123;
  this.addToCart.emit(&#123;
    id: this.id,
    name: this.name,
    price: this.price
  &#125;);
&#125;</pre>
          <strong class="mt-2 d-block">Parent:</strong>
          <pre class="mb-0">&lt;app-product (addToCart)="onAddToCart($event)"&gt;&lt;/app-product&gt;

onAddToCart(item: &#123;id, name, price&#125;) &#123;
  this.cart.push(item);
&#125;</pre>
        </div>
      </div>
    </div>
  `
})
export class PassingEventDataComponent {
  tasks: Task[] = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Build a project', completed: false },
    { id: 3, title: 'Deploy to production', completed: false }
  ];
  lastAction = '';

  products = [
    { id: 1, name: 'Keyboard', price: 79.99 },
    { id: 2, name: 'Mouse', price: 49.99 },
    { id: 3, name: 'Monitor', price: 299.99 }
  ];
  cart: {id: number, name: string, price: number, quantity: number}[] = [];

  get cartTotal() {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  onTaskToggle(task: Task) {
    task.completed = !task.completed;
    this.lastAction = `Toggled: ${task.title} (${task.completed ? 'completed' : 'pending'})`;
  }

  onTaskDelete(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.lastAction = `Deleted: ${task.title}`;
  }

  onAddToCart(item: {id: number, name: string, price: number, quantity: number}) {
    this.cart.push(item);
  }
}
