import { gql } from "@apollo/client";

// Subscription
export const GET_ALL_SUPPLIER = gql`
  subscription GET_ALL_SUPPLIER {
    supplier {
      id
      nama
    }
  }
`;

// Query
export const GET_ALL_SUPPLIER_QUERY = gql`
  query GET_ALL_SUPPLIER_QUERY {
    supplier {
      id
      nama
    }
  }
`;
export const GET_ALL_SUPPLIER_LIMIT = gql`
  query GET_ALL_SUPPLIER_LIMIT($limit: Int!) {
    supplier(limit: $limit) {
      id
      nama
    }
  }
`;
export const GET_SUPPLIER_BY_ID = gql`
  query GET_SUPPLIER_BY_ID($_eq: Int!) {
    supplier(where: { id: { _eq: $_eq } }) {
      id
      nama
    }
  }
`;
export const GET_SUPPLIER_BY_SEARCH = gql`
  query GET_SUPPLIER_BY_SEARCH($_iregex: String!, $limit: Int!) {
    supplier(where: { nama: { _iregex: $_iregex } }, limit: $limit) {
      id
      nama
    }
  }
`;

// Mutation
export const ADD_SUPPLIER = gql`
  mutation ADD_SUPPLIER($object: supplier_insert_input!) {
    insert_supplier_one(object: $object) {
      id
      nama
    }
  }
`;
export const DELETE_SUPPLIER = gql`
  mutation DELETE_SUPPLIER($id: Int!) {
    delete_supplier_by_pk(id: $id) {
      id
      nama
    }
  }
`;
export const EDIT_SUPPLIER = gql`
  mutation EDIT_SUPPLIER($id: Int!, $nama: String!) {
    update_supplier_by_pk(pk_columns: { id: $id }, _set: { nama: $nama }) {
      id
      nama
    }
  }
`;
