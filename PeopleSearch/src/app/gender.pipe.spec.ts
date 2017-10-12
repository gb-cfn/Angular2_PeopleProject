import { GenderPipe } from './gender.pipe';

describe('GenderPipe', () => {
  let pipe: GenderPipe;

  beforeEach(() => {
   pipe = new GenderPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform F to Female', () => {
    expect(pipe.transform('F')).toBe('Female');
  });

  it('should transform f to Female', () => {
    expect(pipe.transform('f')).toBe('Female');
  });

  it('should transform M to Female', () => {
    expect(pipe.transform('M')).toBe('Male');
  });

  it('should transform m to Female', () => {
    expect(pipe.transform('m')).toBe('Male');
  });

  it('should transform X to Unknown', () => {
    expect(pipe.transform('X')).toBe('Unknown');
  });



});
