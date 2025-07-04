import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <div class="input-container">
      <label *ngIf="label()" class="input-label">{{ label() }}</label>
      <input
        [type]="type()"
        [placeholder]="placeholder()"
        [value]="value()"
        (input)="onInput($event)"
        (focus)="focus.emit()"
        (blur)="blur.emit()"
        class="input-field"
        [class.error]="hasError()"
      />
      <span *ngIf="hasError()" class="error-message">{{ errorMessage() }}</span>
    </div>
  `,
  standalone: true,
  styles: [
    `
    .input-container {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;      
    }

    .input-label {
      font-size: 14px;
      font-weight: 500;
      color: #374151;
      margin-bottom: 2px;
    }

    .input-field {
      padding: 12px 16px;
      border: 2px solid #d1d5db;
      border-radius: 8px;
      font-size: 16px;
      font-family: inherit;
      background-color:rgb(230, 226, 226);
      color: #111827;
      transition: all 0.2s ease-in-out;
      outline: none;
      width: 100%;
      box-sizing: border-box;

      &:focus {
        border-color:rgb(0, 4, 229);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      }

      &:hover:not(:focus) {
        border-color: #9ca3af;
      }

      &.error {
        border-color: #ef4444;
        
        &:focus {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }
      }

      &::placeholder {
        color: #9ca3af;
      }

      &:disabled {
        background-color: #f9fafb;
        color: #6b7280;
        cursor: not-allowed;
        border-color: #e5e7eb;
      }
    }

    .error-message {
      font-size: 12px;
      color: #ef4444;
      margin-top: 2px;
    }
    `
  ]
})
export class InputComponent {
  label = input<string>('');
  type = input<'text' | 'email' | 'password' | 'number'>('text');
  placeholder = input<string>('');
  value = input<string>('');
  errorMessage = input<string>('');
  hasError = input<boolean>(false);

  valueChange = output<string>();
  focus = output<void>();
  blur = output<void>();

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
