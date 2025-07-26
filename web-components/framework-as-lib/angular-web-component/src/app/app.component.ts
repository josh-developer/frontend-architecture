import { Component } from '@angular/core';
import { ButtonComponent } from "./components/button";
import { CheckboxComponent } from "./components/checkbox";

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Web Component</h1>
    <app-button label="Click Me"></app-button>
    <app-checkbox label="Checkbox"></app-checkbox>
  `,
  standalone: true,
  imports: [ButtonComponent, CheckboxComponent]
})
export class AppComponent {}
