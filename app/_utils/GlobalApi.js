import { gql, request } from 'graphql-request';

const MASTER_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;


const GetCategory = async () => {
  const query = gql`
    query Categories {
        categories(first: 50) {
          id
          slug
          name
          icon {
            url
          }
        }
      }
    `

  const result = await request(MASTER_URL, query);
  return result;
}


const GetBuisness = async (category) => {
  const query = gql`
  query MyQuery {
    restaurants(where: {categories_some: {slug: "`+ category + `"}}) {
      aPropos
      adresse
      banniere {
        url
      }
      categories {
        name
      }
      id
      name
      restoType
      slug
      horaire
    }
  }  
  `
  const result = await request(MASTER_URL, query);
  return result;
}

const GetBuisnessDetail = async (buisnessSlug) => {
  const query = gql`
  query RestaurantDetail {
    restaurant(where: {slug: "`+buisnessSlug+`"}) {
      aPropos
      adresse
      banniere {
        url
      }
      categories {
        name
      }
      id
      name
      restoType
      slug
      horaire
      menu {
        ... on Menu {
          id
          name
          menuItem {
            ... on MenuItem {
              id
              name
              description
              price
              productImage {
                url
              }
            }
          }
        }
      }
    }
  }  
  `
  const result = await request(MASTER_URL, query);
  return result;
}

export default {
  GetCategory,
  GetBuisness,
  GetBuisnessDetail
}