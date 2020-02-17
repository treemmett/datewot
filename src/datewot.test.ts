import Datewot from './datewot';

describe('datewot class', () => {
  it('should have the correct year', () => {
    const date = new Datewot();

    expect(date.getFullYear()).toBe(new Date().getFullYear());
  });

  it('should have the correct month', () => {
    const date = new Datewot();

    expect(date.getMonth()).toBe(new Date().getMonth());
  });

  it('should have the correct date', () => {
    const date = new Datewot();

    expect(date.getDate()).toBe(new Date().getDate());
  });
});
