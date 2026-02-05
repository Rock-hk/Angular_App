import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe, PercentPipe, JsonPipe, SlicePipe } from '@angular/common';

// Lesson 11: Pipes
// Transform data in templates using the pipe operator |

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe, PercentPipe, JsonPipe, SlicePipe],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #fd7e14; color: white;">
        <h5>Lesson 11: Pipes</h5>
      </div>
      <div class="card-body">
        <h6>1. String Pipes:</h6>
        <table class="table table-sm">
          <tr>
            <td>Original:</td>
            <td>{{ title }}</td>
          </tr>
          <tr>
            <td>uppercase:</td>
            <td>{{ title | uppercase }}</td>
          </tr>
          <tr>
            <td>lowercase:</td>
            <td>{{ title | lowercase }}</td>
          </tr>
          <tr>
            <td>titlecase:</td>
            <td>{{ title | titlecase }}</td>
          </tr>
        </table>

        <h6 class="mt-4">2. Date Pipe:</h6>
        <table class="table table-sm">
          <tr>
            <td>Default:</td>
            <td>{{ today | date }}</td>
          </tr>
          <tr>
            <td>fullDate:</td>
            <td>{{ today | date:'fullDate' }}</td>
          </tr>
          <tr>
            <td>shortDate:</td>
            <td>{{ today | date:'shortDate' }}</td>
          </tr>
          <tr>
            <td>shortTime:</td>
            <td>{{ today | date:'shortTime' }}</td>
          </tr>
          <tr>
            <td>Custom:</td>
            <td>{{ today | date:'yyyy-MM-dd HH:mm' }}</td>
          </tr>
        </table>

        <h6 class="mt-4">3. Number Pipes:</h6>
        <table class="table table-sm">
          <tr>
            <td>Original:</td>
            <td>{{ price }}</td>
          </tr>
          <tr>
            <td>number:</td>
            <td>{{ price | number }}</td>
          </tr>
          <tr>
            <td>number:'1.2-2':</td>
            <td>{{ price | number:'1.2-2' }}</td>
          </tr>
          <tr>
            <td>number:'3.0-0':</td>
            <td>{{ price | number:'3.0-0' }}</td>
          </tr>
        </table>

        <h6 class="mt-4">4. Currency Pipe:</h6>
        <table class="table table-sm">
          <tr>
            <td>Default (USD):</td>
            <td>{{ price | currency }}</td>
          </tr>
          <tr>
            <td>EUR:</td>
            <td>{{ price | currency:'EUR' }}</td>
          </tr>
          <tr>
            <td>GBP:</td>
            <td>{{ price | currency:'GBP':'symbol':'1.0-0' }}</td>
          </tr>
        </table>

        <h6 class="mt-4">5. Percent Pipe:</h6>
        <table class="table table-sm">
          <tr>
            <td>Original:</td>
            <td>{{ rating }}</td>
          </tr>
          <tr>
            <td>percent:</td>
            <td>{{ rating | percent }}</td>
          </tr>
          <tr>
            <td>percent:'1.1-2':</td>
            <td>{{ rating | percent:'1.1-2' }}</td>
          </tr>
        </table>

        <h6 class="mt-4">6. Slice Pipe:</h6>
        <p>Array: {{ items }}</p>
        <p>slice:0:3: {{ items | slice:0:3 }}</p>
        <p>slice:2: {{ items | slice:2 }}</p>
        <p>String slice:0:5: {{ title | slice:0:5 }}</p>

        <h6 class="mt-4">7. JSON Pipe:</h6>
        <pre>{{ person | json }}</pre>

        <h6 class="mt-4">8. Chaining Pipes:</h6>
        <p>{{ title | uppercase | slice:0:10 }}</p>

        <div class="alert alert-info mt-4">
          <strong>Syntax:</strong> <code>{{ "{{ value | pipeName }}" }}</code><br>
          <strong>With args:</strong> <code>{{ "{{ value | pipeName:arg1:arg2 }}" }}</code><br>
          <strong>Chaining:</strong> <code>{{ "{{ value | pipe1 | pipe2 }}" }}</code>
        </div>
      </div>
    </div>
  `
})
export class PipesComponent {
  title = 'hello angular world';
  today = new Date();
  price = 12345.6789;
  rating = 0.856;
  items = [1, 2, 3, 4, 5];
  person = { name: 'John', age: 30, city: 'New York' };
}
