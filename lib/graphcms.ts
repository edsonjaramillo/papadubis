import { GraphQLClient, gql } from 'graphql-request';

// Client Object

export const graphCMSClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string
);

// Queries

export const featuredProductsQuery = gql`
  query GetFeaturedProducts {
    products(where: { featured: true }, orderBy: title_ASC) {
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
    categories(orderBy: title_ASC) {
      id
      title
      slug
      products(orderBy: price_ASC) {
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

export const LogoBlur =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVQYlVWPPW6FMBCEfaDY3jdeO44RIhKyUiBEQffKWIgaOg7AASi4DXcj8nvkb7qZb6TZFeJbKaVt21JK8zyLvzrPs23boigY8M5VVdV13S9umsYANyJSmpQCAYTAfOHgvZaac+OmXhSAbOmB+75/dY4UkSIDGGMY7NgxIKUUb5yNY2ZiEBiw1jpmPPFHCAx+TlpC7oG11DHGa7uua8s5IkUgetzvx3G88LIsn/d7WZbe+eBDfI/DMPx7XQhxHMc0Teu67vv+k34BSzg7G2k6gsAAAAAASUVORK5CYII=';

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
  blur: string;
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
  blur: string;
}
