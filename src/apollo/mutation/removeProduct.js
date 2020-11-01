import { gql  } from '@apollo/client';

export const removeProduct = gql
    `mutation removeProduct($id: ID!) {
        addProduct (id:$id) {
            id
        }
    }`
;