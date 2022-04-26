import isError from '../src';

describe('isError', () => {
  it('should evaluates to false when value is null ', () => {
    expect(isError(null)).toBe(false);
  });

  it('should evaluates to false when value is undefined', () => {
    expect(isError(undefined)).toBe(false);
  });

  it('should evaluates to false when value is a number', () => {
    expect(isError(1)).toBe(false);
  });

  it('should evaluates to false when value is a string', () => {
    expect(isError('error')).toBe(false);
  });

  it('should evaluates to false when value is an object', () => {
    expect(isError({})).toBe(false);
  });

  it('should evaluates to false when value is an array', () => {
    expect(isError([1, 2])).toBe(false);
  });

  it('should evaluates to false when value is an object with properties message and stack defined', () => {
    expect(isError({ message: 'waw', stack: 'waw' })).toBe(false);
  });

  it('should evaluates to true when value throw new Error(\'error\')', () => {
    try {
      throw new Error('error');
    } catch (err) {
      expect(isError(err)).toBe(true);
    }
  });
});
