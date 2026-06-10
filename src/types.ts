export interface Product {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  features: string[];
  iconName: string;
  meta: string;
  linkText: string;
  linkUrl?: string;
  inDevelopment?: boolean;
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  message: string;
}
