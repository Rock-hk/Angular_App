import { Component } from '@angular/core';

// Component with inline template
@Component({
  selector: 'app-inline-template',
  template: `
    <div class="alert alert-primary">
      <h6>Inline Template</h6>
      <p class="mb-0">This template is defined directly in the component using 'template' property.</p>
    </div>
  `
})
export class InlineTemplateComponent {}

// Component with multi-line inline template
@Component({
  selector: 'app-multiline-template',
  template: `
    <div class="card">
      <div class="card-header">Multi-line Template</div>
      <div class="card-body">
        <p>Using backticks allows multi-line templates.</p>
        <ul>
          <li>Line 1</li>
          <li>Line 2</li>
          <li>Line 3</li>
        </ul>
      </div>
    </div>
  `
})
export class MultilineTemplateComponent {}

// Lesson 8: Templates
@Component({
  selector: 'app-templates',
  imports: [InlineTemplateComponent, MultilineTemplateComponent],
  template: `
    <div class="card">
      <div class="card-header bg-secondary text-white">
        <h5>Lesson 8: Templates</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Define component templates inline or in external files</p>

        <h6>1. Inline Template (single line):</h6>
        <div class="border p-3 mb-3 bg-light">
          <code>template: '&lt;h1&gt;Hello&lt;/h1&gt;'</code>
        </div>

        <h6>2. Inline Template (multi-line with backticks):</h6>
        <app-inline-template></app-inline-template>
        <app-multiline-template class="d-block mt-2"></app-multiline-template>

        <h6 class="mt-4">3. External Template File:</h6>
        <div class="border p-3 bg-light">
          <code>templateUrl: './my-component.html'</code>
        </div>
        <p class="mt-2">This lesson component uses an inline template.</p>

        <h6 class="mt-4">When to use which:</h6>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Inline Template</th>
              <th>External Template</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Small, simple templates</td>
              <td>Large, complex templates</td>
            </tr>
            <tr>
              <td>Quick prototyping</td>
              <td>Better IDE support</td>
            </tr>
            <tr>
              <td>< 10-15 lines</td>
              <td>> 15 lines</td>
            </tr>
            <tr>
              <td>No need for HTML tooling</td>
              <td>HTML formatting/linting</td>
            </tr>
          </tbody>
        </table>

        <div class="alert alert-info mt-4">
          <strong>Inline Template:</strong>
          <pre class="mb-2">&#64;Component(&#123;
  selector: 'app-example',
  template: \`
    &lt;h1&gt;Hello&lt;/h1&gt;
    &lt;p&gt;World&lt;/p&gt;
  \`
&#125;)</pre>
          <strong>External Template:</strong>
          <pre class="mb-0">&#64;Component(&#123;
  selector: 'app-example',
  templateUrl: './example.component.html'
&#125;)</pre>
        </div>
      </div>
    </div>
  `
})
export class TemplatesComponent {}
