interface ProductDTO {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
}

export interface ProductInterface {
  code: string;
  error: string;
  productDTO: ProductDTO[];
}
