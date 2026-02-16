import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Lesson 10: ngStyle
// Dynamically set inline styles on elements

@Component({
  selector: 'app-ng-style',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #20c997; color: white;">
        <h5>Lesson 10: ngStyle</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Dynamically set multiple inline styles on elements</p>

        <h6>1. Using [style.property] (single style):</h6>
        <button
          class="btn btn-primary mb-3"
          [style.backgroundColor]="canSave ? 'green' : 'red'"
          (click)="canSave = !canSave">
          {{ canSave ? 'Saved' : 'Unsaved' }}
        </button>

        <h6>2. Using [ngStyle] with multiple styles:</h6>
        <div class="mb-3">
          <label class="form-label">Font size: {{ fontSize }}px</label>
          <input type="range" class="form-range" min="12" max="36"
                 [(ngModel)]="fontSize">
        </div>
        <p [ngStyle]="{
          'fontSize': fontSize + 'px',
          'fontWeight': isBold ? 'bold' : 'normal',
          'color': fontColor
        }">
          Dynamic styled text!
        </p>

        <div class="mb-3">
          <label><input type="checkbox" [(ngModel)]="isBold"> Bold</label>
          <select class="form-select w-auto d-inline-block ms-3" [(ngModel)]="fontColor">
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
          </select>
        </div>

        <h6 class="mt-3">3. Progress bar example:</h6>
        <div class="progress mb-2" style="height: 25px;">
          <div class="progress-bar" [ngStyle]="{ 'width': progress + '%' }">
            {{ progress }}%
          </div>
        </div>
        <input type="range" class="form-range" min="0" max="100" [(ngModel)]="progress">

        <div class="alert alert-info mt-4">
          <strong>Syntax:</strong>
          <ul class="mb-0">
            <li>Single: <code>[style.fontSize.px]="16"</code></li>
            <li>Multiple: <code>[ngStyle]="&#123; 'font-size': '16px', 'color': 'red' &#125;"</code></li>
          </ul>
          <strong>Note:</strong> Use camelCase for style properties (e.g., <code>fontSize</code>)
          or quoted kebab-case (e.g., <code>'font-size'</code>).
        </div>
      </div>
    </div>
  `
})
export class NgStyleComponent {
  canSave = true;
  fontSize = 18;
  isBold = false;
  fontColor = 'black';
  progress = 50;
}
