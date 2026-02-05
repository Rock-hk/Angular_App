import { Component } from '@angular/core';

// Basic Card with ng-content
@Component({
  selector: 'app-basic-card',
  template: `
    <div class="card mb-3">
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class BasicCardComponent {}

// Card with multiple ng-content slots
@Component({
  selector: 'app-panel',
  template: `
    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        <ng-content select=".panel-header"></ng-content>
      </div>
      <div class="card-body">
        <ng-content select=".panel-body"></ng-content>
      </div>
      <div class="card-footer">
        <ng-content select=".panel-footer"></ng-content>
      </div>
    </div>
  `
})
export class PanelComponent {}

// Modal component with named slots
@Component({
  selector: 'app-modal',
  template: `
    <div class="modal-backdrop" style="position: relative; background: rgba(0,0,0,0.1); padding: 20px; border-radius: 8px;">
      <div class="modal-content bg-white p-3 rounded shadow">
        <div class="modal-header border-bottom pb-2 mb-2">
          <ng-content select="[modal-title]"></ng-content>
        </div>
        <div class="modal-body">
          <ng-content select="[modal-body]"></ng-content>
        </div>
        <div class="modal-footer border-top pt-2 mt-2">
          <ng-content select="[modal-actions]"></ng-content>
        </div>
      </div>
    </div>
  `
})
export class ModalComponent {}

// Lesson 11: ngContent
@Component({
  selector: 'app-ng-content',
  imports: [BasicCardComponent, PanelComponent, ModalComponent],
  template: `
    <div class="card">
      <div class="card-header" style="background-color: #e83e8c; color: white;">
        <h5>Lesson 11: ng-content (Content Projection)</h5>
      </div>
      <div class="card-body">
        <p class="text-muted">Project content from parent into child component slots</p>

        <h6>1. Basic ng-content:</h6>
        <app-basic-card>
          <h5>Projected Title</h5>
          <p>This content is projected into the card!</p>
        </app-basic-card>

        <h6 class="mt-3">2. Multiple slots with select:</h6>
        <app-panel>
          <div class="panel-header">
            <strong>Panel Title</strong>
          </div>
          <div class="panel-body">
            <p>This goes in the body slot.</p>
            <p>Multiple elements can be projected.</p>
          </div>
          <div class="panel-footer">
            <button class="btn btn-sm btn-primary">Save</button>
            <button class="btn btn-sm btn-secondary ms-2">Cancel</button>
          </div>
        </app-panel>

        <h6 class="mt-3">3. Named slots with attributes:</h6>
        <app-modal>
          <h5 modal-title>Confirm Action</h5>
          <p modal-body>Are you sure you want to proceed?</p>
          <div modal-actions>
            <button class="btn btn-danger btn-sm">Yes, Delete</button>
            <button class="btn btn-secondary btn-sm ms-2">Cancel</button>
          </div>
        </app-modal>

        <div class="alert alert-info mt-4">
          <strong>Basic ng-content:</strong>
          <pre class="mb-2">&lt;ng-content&gt;&lt;/ng-content&gt;</pre>
          <strong>With selector:</strong>
          <pre class="mb-0">&lt;ng-content select=".header"&gt;&lt;/ng-content&gt;</pre>
        </div>
      </div>
    </div>
  `
})
export class NgContentComponent {}
