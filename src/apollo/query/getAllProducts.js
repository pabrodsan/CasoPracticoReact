import { gql  } from '@apollo/client';

export const queryGetAllProducts = gql
    `query allProducts {
        allProducts {
            id
            productName
            price
          }
    }`
;