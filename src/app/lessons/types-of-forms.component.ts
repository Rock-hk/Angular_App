import { Component } from '@angular/core';

// Lesson 3: Types of Forms
// Template-driven vs Reactive forms

@Component({
  selector: 'app-types-of-forms',
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #fd7e14; color: white;">
        <h5>Lesson 3: Types of Forms</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Comparing Template-driven and Reactive forms in Angular</p>

        <div class="row">
          <div class="col-md-6">
            <div class="card border-primary mb-3">
              <div class="card-header bg-primary text-white">Template-driven Forms</div>
              <div class="card-body">
                <ul class="list-unstyled">
                  <li>Easy to use</li>
                  <li>Two-way data binding with <code>ngModel</code></li>
                  <li>Automatically generates form model</li>
                  <li>Less code in component class</li>
                  <li>Good for simple forms</li>
                  <li>Import <code>FormsModule</code></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-success mb-3">
              <div class="card-header bg-success text-white">Reactive Forms</div>
              <div class="card-body">
                <ul class="list-unstyled">
                  <li>More control</li>
                  <li>Explicit form model in component</li>
                  <li>Easier to unit test</li>
                  <li>Supports dynamic inputs</li>
                  <li>Good for complex forms</li>
                  <li>Import <code>ReactiveFormsModule</code></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h6 class="mt-3">Comparison Table:</h6>
        <table class="table table-bordered">
          <thead class="table-light">
            <tr>
              <th>Feature</th>
              <th>Template-driven</th>
              <th>Reactive</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Setup</td><td>FormsModule</td><td>ReactiveFormsModule</td></tr>
            <tr><td>Form model</td><td>Auto-generated</td><td>Explicit in class</td></tr>
            <tr><td>Data flow</td><td>Two-way binding</td><td>Observables</td></tr>
            <tr><td>Validation</td><td>Directives</td><td>Functions</td></tr>
            <tr><td>Best for</td><td>Simple forms</td><td>Complex forms</td></tr>
          </tbody>
        </table>

        <div class="alert alert-info mt-3">
          <strong>This section covers Template-driven Forms.</strong>
          Template-driven forms rely on directives like <code>ngModel</code>, <code>ngForm</code>,
          and <code>ngModelGroup</code> to build forms in the template.
        </div>
      </div>
    </div>
  `
})
export class TypesOfFormsComponent {}
