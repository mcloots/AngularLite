import { ObservableModule } from './observable.module';

describe('ObservableModule', () => {
  let observableModule: ObservableModule;

  beforeEach(() => {
    observableModule = new ObservableModule();
  });

  it('should create an instance', () => {
    expect(observableModule).toBeTruthy();
  });
});
