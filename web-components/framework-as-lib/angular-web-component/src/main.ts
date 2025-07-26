import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { ButtonComponent } from './app/components/button';
import { InputComponent } from './app/components/input';
import { AppComponent } from './app/app.component';
import { Injector } from '@angular/core';
import { CheckboxComponent } from './app/components/checkbox';



(async () => {
  const app = await createApplication({
    providers: [],
  });

  const webComponents = [
    [ButtonComponent, 'my-button'],
    [InputComponent, 'my-input'],
    [AppComponent, 'app-root'],
    [CheckboxComponent, 'my-checkbox'], 
  ];

  webComponents.forEach(([component, name]: any) => {
    defineCustomElement(component, name, app.injector);
  });
})();


function defineCustomElement(component: any, name: string, injector: Injector) {
  const element = createCustomElement(component, {
    injector: injector
  });

  customElements.define(name, element);
}