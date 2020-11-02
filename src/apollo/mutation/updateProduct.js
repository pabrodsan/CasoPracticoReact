import { gql  } from '@apollo/client';

export const updateProduct = gql
    `mutation updateProduct($id: ID!, $productName: String!, $price: String!) {
        updateProduct (id: $id, productName: $productName, price: $price) {
          id
          productName
          price
        }
    }`
;