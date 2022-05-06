import { gql } from "@apollo/client";

export const GET_ALL_PRODUK = gql`
  query GET_ALL_PRODUK {
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
