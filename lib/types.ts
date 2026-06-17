export interface Product {
  id: string;
  title: string;
  name: string;
  description: string;
  availability: string;
  condition: string;
  price: number;
  salePrice: number | null;
  link: string;
  image: string;
  brand: string;
  material: string;
  colors: string;
  dimensions: string;
  whatsappLink: string;
  additionalImages: string[];
}
