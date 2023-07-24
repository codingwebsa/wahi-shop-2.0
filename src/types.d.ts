export interface BookDataType {
  id: string
  slug: string
  name: string
  englishName?: string
  price: number
  currentPrice: number
  rating?: number
  views: number
  isInStock: boolean
  isFeatured: boolean
  pages?: number
  language?: string
  details?: string
  extraDetails?: string
  extraAuthors?: string
  authorId: string
  categoryId: string
  publicationId: string
  createdAt: string
  updatedAt: string
  images: Image[]

  author: Author
  category?: Category
  publication?: Publication
}

export interface Image {
  id: string
  url: string
  productId?: string
  createdAt: string
  updatedAt: string
}

export interface Category {
  id: string
  slug: string
  name: string
  createdAt: string
  updatedAt: string
}

export interface Author {
  id: string
  slug: string
  name: string
  imageUrl?: string
  createdAt: string
  updatedAt: string
}

export interface Publication {
  id: string
  slug: string
  name: string
  imageUrl?: string
  createdAt: string
  updatedAt: string
}
export interface Billboard {
  label: string
  imageUrl: string
}
