import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Lesson 6: Style Binding
// Dynamically set inline styles

@Component({
  selector: 'app-style-binding',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card">
      <div class="card-header bg-warning">
        <h5>Lesson 6: Style Binding</h5>
      </div>
      <div class="card-body">
        <h6>1. Single style binding:</h6>
        <p [style.color]="textColor">
          This text color is: {{ textColor }}
        </p>
        <div class="btn-group">
          <button class="btn btn-outline-primary" (click)="textColor = 'blue'">Blue</button>
          <button class="btn btn-outline-danger" (click)="textColor = 'red'">Red</button>
          <button class="btn btn-outline-success" (click)="textColor = 'green'">Green</button>
        </div>

        <h6 class="mt-4">2. Style with units:</h6>
        <p [style.fontSize.px]="fontSize">
          Font size: {{ fontSize }}px
        </p>
        <input type="range" class="form-range" min="12" max="36" [(ngModel)]="fontSize">

        <h6 class="mt-4">3. Multiple style bindings:</h6>
        <div
          class="p-3 border"
          [style.backgroundColor]="bgColor"
          [style.color]="fgColor"
          [style.padding.px]="padding"
          [style.borderRadius.px]="borderRadius">
          Multiple styles applied
        </div>
        <div class="row mt-2">
          <div class="col">
            <label>Background:</label>
            <input type="color" class="form-control" [(ngModel)]="bgColor">
          </div>
          <div class="col">
            <label>Text color:</label>
            <input type="color" class="form-control" [(ngModel)]="fgColor">
          </div>
        </div>

        <h6 class="mt-4">4. Using [ngStyle]:</h6>
        <div class="p-3 border" [ngStyle]="divStyles">
          Using ngStyle directive
        </div>
        <button class="btn btn-outline-secondary mt-2" (click)="toggleStyles()">
          Toggle Styles
        </button>

        <div class="alert alert-info mt-4">
          <strong>Syntax:</strong>
          <ul class="mb-0">
            <li><code>[style.property]="value"</code> - Single style</li>
            <li><code>[style.fontSize.px]="20"</code> - With unit</li>
            <li><code>[ngStyle]="&#123;'color': 'red', 'font-size': '20px'&#125;"</code> - Object</li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class StyleBindingComponent {
  textColor = 'blue';
  fontSize = 16;
  bgColor = '#f0f0f0';
  fgColor = '#333333';
  padding = 20;
  borderRadius = 8;

  divStyles: Record<string, string> = {
    'background-color': '#e0e0e0',
    'font-weight': 'normal'
  };

  toggleStyles() {
    this.divStyles = this.divStyles['font-weight'] === 'bold'
      ? { 'background-color': '#e0e0e0', 'font-weight': 'normal' }
      : { 'background-color': '#ffeb3b', 'font-weight': 'bold' };
  }
}
