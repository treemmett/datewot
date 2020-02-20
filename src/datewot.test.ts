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

  it('should return the day of the week', () => {
    date.setFullYear(2020);
    date.setMonth(1);
    date.setDate(5);
    expect(date.getDay()).toBe(3);

    date.setFullYear(2004);
    date.setMonth(6);
    date.setDate(18);
    expect(date.getDay()).toBe(0);
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

  it('should set the month and overflow the year multiple times', () => {
    date
      .setFullYear(2001)
      .setMonth(58)
      .setDate(1);

    expect(date.getFullYear()).toBe(2005);
    expect(date.getMonth()).toBe(10);
  });

  it('should set the month in an opposite direction', () => {
    date.setFullYear(2020).setMonth(5);

    date.setMonth(-1);
    expect(date.getMonth()).toBe(11);
    expect(date.getFullYear()).toBe(2019);

    date.setMonth(-8);
    expect(date.getMonth()).toBe(4);
    expect(date.getFullYear()).toBe(2018);

    date.setMonth(-54);
    expect(date.getMonth()).toBe(6);
    expect(date.getFullYear()).toBe(2013);
  });

  it('should set the month in an opposite direction and overflow the year multiple times', () => {
    date.setFullYear(2020).setMonth(5);
    date.setMonth(-29);

    expect(date.getMonth()).toBe(7);
    expect(date.getFullYear()).toBe(2017);
  });

  it('should set the date', () => {
    date
      .setFullYear(2000)
      .setMonth(0)
      .setDate(1);

    expect(date.getDate()).toBe(1);
    expect(date.getMonth()).toBe(0);

    date
      .setFullYear(2000)
      .setMonth(0)
      .setDate(31);

    expect(date.getDate()).toBe(31);
    expect(date.getMonth()).toBe(0);
  });

  it('should set the date and overflow the month', () => {
    date
      .setFullYear(2000)
      .setMonth(0)
      .setDate(32);

    expect(date.getDate()).toBe(1);
    expect(date.getMonth()).toBe(1);
  });

  it('should set the date and overflow the month multiple times', () => {
    date
      .setFullYear(2001)
      .setMonth(0)
      .setDate(116);

    expect(date.getDate()).toBe(26);
    expect(date.getMonth()).toBe(3);
  });

  it('should set the date and overflow the month and year', () => {
    date
      .setFullYear(2001)
      .setMonth(0)
      .setDate(587);

    expect(date.getDate()).toBe(10);
    expect(date.getMonth()).toBe(7);
    expect(date.getFullYear()).toBe(2002);
  });

  it('should set the date in the opposite direction and overflow the month', () => {
    date.setMonth(5);
    date.setDate(-1);

    expect(date.getMonth()).toBe(4);
    expect(date.getDate()).toBe(30);
  });

  it('should set the date in the opposite direction and overflow the month and year', () => {
    date.setFullYear(2020);
    date.setMonth(3);
    date.setDate(-567);

    expect(date.getFullYear()).toBe(2018);
    expect(date.getMonth()).toBe(8);
    expect(date.getDate()).toBe(11);

    date.setDate(-4919);
    expect(date.getFullYear()).toBe(2005);
    expect(date.getMonth()).toBe(2);
    expect(date.getDate()).toBe(13);
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

describe('datewot translations', () => {
  it('should return the correct date string', () => {
    expect(
      date
        .setFullYear(1993)
        .setMonth(6)
        .setDate(28)
        .toDateString()
    ).toBe('Wed Jul 28 1993');

    expect(
      date
        .setFullYear(2018)
        .setMonth(7)
        .setDate(3)
        .toDateString()
    ).toBe('Fri Aug 03 2018');

    expect(
      date
        .setFullYear(2020)
        .setMonth(1)
        .setDate(18)
        .toDateString()
    ).toBe('Tue Feb 18 2020');
  });

  it('should alias `toString`', () => {
    date
      .setFullYear(1993)
      .setMonth(6)
      .setDate(28);

    expect(date.toString()).toBe('Wed Jul 28 1993');

    date
      .setFullYear(2016)
      .setMonth(4)
      .setDate(23);

    expect(date.toString()).toBe(date.toDateString());
  });
});
