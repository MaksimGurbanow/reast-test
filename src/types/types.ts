export interface DummyResponse {
  limit: number;
  total: number;
  skip: number;
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  brand: string;
  description: string;
  dimensions: Dimension;
  discountPercentage: number;
  minimumOrderQuantity: number;
  images: string[];
  price: number;
  rating: number;
  warantyInformation: string;
  thumbnail: string;
}

export interface Dimension {
  depth: number;
  height: number;
  width: number;
}
