import { gql } from "@apollo/client";

// Subsricption
export const GET_ALL_PRODUK = gql`
  subscription GET_ALL_PRODUK {
    produk {
      id
      harga
      nama
      kategori {
        nama
      }
      supplier {
        nama
      }
    }
  }
`;

// Query
export const GET_ALL_PRODUK_LIMIT = gql`
  query GET_ALL_PRODUK_LIMIT($limit: Int!) {
    produk(limit: $limit) {
      id
      harga
      nama
      kategori {
        nama
      }
      supplier {
        nama
      }
    }
  }
`;
export const GET_PRODUK_BY_ID = gql`
  query GET_PRODUK_BY_ID($_eq: Int!) {
    produk(where: { id: { _eq: $_eq } }) {
      id
      harga
      nama
      kategori {
        nama
      }
      supplier {
        nama
      }
    }
  }
`;
export const GET_PRODUK_BY_SEARCH = gql`
  query GET_PRODUK_BY_SEARCH($_iregex: String!, $limit: Int!) {
    produk(where: { nama: { _iregex: $_iregex } }, limit: $limit) {
      id
      harga
      nama
      kategori {
        nama
      }
      supplier {
        nama
      }
    }
  }
`;

// Mutation
export const ADD_PRODUK = gql`
  mutation ADD_PRODUK($object: produk_insert_input!) {
    insert_produk_one(object: $object) {
      id
      nama
      harga
      id_kategori
      id_supplier
    }
  }
`;
export const DELETE_PRODUK = gql`
  mutation DELETE_PRODUK($id: Int!) {
    delete_produk_by_pk(id: $id) {
      id
      harga
      nama
      id_supplier
      id_kategori
    }
  }
`;
export const EDIT_PRODUK = gql`
  mutation EDIT_PRODUK(
    $id: Int!
    $harga: Int!
    $id_kategori: Int!
    $id_supplier: Int!
    $nama: String!
  ) {
    update_produk_by_pk(
      pk_columns: { id: $id }
      _set: {
        harga: $harga
        id_kategori: $id_kategori
        id_supplier: $id_supplier
        nama: $nama
      }
    ) {
      nama
      harga
      id
      id_kategori
      id_supplier
    }
  }
`;
