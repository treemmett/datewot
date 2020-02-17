export default class Datewot {
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
  public setFullYear(year: number): Datewot {
    this.year = year;
    return this;
  }

  /** Sets the month, zero-indexed.
   * Will overflow year if greater than 11
   */
  public setMonth(month: number): Datewot {
    this.month = month % 12;
    this.year += Math.floor(month / 12);
    return this;
  }
}
