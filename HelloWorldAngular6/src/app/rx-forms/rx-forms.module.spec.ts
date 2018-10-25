import { RxFormsModule } from './rx-forms.module';

describe('RxFormsModule', () => {
  let rxFormsModule: RxFormsModule;

  beforeEach(() => {
    rxFormsModule = new RxFormsModule();
  });

  it('should create an instance', () => {
    expect(rxFormsModule).toBeTruthy();
  });
});
