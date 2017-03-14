import * as angular from 'angular';
import { FooterController } from './footer.controller';

class FooterComponent {
  public controller: any;
  public template: string;

  constructor() {
    this.controller = FooterController;
    this.template = `
      <footer>
        <div class="container">
          <div class="row">
            <div class="col">
              Footer
            </div>
          </div>
        </div>
      </footer>`;
    console.debug('FooterComponent loaded...');
  }
}

export const testAngularFooterModule = angular
  .module('testAngularModule')
  .component('tamFooter', new FooterComponent());
