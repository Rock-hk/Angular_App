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
    NgContainerComponent
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

  selectSection(section: number) {
    this.activeSection = section;
    this.activeLesson = 0;
  }

  selectLesson(lessonId: number) {
    this.activeLesson = lessonId;
  }
}
