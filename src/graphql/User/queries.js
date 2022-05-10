import { gql } from "@apollo/client";

// Subscription
export const GET_ALL_USER = gql`
  subscription GET_ALL_USER {
    user {
      id
      username
      password
      nama
      tipe
    }
  }
`;

// Query
export const GET_LOGIN_USER = gql`
  query GET_LOGIN_USER($username: String!, $password: String!) {
    user(
      where: { password: { _eq: $password }, username: { _eq: $username } }
    ) {
      id
      nama
      tipe
    }
  }
`;
export const GET_ALL_USER_LIMIT = gql`
  query GET_ALL_USER_LIMIT($limit: Int!) {
    user(limit: $limit) {
      id
      username
      password
      nama
      tipe
    }
  }
`;
export const GET_USER_BY_ID = gql`
  query GET_USER_BY_ID($_eq: Int!) {
    user(where: { id: { _eq: $_eq } }) {
      id
      username
      password
      nama
      tipe
      image
    }
  }
`;
export const GET_USER_BY_SEARCH = gql`
  query GET_USER_BY_SEARCH($_iregex: String!, $limit: Int!) {
    user(where: { nama: { _iregex: $_iregex } }, limit: $limit) {
      id
      username
      password
      nama
      tipe
    }
  }
`;

// Mutation
export const ADD_USER = gql`
  mutation ADD_USER($object: user_insert_input!) {
    insert_user_one(object: $object) {
      nama
      password
      tipe
      username
      image
    }
  }
`;
export const DELETE_USER = gql`
  mutation DELETE_SUPPLIER($id: Int!) {
    delete_user_by_pk(id: $id) {
      id
      nama
      tipe
      username
    }
  }
`;
export const EDIT_USER = gql`
  mutation EDIT_USER(
    $id: Int!
    $nama: String!
    $password: String!
    $image: String!
  ) {
    update_user_by_pk(
      pk_columns: { id: $id }
      _set: { nama: $nama, password: $password, image: $image }
    ) {
      nama
      username
      tipe
      image
    }
  }
`;
