import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { ButtonComponent } from './app/components/button';
import { InputComponent } from './app/components/input';
import { AppComponent } from './app/app.component';



(async () => {
  const app = await createApplication({
    providers: [],
  });

  const buttonElement = createCustomElement(ButtonComponent, {
    injector: app.injector
  });

  customElements.define('my-button', buttonElement);

  const inputElement = createCustomElement(InputComponent, {
    injector: app.injector,
  });

  customElements.define('my-input', inputElement);

  const appElement = createCustomElement(AppComponent, {
    injector: app.injector
  });

  customElements.define('app-root', appElement);

})();