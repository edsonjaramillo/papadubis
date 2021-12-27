import { GraphQLClient, gql } from 'graphql-request';

// Client Object

export const graphCMSClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string
);

// Queries

export const featuredProductsQuery = gql`
  query GetFeaturedProducts {
    products(where: { featured: true }) {
      id
      slug
      title
      price
      image {
        id
        url
      }
      imageDescription
    }
  }
`;

export const categoriesQuery = gql`
  query GetCategories {
    categories {
      id
      title
      slug
      products {
        id
        slug
        title
        price
        image {
          id
          url
        }
        imageDescription
      }
    }
  }
`;

export const slugsQuery = gql`
  query GetProductSlugs {
    products {
      slug
    }
  }
`;

export const productQuery = gql`
  query ProductDetail($slug: String!) {
    product(where: { slug: $slug }) {
      id
      title
      description
      price
      image {
        url
      }
      imageDescription
      recommendation {
        id
        slug
        title
        price
        image {
          id
          url
        }
        imageDescription
      }
    }
  }
`;

// Helper Functions

export const formatPrice = (price: number) => {
  return (price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

// Types

export interface SliderProductProps {
  id: string;
  slug: string;
  title: string;
  price: number;
  image: {
    id: string;
    url: string;
  };
  imageDescription: string;
}

export interface CategorySliderProps {
  id: string;
  title: string;
  slug: string;
  products: SliderProductProps[];
}

export interface ProductProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: {
    url: string;
  };
  imageDescription: string;
  recommendation: SliderProductProps[];
}
