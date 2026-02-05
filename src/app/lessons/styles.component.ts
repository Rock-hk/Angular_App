import { Component } from '@angular/core';

// Component with inline styles
@Component({
  selector: 'app-inline-styles',
  template: `
    <div class="styled-box">
      <h6>Inline Styles Component</h6>
      <p>These styles are defined in the component.</p>
    </div>
  `,
  styles: [`
    .styled-box {
      padding: 15px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 8px;
    }
    .styled-box h6 {
      margin-bottom: 10px;
    }
  `]
})
export class InlineStylesComponent {}

// Component with multiple style blocks
@Component({
  selector: 'app-multi-styles',
  template: `
    <div class="multi-styled">
      <h6 class="title">Multiple Style Blocks</h6>
      <p class="content">Styles can be split into multiple strings.</p>
    </div>
  `,
  styles: [
    `.multi-styled { padding: 15px; border: 2px solid #28a745; border-radius: 8px; }`,
    `.title { color: #28a745; }`,
    `.content { color: #666; }`
  ]
})
export class MultiStylesComponent {}

// Lesson 9: Styles
@Component({
  selector: 'app-styles',
  imports: [InlineStylesComponent, MultiStylesComponent],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #6f42c1; color: white;">
        <h5>Lesson 9: Styles</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Define component styles inline or in external files</p>

        <h6>1. Inline Styles (single style block):</h6>
        <app-inline-styles></app-inline-styles>

        <h6 class="mt-4">2. Multiple Style Blocks:</h6>
        <app-multi-styles></app-multi-styles>

        <h6 class="mt-4">3. External Stylesheet:</h6>
        <div class="border p-3 bg-light">
          <code>styleUrl: './component.css'</code><br>
          <code>styleUrls: ['./component.css', './other.css']</code>
        </div>

        <h6 class="mt-4">4. Style Scoping:</h6>
        <div class="alert alert-warning">
          <strong>Important:</strong> Component styles are scoped by default!
          <ul class="mb-0 mt-2">
            <li>Styles only apply to the component's template</li>
            <li>They don't leak to parent or child components</li>
            <li>Angular adds unique attributes to achieve this</li>
          </ul>
        </div>

        <h6 class="mt-4">5. Global Styles:</h6>
        <p>For global styles, use <code>src/styles.css</code></p>

        <div class="alert alert-info mt-4">
          <strong>Inline Styles:</strong>
          <pre class="mb-2">&#64;Component(&#123;
  selector: 'app-example',
  template: '...',
  styles: [\`
    .my-class &#123; color: red; &#125;
  \`]
&#125;)</pre>
          <strong>External Styles:</strong>
          <pre class="mb-2">&#64;Component(&#123;
  selector: 'app-example',
  template: '...',
  styleUrl: './example.css'
&#125;)</pre>
          <strong>Multiple External Files:</strong>
          <pre class="mb-0">styleUrls: ['./base.css', './theme.css']</pre>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card-header {
      font-weight: bold;
    }
  `]
})
export class StylesComponent {}
