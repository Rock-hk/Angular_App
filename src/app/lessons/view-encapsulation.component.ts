import { Component, ViewEncapsulation } from '@angular/core';

// Emulated Encapsulation (Default)
@Component({
  selector: 'app-emulated',
  template: `
    <div class="box">
      <h6>Emulated (Default)</h6>
      <p class="text">Styles are scoped using attribute selectors.</p>
    </div>
  `,
  styles: [`
    .box { padding: 15px; border: 2px solid #007bff; border-radius: 8px; margin-bottom: 10px; }
    .text { color: #007bff; }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class EmulatedComponent {}

// None Encapsulation
@Component({
  selector: 'app-none-encap',
  template: `
    <div class="none-box">
      <h6>None Encapsulation</h6>
      <p class="none-text">Styles are global - they leak out!</p>
    </div>
  `,
  styles: [`
    .none-box { padding: 15px; border: 2px solid #dc3545; border-radius: 8px; margin-bottom: 10px; }
    .none-text { color: #dc3545; }
  `],
  encapsulation: ViewEncapsulation.None
})
export class NoneEncapsulationComponent {}

// ShadowDom Encapsulation
@Component({
  selector: 'app-shadow-dom',
  template: `
    <div class="shadow-box">
      <h6>Shadow DOM</h6>
      <p class="shadow-text">Uses native Shadow DOM for true isolation.</p>
    </div>
  `,
  styles: [`
    .shadow-box { padding: 15px; border: 2px solid #28a745; border-radius: 8px; margin-bottom: 10px; }
    .shadow-text { color: #28a745; }
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowDomComponent {}

// Lesson 10: View Encapsulation
@Component({
  selector: 'app-view-encapsulation',
  imports: [EmulatedComponent, NoneEncapsulationComponent, ShadowDomComponent],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #17a2b8; color: white;">
        <h5>Lesson 10: View Encapsulation</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Control how component styles are encapsulated</p>

        <h6>1. ViewEncapsulation.Emulated (Default):</h6>
        <app-emulated></app-emulated>
        <p class="small text-muted">
          Angular adds unique attributes like <code>_ngcontent-xxx</code> to scope styles.
        </p>

        <h6 class="mt-3">2. ViewEncapsulation.None:</h6>
        <app-none-encap></app-none-encap>
        <p class="small text-muted">
          Styles are added to the global stylesheet. <span class="none-text">This text is affected!</span>
        </p>

        <h6 class="mt-3">3. ViewEncapsulation.ShadowDom:</h6>
        <app-shadow-dom></app-shadow-dom>
        <p class="small text-muted">
          Uses browser's native Shadow DOM. Not all browsers fully support it.
        </p>

        <h6 class="mt-4">Comparison:</h6>
        <table class="table table-bordered table-sm">
          <thead>
            <tr>
              <th>Mode</th>
              <th>How it works</th>
              <th>Use case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Emulated</td>
              <td>Attribute selectors</td>
              <td>Most cases (default)</td>
            </tr>
            <tr>
              <td>None</td>
              <td>Global styles</td>
              <td>When you need global styles</td>
            </tr>
            <tr>
              <td>ShadowDom</td>
              <td>Native encapsulation</td>
              <td>Web components</td>
            </tr>
          </tbody>
        </table>

        <div class="alert alert-info mt-4">
          <strong>Syntax:</strong>
          <pre class="mb-0">import &#123; ViewEncapsulation &#125; from '&#64;angular/core';

&#64;Component(&#123;
  selector: 'app-example',
  template: '...',
  styles: ['...'],
  encapsulation: ViewEncapsulation.Emulated // or None or ShadowDom
&#125;)</pre>
        </div>
      </div>
    </div>
  `
})
export class ViewEncapsulationComponent {}
