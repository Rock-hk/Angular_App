import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Lesson 8: Event Filtering
// Filter keyboard events using (keyup.key)

@Component({
  selector: 'app-event-filtering',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="card">
      <div class="card-header bg-secondary text-white">
        <h5>Lesson 8: Event Filtering</h5>
      </div>
      <div class="card-body">
        <h6>1. Filter Enter key:</h6>
        <input
          type="text"
          class="form-control"
          [(ngModel)]="enterValue"
          (keyup.enter)="onEnter()"
          placeholder="Press Enter to submit">
        <p class="mt-2" *ngIf="submittedEnter">Submitted: {{ submittedEnter }}</p>

        <h6 class="mt-4">2. Filter Escape key:</h6>
        <input
          type="text"
          class="form-control"
          [(ngModel)]="escapeValue"
          (keyup.escape)="onEscape()"
          placeholder="Press Escape to clear">

        <h6 class="mt-4">3. Filter specific keys:</h6>
        <input
          type="text"
          class="form-control"
          (keyup.space)="onSpace()"
          (keyup.tab)="onTab()"
          placeholder="Press Space or Tab">
        <p class="mt-2">Last key: {{ lastKey }}</p>

        <h6 class="mt-4">4. Combination keys:</h6>
        <input
          type="text"
          class="form-control"
          (keydown.control.s)="onCtrlS($event)"
          (keydown.shift.enter)="onShiftEnter()"
          placeholder="Try Ctrl+S or Shift+Enter">
        <p class="mt-2">Combo pressed: {{ comboKey }}</p>

        <h6 class="mt-4">5. Arrow keys:</h6>
        <div
          class="p-4 bg-light border text-center"
          tabindex="0"
          (keyup.arrowup)="move('up')"
          (keyup.arrowdown)="move('down')"
          (keyup.arrowleft)="move('left')"
          (keyup.arrowright)="move('right')">
          Click here and use arrow keys<br>
          Position: X={{ posX }}, Y={{ posY }}
        </div>

        <div class="alert alert-info mt-4">
          <strong>Syntax:</strong> <code>(keyup.keyName)="handler()"</code><br>
          <strong>Key filters:</strong>
          <ul class="mb-0">
            <li><code>keyup.enter</code>, <code>keyup.escape</code>, <code>keyup.space</code></li>
            <li><code>keyup.arrowup</code>, <code>keyup.arrowdown</code></li>
            <li><code>keydown.control.s</code> - Combination</li>
            <li><code>keydown.shift.enter</code> - Combination</li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class EventFilteringComponent {
  enterValue = '';
  submittedEnter = '';
  escapeValue = 'Some text';
  lastKey = '';
  comboKey = '';
  posX = 0;
  posY = 0;

  onEnter() {
    this.submittedEnter = this.enterValue;
    this.enterValue = '';
  }

  onEscape() {
    this.escapeValue = '';
  }

  onSpace() {
    this.lastKey = 'Space';
  }

  onTab() {
    this.lastKey = 'Tab';
  }

  onCtrlS(event: Event) {
    event.preventDefault();
    this.comboKey = 'Ctrl + S';
  }

  onShiftEnter() {
    this.comboKey = 'Shift + Enter';
  }

  move(direction: string) {
    switch(direction) {
      case 'up': this.posY--; break;
      case 'down': this.posY++; break;
      case 'left': this.posX--; break;
      case 'right': this.posX++; break;
    }
  }
}
