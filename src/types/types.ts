export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IDBProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  published: boolean;
  created_at: string;
}
