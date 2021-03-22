export interface ProductModelServer {
  id: number;
  name: string;
  category: String;
  description: String;
  imagePath: string;
  price: number;
  quantity: number;
  images: String;
}


export interface serverResponse  {
  count: number;
  products: ProductModelServer[]
};
