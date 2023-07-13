export interface BookDataType {
  id: any;
  slug: string;
  name: string;
  author: string;
  price: number;
  currentPrice: number;
  images: Image[];
  isInStock: boolean;
  category?: string;
  publication?: string;
  extraDetails?: string;
  description?: string;
  rating?: number;
}

export interface Image {
  url: string;
}

export interface Billboard {
  label: string;
  imageUrl: string;
}
