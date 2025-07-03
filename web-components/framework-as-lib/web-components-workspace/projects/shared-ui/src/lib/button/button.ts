import { Component, input, output } from '@angular/core';

@Component({
  selector: 'lib-button',
  standalone: true,

  template: `
    <button (click)="onClick.emit($event)">{{ label() }}</button>
  `,
  styles: [
    `
      button {
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
      }
    `
  ]
})
export class Button {
  label = input<string>();
  onClick = output<MouseEvent>();
}
