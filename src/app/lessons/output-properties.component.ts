import { Component, Input, Output, EventEmitter } from '@angular/core';

// Child Component with Output Property
@Component({
  selector: 'app-like-button',
  template: `
    <button class="btn" [class.btn-outline-danger]="!liked" [class.btn-danger]="liked" (click)="onClick()">
      {{ liked ? '❤️ Liked' : '🤍 Like' }}
    </button>
  `
})
export class LikeButtonComponent {
  liked = false;
  @Output() change = new EventEmitter<boolean>();

  onClick() {
    this.liked = !this.liked;
    this.change.emit(this.liked);
  }
}

// Counter Component
@Component({
  selector: 'app-counter',
  template: `
    <div class="d-flex align-items-center gap-2">
      <button class="btn btn-outline-secondary" (click)="decrement()">-</button>
      <span class="badge bg-primary fs-5">{{ count }}</span>
      <button class="btn btn-outline-secondary" (click)="increment()">+</button>
    </div>
  `
})
export class CounterComponent {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChange.emit(this.count);
  }
}

// Lesson 5: Output Properties
@Component({
  selector: 'app-output-properties',
  imports: [LikeButtonComponent, CounterComponent],
  template: `
    <div class="card">
      <div class="card-header bg-danger text-white">
        <h5>Lesson 5: Output Properties</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Send data from child to parent using &#64;Output() and EventEmitter</p>

        <h6>1. Like Button with Output:</h6>
        <app-like-button (change)="onLikeChange($event)"></app-like-button>
        <p class="mt-2">Liked status: {{ isLiked }}</p>

        <h6 class="mt-4">2. Counter with Output:</h6>
        <app-counter [count]="quantity" (countChange)="onCountChange($event)"></app-counter>
        <p class="mt-2">Current count in parent: {{ quantity }}</p>

        <h6 class="mt-4">3. Multiple Likes:</h6>
        <div class="d-flex gap-2">
          @for (item of items; track item.id) {
            <div class="text-center">
              <p>{{ item.name }}</p>
              <app-like-button (change)="onItemLike(item.id, $event)"></app-like-button>
            </div>
          }
        </div>
        <p class="mt-2">Liked items: {{ likedItems.join(', ') || 'None' }}</p>

        <div class="alert alert-info mt-4">
          <strong>Child Component:</strong>
          <pre class="mb-0">&#64;Output() change = new EventEmitter&lt;boolean&gt;();

onClick() &#123;
  this.change.emit(true);
&#125;</pre>
          <strong class="mt-2 d-block">Parent Template:</strong>
          <pre class="mb-0">&lt;app-like-button (change)="onLikeChange($event)"&gt;&lt;/app-like-button&gt;</pre>
          <strong class="mt-2 d-block">Parent Component:</strong>
          <pre class="mb-0">onLikeChange(liked: boolean) &#123;
  console.log('Liked:', liked);
&#125;</pre>
        </div>
      </div>
    </div>
  `
})
export class OutputPropertiesComponent {
  isLiked = false;
  quantity = 5;
  items = [
    { id: 1, name: 'Photo 1' },
    { id: 2, name: 'Photo 2' },
    { id: 3, name: 'Photo 3' }
  ];
  likedItems: number[] = [];

  onLikeChange(liked: boolean) {
    this.isLiked = liked;
  }

  onCountChange(count: number) {
    this.quantity = count;
  }

  onItemLike(id: number, liked: boolean) {
    if (liked) {
      this.likedItems.push(id);
    } else {
      this.likedItems = this.likedItems.filter(i => i !== id);
    }
  }
}
