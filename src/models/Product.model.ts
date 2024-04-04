export default class Product {
  public readonly id: string;

  constructor(
    public name: string,
    public price: number,
    public description: string,
    public published: boolean,
    public created_at: string,
  ) {
    this.id = Date.now().toString();
  }
}
