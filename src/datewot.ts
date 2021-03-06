export default class Datewot {
  private static daysAbr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  private static monthAbr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  private year: number;
  private month: number;
  private date: number;

  public constructor() {
    const now = new Date();
    this.year = now.getFullYear();
    this.month = now.getMonth();
    this.date = now.getDate();
  }

  /** Gets the 4-digit year */
  public getFullYear(): number {
    return this.year;
  }

  /** Gets the month, zero-indexed */
  public getMonth(): number {
    return this.month;
  }

  /** Gets the date of the month, one-indexed */
  public getDate(): number {
    return this.date;
  }

  /** Gets the day of the week, zero-indexed */
  public getDay(): number {
    return new Date(this.year, this.month, this.date).getDay();
  }

  /** Gets the number of days in the month */
  public getDaysInMonth(): number {
    switch (this.month) {
      case 1:
        return this.isLeapYear() ? 29 : 28;
      case 3:
      case 5:
      case 8:
      case 10:
        return 30;
      default:
        return 31;
    }
  }

  /** Calculates if the year is a leap year */
  public isLeapYear(): boolean {
    if (this.year % 4 > 0) {
      return false;
    }

    if (this.year % 100 === 0) {
      return this.year % 400 === 0;
    }

    return true;
  }

  /** Sets the year */
  public setFullYear(year: number, month?: number, date?: number): Datewot {
    this.year = year;

    if (month !== undefined) {
      this.setMonth(month);
    }

    if (date !== undefined) {
      this.setDate(date);
    }

    return this;
  }

  /** Sets the month, zero-indexed.
   * Will overflow year if greater than 11
   */
  public setMonth(month: number, date?: number): Datewot {
    this.month = month < 0 ? 12 - Math.abs(month % 12) : month % 12;
    this.year += Math.floor(month / 12);

    if (date !== undefined) {
      this.setDate(date);
    }

    return this;
  }

  /** Sets the date, one-indexed
   * Will overflow the month
   */
  public setDate(date: number): Datewot {
    if (date > 0) {
      let daysToAdd = date;
      while (daysToAdd > this.getDaysInMonth()) {
        daysToAdd -= this.getDaysInMonth();
        this.setMonth(this.getMonth() + 1);
      }
      this.date = daysToAdd;
    } else {
      this.setMonth(this.getMonth() - 1);
      let daysToRemove = Math.abs(date);
      while (daysToRemove > this.getDaysInMonth()) {
        daysToRemove -= this.getDaysInMonth();
        this.setMonth(this.getMonth() - 1);
      }
      this.date = this.getDaysInMonth() - daysToRemove;
    }

    return this;
  }

  /** Return date in english */
  public toDateString(): string {
    const day = Datewot.daysAbr[this.getDay()];
    const month = Datewot.monthAbr[this.getMonth()];

    return `${day} ${month} ${this.getDate()
      .toString()
      .padStart(2, '0')} ${this.getFullYear()}`;
  }

  /** Return date in english. Alias of `toDateString` */
  public toString(): string {
    return this.toDateString();
  }
}
