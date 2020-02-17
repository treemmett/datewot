import Datewot from './datewot';

describe('datewot getters', () => {
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

describe('datewot setters', () => {
  it('should set the year', () => {
    const date = new Datewot();
    date.setFullYear(2012);
    expect(date.getFullYear()).toBe(2012);
  });

  it('should set the month', () => {
    const date = new Datewot();
    date.setMonth(3);
    expect(date.getMonth()).toBe(3);
  });

  it('should set the month and overflow the year', () => {
    const date = new Datewot();
    date.setFullYear(2012);
    date.setMonth(15);
    expect(date.getFullYear()).toBe(2013);
    expect(date.getMonth()).toBe(3);
  });
});
