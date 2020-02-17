import Datewot from './datewot';

let date: Datewot;

beforeEach(() => {
  date = new Datewot();
});

describe('datewot getters', () => {
  it('should have the correct year', () => {
    expect(date.getFullYear()).toBe(new Date().getFullYear());
  });

  it('should have the correct month', () => {
    expect(date.getMonth()).toBe(new Date().getMonth());
  });

  it('should have the correct date', () => {
    expect(date.getDate()).toBe(new Date().getDate());
  });

  it('should have the correct days in the month', () => {
    expect(date.setMonth(0).getDaysInMonth()).toBe(31);
    expect(
      date
        .setFullYear(2019)
        .setMonth(1)
        .getDaysInMonth()
    ).toBe(28);
    expect(
      date
        .setFullYear(2020)
        .setMonth(1)
        .getDaysInMonth()
    ).toBe(29);
    expect(date.setMonth(2).getDaysInMonth()).toBe(31);
    expect(date.setMonth(3).getDaysInMonth()).toBe(30);
    expect(date.setMonth(4).getDaysInMonth()).toBe(31);
    expect(date.setMonth(5).getDaysInMonth()).toBe(30);
    expect(date.setMonth(6).getDaysInMonth()).toBe(31);
    expect(date.setMonth(7).getDaysInMonth()).toBe(31);
    expect(date.setMonth(8).getDaysInMonth()).toBe(30);
    expect(date.setMonth(9).getDaysInMonth()).toBe(31);
    expect(date.setMonth(10).getDaysInMonth()).toBe(30);
    expect(date.setMonth(11).getDaysInMonth()).toBe(31);
    expect(date.setMonth(12).getDaysInMonth()).toBe(31);
    expect(date.setMonth(14).getDaysInMonth()).toBe(31);
    expect(date.setMonth(15).getDaysInMonth()).toBe(30);
  });
});

describe('datewot setters', () => {
  it('should set the year', () => {
    date.setFullYear(2012);
    expect(date.getFullYear()).toBe(2012);
  });

  it('should set the month', () => {
    date.setMonth(3);
    expect(date.getMonth()).toBe(3);
  });

  it('should set the month and overflow the year', () => {
    date.setFullYear(2012);
    date.setMonth(15);
    expect(date.getFullYear()).toBe(2013);
    expect(date.getMonth()).toBe(3);
  });
});

describe('leap year determination', () => {
  it('should return true if the year is a leap year', () => {
    const leapYears = [2000, 2004, 2008, 2012, 2016, 2020, 2024, 2064, 2400];

    leapYears.forEach(year => {
      date.setFullYear(year);
      expect(date.isLeapYear()).toBe(true);
    });
  });

  it('should return false if the year is not a leap year', () => {
    const notLeapYears = [1800, 2001, 2100, 2011, 2010, 2014, 2015, 2193, 7501];

    notLeapYears.forEach(year => {
      date.setFullYear(year);
      expect(date.isLeapYear()).toBe(false);
    });
  });
});
