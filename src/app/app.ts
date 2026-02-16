import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Section 1: Displaying Data and Handling Events
import { PropertyBindingComponent } from './lessons/property-binding.component';
import { AttributeBindingComponent } from './lessons/attribute-binding.component';
import { ClassBindingComponent } from './lessons/class-binding.component';
import { StyleBindingComponent } from './lessons/style-binding.component';
import { EventBindingComponent } from './lessons/event-binding.component';
import { EventFilteringComponent } from './lessons/event-filtering.component';
import { TemplateVariablesComponent } from './lessons/template-variables.component';
import { TwoWayBindingComponent } from './lessons/two-way-binding.component';
import { PipesComponent } from './lessons/pipes.component';
import { CustomPipesComponent } from './lessons/custom-pipes.component';

// Section 2: Building Reusable Components
import { ComponentApiComponent } from './lessons/component-api.component';
import { InputPropertiesComponent } from './lessons/input-properties.component';
import { AliasingInputComponent } from './lessons/aliasing-input.component';
import { OutputPropertiesComponent } from './lessons/output-properties.component';
import { PassingEventDataComponent } from './lessons/passing-event-data.component';
import { AliasingOutputComponent } from './lessons/aliasing-output.component';
import { TemplatesComponent } from './lessons/templates.component';
import { StylesComponent } from './lessons/styles.component';
import { ViewEncapsulationComponent } from './lessons/view-encapsulation.component';
import { NgContentComponent } from './lessons/ng-content.component';
import { NgContainerComponent } from './lessons/ng-container.component';

// Section 3: Directives
import { NgIfComponent } from './lessons/ng-if.component';
import { HiddenPropertyComponent } from './lessons/hidden-property.component';
import { NgSwitchCaseComponent } from './lessons/ng-switch-case.component';
import { NgForComponent } from './lessons/ng-for.component';
import { NgForChangeDetectionComponent } from './lessons/ng-for-change-detection.component';
import { NgForTrackByComponent } from './lessons/ng-for-track-by.component';
import { LeadingAsteriskComponent } from './lessons/leading-asterisk.component';
import { NgClassComponent } from './lessons/ng-class.component';
import { NgStyleComponent } from './lessons/ng-style.component';
import { SafeTraversalComponent } from './lessons/safe-traversal.component';
import { CustomDirectivesComponent } from './lessons/custom-directives.component';

// Section 4: Template-driven Forms
import { BasicBootstrapFormComponent } from './lessons/basic-bootstrap-form.component';
import { TypesOfFormsComponent } from './lessons/types-of-forms.component';
import { NgModelComponent } from './lessons/ng-model.component';
import { AddingValidationComponent } from './lessons/adding-validation.component';
import { SpecificValidationErrorsComponent } from './lessons/specific-validation-errors.component';
import { StylingInvalidInputsComponent } from './lessons/styling-invalid-inputs.component';
import { CleanerTemplatesComponent } from './lessons/cleaner-templates.component';
import { NgFormComponent } from './lessons/ng-form.component';
import { NgModelGroupComponent } from './lessons/ng-model-group.component';
import { ControlClassesDirectivesComponent } from './lessons/control-classes-directives.component';
import { DisablingSubmitComponent } from './lessons/disabling-submit.component';
import { WorkingWithCheckboxesComponent } from './lessons/working-with-checkboxes.component';
import { WorkingWithDropdownsComponent } from './lessons/working-with-dropdowns.component';
import { WorkingWithRadioButtonsComponent } from './lessons/working-with-radio-buttons.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    // Section 1
    PropertyBindingComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    EventFilteringComponent,
    TemplateVariablesComponent,
    TwoWayBindingComponent,
    PipesComponent,
    CustomPipesComponent,
    // Section 2
    ComponentApiComponent,
    InputPropertiesComponent,
    AliasingInputComponent,
    OutputPropertiesComponent,
    PassingEventDataComponent,
    AliasingOutputComponent,
    TemplatesComponent,
    StylesComponent,
    ViewEncapsulationComponent,
    NgContentComponent,
    NgContainerComponent,
    // Section 3
    NgIfComponent,
    HiddenPropertyComponent,
    NgSwitchCaseComponent,
    NgForComponent,
    NgForChangeDetectionComponent,
    NgForTrackByComponent,
    LeadingAsteriskComponent,
    NgClassComponent,
    NgStyleComponent,
    SafeTraversalComponent,
    CustomDirectivesComponent,
    // Section 4
    BasicBootstrapFormComponent,
    TypesOfFormsComponent,
    NgModelComponent,
    AddingValidationComponent,
    SpecificValidationErrorsComponent,
    StylingInvalidInputsComponent,
    CleanerTemplatesComponent,
    NgFormComponent,
    NgModelGroupComponent,
    ControlClassesDirectivesComponent,
    DisablingSubmitComponent,
    WorkingWithCheckboxesComponent,
    WorkingWithDropdownsComponent,
    WorkingWithRadioButtonsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  activeSection = 1;
  activeLesson = 0;

  section1Lessons = [
    { id: 2, name: 'Property Binding' },
    { id: 3, name: 'Attribute Binding' },
    { id: 5, name: 'Class Binding' },
    { id: 6, name: 'Style Binding' },
    { id: 7, name: 'Event Binding' },
    { id: 8, name: 'Event Filtering' },
    { id: 9, name: 'Template Variables' },
    { id: 10, name: 'Two-way Binding' },
    { id: 11, name: 'Pipes' },
    { id: 12, name: 'Custom Pipes' }
  ];

  section2Lessons = [
    { id: 2, name: 'Component API' },
    { id: 3, name: 'Input Properties' },
    { id: 4, name: 'Aliasing Input Properties' },
    { id: 5, name: 'Output Properties' },
    { id: 6, name: 'Passing Event Data' },
    { id: 7, name: 'Aliasing Output Properties' },
    { id: 8, name: 'Templates' },
    { id: 9, name: 'Styles' },
    { id: 10, name: 'View Encapsulation' },
    { id: 11, name: 'ngContent' },
    { id: 12, name: 'ngContainer' }
  ];

  section3Lessons = [
    { id: 2, name: 'ngIf' },
    { id: 3, name: 'Hidden Property' },
    { id: 4, name: 'ngSwitchCase' },
    { id: 5, name: 'ngFor' },
    { id: 6, name: 'ngFor and Change Detection' },
    { id: 7, name: 'ngFor and TrackBy' },
    { id: 8, name: 'The Leading Asterisk' },
    { id: 9, name: 'ngClass' },
    { id: 10, name: 'ngStyle' },
    { id: 11, name: 'Safe Traversal Operator' },
    { id: 12, name: 'Creating Custom Directives' }
  ];

  section4Lessons = [
    { id: 2, name: 'Building a Basic Bootstrap Form' },
    { id: 3, name: 'Types of Forms' },
    { id: 4, name: 'ngModel' },
    { id: 5, name: 'Adding Validation' },
    { id: 6, name: 'Specific Validation Errors' },
    { id: 7, name: 'Styling Invalid Input Fields' },
    { id: 8, name: 'Cleaner Templates' },
    { id: 9, name: 'ngForm' },
    { id: 10, name: 'ngModelGroup' },
    { id: 11, name: 'Control Classes and Directives' },
    { id: 12, name: 'Disabling the Submit Button' },
    { id: 13, name: 'Working with Check Boxes' },
    { id: 14, name: 'Working with Drop-down Lists' },
    { id: 15, name: 'Working with Radio Buttons' }
  ];

  selectSection(section: number) {
    this.activeSection = section;
    this.activeLesson = 0;
  }

  selectLesson(lessonId: number) {
    this.activeLesson = lessonId;
  }
}
