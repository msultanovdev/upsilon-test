export default class Product {
  public readonly id: string;

  constructor(
    public name: string,
    public price: number,
    public description: string,
    public published: boolean,
    public created_at: number,
  ) {
    this.id = Date.now().toString();
  }
}
