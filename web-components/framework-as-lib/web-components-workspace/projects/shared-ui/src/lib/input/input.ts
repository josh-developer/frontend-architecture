import { Component, EventEmitter, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label>
      {{ label() }}
      <input [value]="value()" (input)="onInput($event)" />
    </label>
  `,
  styles: [`
    label {
      display: flex;
      flex-direction: column;
      font-family: sans-serif;
    }
    input {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  `],
})
export class Input {
  label = input<string>();
  value = input<string>();
  valueChange = output<string>();

  onInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.valueChange.emit(inputValue);
  }
}
