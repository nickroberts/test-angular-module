import { DemoAppComponentController } from './demoApp.controller';

export class DemoAppComponent implements ng.IComponentOptions {
  public controller: any;
  public template: string;
  constructor() {
    console.debug('DemoAppComponent loaded...');
    this.controller = DemoAppComponentController;
    this.template = `
      <div>
        <h2>DemoAppComponent</h2>
        <p>Nice...</p>
      </div>`;
  }
}
