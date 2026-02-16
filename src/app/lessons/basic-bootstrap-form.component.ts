import { Component } from '@angular/core';

// Lesson 2: Building a Basic Bootstrap Form
// Creating a form layout with Bootstrap classes

@Component({
  selector: 'app-basic-bootstrap-form',
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #fd7e14; color: white;">
        <h5>Lesson 2: Building a Basic Bootstrap Form</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Creating a contact form using Bootstrap form classes</p>

        <form>
          <div class="mb-3">
            <label for="firstName" class="form-label">First Name</label>
            <input id="firstName" type="text" class="form-control">
          </div>

          <div class="mb-3">
            <label for="lastName" class="form-label">Last Name</label>
            <input id="lastName" type="text" class="form-control">
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input id="email" type="email" class="form-control">
          </div>

          <div class="mb-3">
            <label for="comment" class="form-label">Comment</label>
            <textarea id="comment" class="form-control" rows="3"></textarea>
          </div>

          <button class="btn btn-primary" type="submit">Submit</button>
        </form>

        <div class="alert alert-info mt-4">
          <strong>Bootstrap form classes:</strong>
          <ul class="mb-0">
            <li><code>.form-control</code> — styles input fields</li>
            <li><code>.form-label</code> — styles labels</li>
            <li><code>.mb-3</code> — margin-bottom for spacing</li>
            <li><code>.form-select</code> — styles dropdowns</li>
            <li><code>.form-check</code> — styles checkboxes/radios</li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class BasicBootstrapFormComponent {}
