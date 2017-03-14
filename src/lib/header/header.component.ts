import * as angular from 'angular';
import { HeaderController } from './header.controller';

class HeaderComponent {
  public controller: any;
  public template: string;

  constructor() {
    this.controller = HeaderController;
    this.template = `
      <header>
        <div class="container">
          <div class="row">
              <div class="col">
                Header
              </div>
            </div>
          </div>
      </header>`;
    console.debug('HeaderComponent loaded...');
  }
}

export const testAngularHeaderModule = angular
  .module('testAngularModule')
  .component('tamHeader', new HeaderComponent());
