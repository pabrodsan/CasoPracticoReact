import { gql  } from '@apollo/client';

export const addProduct = gql
    `mutation addProduct($productName: String!, $price: String!) {
        addProduct (productName: $productName, price: $price) {
          id
          productName
          price
        }
    }`
;