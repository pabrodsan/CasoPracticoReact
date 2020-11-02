import { gql  } from '@apollo/client';

export const removeProduct = gql
    `mutation removeProduct($id: ID!) {
        removeProduct (id:$id) {
            id
        }
    }`
;