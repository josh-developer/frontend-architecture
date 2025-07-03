import { createCustomElement } from '@angular/elements';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom, Injector, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Button } from './lib/button/button';
import { Input } from './lib/input/input';

export async function registerUiElements() {
  await bootstrapApplication(DummyComponent, {
    providers: [importProvidersFrom(CommonModule)],
  });

  const injector = inject(Injector);

  customElements.define('my-button', createCustomElement(Button, { injector }));
  customElements.define('my-input', createCustomElement(Input, { injector }));
}

// Required dummy component for bootstrapping
import { Component } from '@angular/core';
@Component({
  standalone: true,
  template: '',
})
class DummyComponent {}
