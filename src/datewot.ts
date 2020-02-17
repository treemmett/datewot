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

  public getFullYear(): number {
    return this.year;
  }

  public getMonth(): number {
    return this.month;
  }

  public getDate(): number {
    return this.date;
  }
}
