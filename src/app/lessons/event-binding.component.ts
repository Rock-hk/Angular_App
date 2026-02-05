import { Component } from '@angular/core';

// Lesson 7: Event Binding
// Handle DOM events using (eventName)="handler()"

@Component({
  selector: 'app-event-binding',
  template: `
    <div class="card">
      <div class="card-header bg-danger text-white">
        <h5>Lesson 7: Event Binding</h5>
      </div>
      <div class="card-body">
        <h6>1. Click event:</h6>
        <button class="btn btn-danger" (click)="onClick()">
          Click me! Count: {{ clickCount }}
        </button>

        <h6 class="mt-4">2. Using $event object:</h6>
        <div
          class="p-4 bg-secondary text-white"
          (mousemove)="onMouseMove($event)">
          Move your mouse here!<br>
          X: {{ mouseX }}, Y: {{ mouseY }}
        </div>

        <h6 class="mt-4">3. Input event:</h6>
        <input
          type="text"
          class="form-control"
          (input)="onInput($event)"
          placeholder="Type something...">
        <p class="mt-2">You typed: {{ inputValue }}</p>

        <h6 class="mt-4">4. Multiple events:</h6>
        <button
          class="btn btn-outline-primary"
          (mouseenter)="onMouseEnter()"
          (mouseleave)="onMouseLeave()">
          {{ hoverText }}
        </button>

        <h6 class="mt-4">5. Blur and Focus:</h6>
        <input
          type="text"
          class="form-control"
          [class.border-primary]="isFocused"
          (focus)="isFocused = true"
          (blur)="isFocused = false"
          placeholder="Focus me">
        <p class="mt-2">Input is {{ isFocused ? 'focused' : 'not focused' }}</p>

        <div class="alert alert-info mt-4">
          <strong>Syntax:</strong> <code>(eventName)="handler()"</code><br>
          <strong>Common events:</strong>
          <ul class="mb-0">
            <li><code>(click)</code> - Mouse click</li>
            <li><code>(dblclick)</code> - Double click</li>
            <li><code>(input)</code> - Input value change</li>
            <li><code>(keyup)</code> - Key released</li>
            <li><code>(mouseenter)</code> / <code>(mouseleave)</code></li>
            <li><code>(focus)</code> / <code>(blur)</code></li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class EventBindingComponent {
  clickCount = 0;
  mouseX = 0;
  mouseY = 0;
  inputValue = '';
  hoverText = 'Hover over me';
  isFocused = false;

  onClick() {
    this.clickCount++;
  }

  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  onInput(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  onMouseEnter() {
    this.hoverText = 'Mouse is over!';
  }

  onMouseLeave() {
    this.hoverText = 'Hover over me';
  }
}
