import { Component } from '@angular/core';

// Lesson 9: Template Variables
// Create references to DOM elements using #variableName

@Component({
  selector: 'app-template-variables',
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #6f42c1; color: white;">
        <h5>Lesson 9: Template Variables</h5>
      </div>
      <div class="card-body">
        <h6>1. Basic template variable:</h6>
        <input #emailInput type="email" class="form-control" placeholder="Enter email">
        <button class="btn btn-primary mt-2" (click)="logEmail(emailInput.value)">
          Log Email
        </button>
        <p class="mt-2">Email: {{ email }}</p>

        <h6 class="mt-4">2. Focus an input using template variable:</h6>
        <input #nameInput type="text" class="form-control" placeholder="Enter name">
        <button class="btn btn-outline-primary mt-2" (click)="nameInput.focus()">
          Focus Name Input
        </button>

        <h6 class="mt-4">3. Get input value on keyup:</h6>
        <input
          #searchInput
          type="text"
          class="form-control"
          (keyup)="onSearch(searchInput.value)"
          placeholder="Search...">
        <p class="mt-2">Searching for: {{ searchTerm }}</p>

        <h6 class="mt-4">4. Access element properties:</h6>
        <input
          #textInput
          type="text"
          class="form-control"
          value="Hello World"
          maxlength="20">
        <p class="mt-2">
          Value: {{ textInput.value }}<br>
          Max Length: {{ textInput.maxLength }}<br>
          Type: {{ textInput.type }}
        </p>

        <h6 class="mt-4">5. Template variable with select:</h6>
        <select #colorSelect class="form-select" (change)="onColorChange(colorSelect.value)">
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
        <div
          class="mt-2 p-3 border"
          [style.backgroundColor]="selectedColor || 'white'">
          Selected: {{ selectedColor || 'None' }}
        </div>

        <div class="alert alert-info mt-4">
          <strong>Syntax:</strong> <code>#variableName</code><br>
          <strong>Usage:</strong>
          <ul class="mb-0">
            <li><code>#input</code> - Creates reference to element</li>
            <li><code>input.value</code> - Access element properties</li>
            <li><code>input.focus()</code> - Call element methods</li>
            <li>Template variables are scoped to the template</li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class TemplateVariablesComponent {
  email = '';
  searchTerm = '';
  selectedColor = '';

  logEmail(value: string) {
    this.email = value;
    console.log('Email:', value);
  }

  onSearch(value: string) {
    this.searchTerm = value;
  }

  onColorChange(value: string) {
    this.selectedColor = value;
  }
}
