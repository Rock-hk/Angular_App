import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Lesson 11: Control Classes and Directives
// Summary of all Angular form control classes and directives

@Component({
  selector: 'app-control-classes-directives',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #fd7e14; color: white;">
        <h5>Lesson 11: Control Classes and Directives</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Overview of form control states, classes, and directives</p>

        <h6>1. Live demo — interact with the input:</h6>
        <form>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              required
              ngModel
              name="demo"
              #demoRef="ngModel"
              placeholder="Type something, then clear and blur...">
          </div>
        </form>

        <h6>2. Current state:</h6>
        <table class="table table-bordered table-sm">
          <thead class="table-light">
            <tr><th>Property</th><th>Value</th><th>CSS Class</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>pristine</td>
              <td><span [class.text-success]="demoRef.pristine">{{ demoRef.pristine }}</span></td>
              <td><code>{{ demoRef.pristine ? 'ng-pristine' : 'ng-dirty' }}</code></td>
            </tr>
            <tr>
              <td>dirty</td>
              <td><span [class.text-success]="demoRef.dirty">{{ demoRef.dirty }}</span></td>
              <td><code>{{ demoRef.dirty ? 'ng-dirty' : 'ng-pristine' }}</code></td>
            </tr>
            <tr>
              <td>touched</td>
              <td><span [class.text-success]="demoRef.touched">{{ demoRef.touched }}</span></td>
              <td><code>{{ demoRef.touched ? 'ng-touched' : 'ng-untouched' }}</code></td>
            </tr>
            <tr>
              <td>valid</td>
              <td><span [class.text-success]="demoRef.valid" [class.text-danger]="demoRef.invalid">{{ demoRef.valid }}</span></td>
              <td><code>{{ demoRef.valid ? 'ng-valid' : 'ng-invalid' }}</code></td>
            </tr>
          </tbody>
        </table>

        <h6 class="mt-3">3. Directives reference:</h6>
        <table class="table table-bordered table-sm">
          <thead class="table-light">
            <tr><th>Directive</th><th>Purpose</th></tr>
          </thead>
          <tbody>
            <tr><td><code>ngModel</code></td><td>Two-way binding for form controls</td></tr>
            <tr><td><code>ngForm</code></td><td>Auto-applied to &lt;form&gt;, tracks form state</td></tr>
            <tr><td><code>ngModelGroup</code></td><td>Groups related controls into nested object</td></tr>
            <tr><td><code>required</code></td><td>Built-in validator directive</td></tr>
            <tr><td><code>minlength / maxlength</code></td><td>Length validator directives</td></tr>
            <tr><td><code>pattern</code></td><td>Regex validator directive</td></tr>
            <tr><td><code>email</code></td><td>Email format validator directive</td></tr>
          </tbody>
        </table>

        <div class="alert alert-info mt-3">
          <strong>Tip:</strong> These CSS classes let you style form controls based on state
          without writing any component logic — just pure CSS selectors!
        </div>
      </div>
    </div>
  `
})
export class ControlClassesDirectivesComponent {}
