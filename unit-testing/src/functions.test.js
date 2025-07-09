import { capitalizeFirst } from './functions.js';

describe('capitalizeFirst()', () => {
  it('should capitalize the first letter of the string', () => {
    expect(capitalizeFirst('hello')).toBe('Hello');
    expect(capitalizeFirst('world')).toBe('World');
  });

  it('should return empty string if input is empty', () => {
    expect(capitalizeFirst('')).toBe('');
  });
});
