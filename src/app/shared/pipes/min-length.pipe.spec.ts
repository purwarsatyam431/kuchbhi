import { MinLengthPipe } from './min-length.pipe';

describe('MinLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new MinLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
