import { FirebaseTestModule } from './firebase-test.module';

describe('FirebaseTestModule', () => {
  let firebaseTestModule: FirebaseTestModule;

  beforeEach(() => {
    firebaseTestModule = new FirebaseTestModule();
  });

  it('should create an instance', () => {
    expect(firebaseTestModule).toBeTruthy();
  });
});
