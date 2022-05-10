import { gql } from "@apollo/client";

// Subsricption
export const GET_ALL_CUSTOMER = gql`
  subscription GET_ALL_CUSTOMER {
    customer {
      id
      nama
      created_at
    }
  }
`;

// Query
export const GET_ALL_CUSTOMER_LIMIT = gql`
  query GET_ALL_CUSTOMER_LIMIT($limit: Int!) {
    customer(limit: $limit) {
      id
      nama
    }
  }
`;
export const GET_CUSTOMER_BY_ID = gql`
  query GET_CUSTOMER_BY_ID($_eq: Int!) {
    customer(where: { id: { _eq: $_eq } }) {
      id
      nama
    }
  }
`;
export const GET_CUSTOMER_BY_SEARCH = gql`
  query GET_CUSTOMER_BY_SEARCH($_iregex: String!, $limit: Int!) {
    customer(where: { nama: { _iregex: $_iregex } }, limit: $limit) {
      id
      nama
    }
  }
`;

// Mutation
export const ADD_CUSTOMER = gql`
  mutation ADD_CUSTOMER($object: customer_insert_input!) {
    insert_customer_one(object: $object) {
      id
      nama
    }
  }
`;
export const DELETE_CUSTOMER = gql`
  mutation DELETE_CUSTOMER($id: Int!) {
    delete_customer_by_pk(id: $id) {
      id
      nama
    }
  }
`;
export const EDIT_CUSTOMER = gql`
  mutation EDIT_CUSTOMER($id: Int!, $nama: String!) {
    update_customer_by_pk(pk_columns: { id: $id }, _set: { nama: $nama }) {
      id
      nama
    }
  }
`;
