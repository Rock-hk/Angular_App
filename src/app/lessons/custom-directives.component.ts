import { Component, Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

// Custom Directive 1: appHighlight — changes background color on hover
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = 'yellow';
  @Input() defaultColor = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.defaultColor) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.defaultColor);
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.appHighlight || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.defaultColor || null);
  }
}

// Custom Directive 2: appInputFormat — formats input to lowercase/uppercase
@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input() appInputFormat = '';

  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;
    if (this.appInputFormat === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else if (this.appInputFormat === 'uppercase') {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }
}

// Lesson 12: Creating Custom Directives
@Component({
  selector: 'app-custom-directives',
  imports: [HighlightDirective, InputFormatDirective],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #20c997; color: white;">
        <h5>Lesson 12: Creating Custom Directives</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Build your own attribute directives to modify element behavior</p>

        <h6>1. Highlight Directive (hover over the items):</h6>
        <ul class="list-group mb-3">
          <li class="list-group-item" appHighlight>
            Default highlight (yellow)
          </li>
          <li class="list-group-item" [appHighlight]="'lightgreen'">
            Custom highlight (lightgreen)
          </li>
          <li class="list-group-item" [appHighlight]="'lightblue'" defaultColor="lightyellow">
            Custom highlight + default color
          </li>
        </ul>

        <h6>2. Input Format Directive (type and click outside):</h6>
        <div class="mb-2">
          <label class="form-label">Lowercase on blur:</label>
          <input type="text" class="form-control" [appInputFormat]="'lowercase'"
                 placeholder="Type something and blur...">
        </div>
        <div class="mb-3">
          <label class="form-label">Uppercase on blur:</label>
          <input type="text" class="form-control" [appInputFormat]="'uppercase'"
                 placeholder="Type something and blur...">
        </div>

        <h6>3. How to create a custom directive:</h6>
        <div class="alert alert-secondary">
          <pre class="mb-0">import &#123; Directive, ElementRef, HostListener &#125; from '&#64;angular/core';

&#64;Directive(&#123;
  selector: '[appHighlight]'
&#125;)
export class HighlightDirective &#123;
  constructor(private el: ElementRef) &#123;&#125;

  &#64;HostListener('mouseenter') onMouseEnter() &#123;
    this.el.nativeElement.style.backgroundColor = 'yellow';
  &#125;

  &#64;HostListener('mouseleave') onMouseLeave() &#123;
    this.el.nativeElement.style.backgroundColor = null;
  &#125;
&#125;</pre>
        </div>

        <div class="alert alert-info mt-4">
          <strong>Key concepts:</strong>
          <ul class="mb-0">
            <li><code>&#64;Directive</code> decorator defines a directive</li>
            <li><code>ElementRef</code> gives access to the host DOM element</li>
            <li><code>Renderer2</code> is the preferred way to modify DOM (safer)</li>
            <li><code>&#64;HostListener</code> subscribes to host element events</li>
            <li><code>&#64;Input</code> allows passing values to the directive</li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class CustomDirectivesComponent {}
