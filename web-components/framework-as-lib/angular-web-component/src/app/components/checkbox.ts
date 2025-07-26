import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  template: `
    <label class="checkbox-label">
      <input
        type="checkbox"
        [checked]="checked()"
        (change)="onCheckboxChange($event)"
        [disabled]="disabled()"
      />
      <span class="checkbox-custom"></span>
      <span class="checkbox-text">{{ label() }}</span>
    </label>
  `,
  styles: [
    `
    .checkbox-label {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      font-size: 16px;
      gap: 8px;
    }
    .checkbox-label input[type="checkbox"] {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    }
    .checkbox-custom {
      width: 18px;
      height: 18px;
      border: 2px solid #007bff;
      border-radius: 4px;
      background: #fff;
      display: inline-block;
      position: relative;
      transition: border-color 0.2s;
    }
    .checkbox-label input[type="checkbox"]:checked + .checkbox-custom {
      background: #007bff;
      border-color: #007bff;
    }
    .checkbox-custom::after {
      content: '';
      position: absolute;
      display: none;
      left: 4px;
      top: 0px;
      width: 6px;
      height: 12px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
    .checkbox-label input[type="checkbox"]:checked + .checkbox-custom::after {
      display: block;
    }
    .checkbox-text {
      margin-left: 4px;
    }
    .checkbox-label input[type="checkbox"]:disabled + .checkbox-custom {
      background: #e9ecef;
      border-color: #adb5bd;
      cursor: not-allowed;
    }
    .checkbox-label input[type="checkbox"]:disabled ~ .checkbox-text {
      color: #adb5bd;
      cursor: not-allowed;
    }
    `
  ],
})
export class CheckboxComponent {
  label = input<string>('Checkbox');
  checked = input<boolean>(false);
  disabled = input<boolean>(false);
  checkedChange = output<boolean>();

  onCheckboxChange(event: Event) {
    const inputEl = event.target as HTMLInputElement;
    this.checkedChange.emit(inputEl.checked);
  }
}
