import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="onButtonClick()">{{ label() }}</button>
  `,
  standalone: true,  
  styles: [
    `
    button {
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: #0056b3;
      }
    }
    `
  ]

})
export class ButtonComponent {
  label = input<string>('Click me');
  click = output<void>();

  onButtonClick() {
    this.click.emit();
  }
}