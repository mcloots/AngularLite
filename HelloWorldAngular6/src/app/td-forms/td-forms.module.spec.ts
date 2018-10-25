import { TdFormsModule } from './td-forms.module';

describe('TdFormsModule', () => {
  let tdFormsModule: TdFormsModule;

  beforeEach(() => {
    tdFormsModule = new TdFormsModule();
  });

  it('should create an instance', () => {
    expect(tdFormsModule).toBeTruthy();
  });
});
