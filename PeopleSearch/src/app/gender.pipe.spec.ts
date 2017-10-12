import { GenderPipe } from './gender.pipe';


describe('GenderPipe', () => {
  let pipe: GenderPipe;

  beforeEach(() => {
    pipe = new GenderPipe();
  });
  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });
});
