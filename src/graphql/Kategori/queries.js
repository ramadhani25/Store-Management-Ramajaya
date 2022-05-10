import { gql } from "@apollo/client";

// Subsricption
export const GET_ALL_KATEGORI = gql`
  subscription GET_ALL_KATEGORI {
    kategori {
      id
      nama
    }
  }
`;

// Query
export const GET_ALL_KATEGORI_QUERY = gql`
  query GET_ALL_KATEGORI_QUERY {
    kategori {
      id
      nama
    }
  }
`;
export const GET_ALL_KATEGORI_LIMIT = gql`
  query GET_ALL_KATEGORI_LIMIT($limit: Int!) {
    kategori(limit: $limit) {
      id
      nama
    }
  }
`;
export const GET_KATEGORI_BY_ID = gql`
  query GET_KATEGORI_BY_ID($_eq: Int!) {
    kategori(where: { id: { _eq: $_eq } }) {
      id
      nama
    }
  }
`;
export const GET_KATEGORI_BY_SEARCH = gql`
  query GET_KATEGORI_BY_SEARCH($_iregex: String!, $limit: Int!) {
    kategori(where: { nama: { _iregex: $_iregex } }, limit: $limit) {
      id
      nama
    }
  }
`;

// Mutation
export const ADD_KATEGORI = gql`
  mutation ADD_KATEGORI($object: kategori_insert_input!) {
    insert_kategori_one(object: $object) {
      id
      nama
    }
  }
`;
export const DELETE_KATEGORI = gql`
  mutation DELETE_KATEGORI($id: Int!) {
    delete_kategori_by_pk(id: $id) {
      id
      nama
    }
  }
`;
export const EDIT_KATEGORI = gql`
  mutation EDIT_KATEGORI($id: Int!, $nama: String!) {
    update_kategori_by_pk(pk_columns: { id: $id }, _set: { nama: $nama }) {
      id
      nama
    }
  }
`;
