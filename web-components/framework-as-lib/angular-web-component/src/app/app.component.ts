import { Component } from '@angular/core';
import { ButtonComponent } from "./components/button";

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Web Component</h1>
    <app-button label="Click Me"></app-button>
  `,
  imports: [ButtonComponent]
})
export class AppComponent {}
