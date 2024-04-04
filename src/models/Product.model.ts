export class Product {
  constructor(
    public name: string,
    public price: number,
    public description: string,
    public published: boolean,
    public created_at: string,
  ) {}
}
