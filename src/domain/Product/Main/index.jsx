import React, { useEffect, useState } from "react";

// Components
import { TableController, Table, ContentTitle } from "components";

// GraphQL
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  DELETE_PRODUK,
  GET_ALL_PRODUK_LIMIT,
  GET_PRODUK_BY_SEARCH,
} from "graphql/Produk/queries";

const Main = () => {
  // States & Variables
  const title = {
    textTitle: "Product",
    desc: "Contains data tables from products",
  };
  const [dataLimit, setdataLimit] = useState(10);
  const [dataTable, setDataTable] = useState([]);
  const column = [
    { heading: "Name", value: "nama" },
    { heading: "Price", value: "harga" },
    { heading: "Category", value: "kategori" },
    { heading: "Supplier", value: "supplier" },
  ];

  // GraphQL
  const {
    loading: loadingGetLimitProduk,
    error: errorGetLimitProduk,
    data: dataLimitProduk,
    refetch: refetchLimitProduk,
  } = useQuery(GET_ALL_PRODUK_LIMIT, {
    variables: {
      limit: dataLimit,
    },
    onCompleted: (data) => {
      setDataTable(data.produk);
    },
    fetchPolicy: "network-only",
  });

  const [searchProduk, { data, loading, error }] = useLazyQuery(
    GET_PRODUK_BY_SEARCH,
    {
      onCompleted: (data) => {
        setDataTable(data.produk);
      },
    }
  );
  const [
    deleteProduk,
    { loading: loadingDeleteProduk, error: errorDeleteProduk },
  ] = useMutation(DELETE_PRODUK, {
    refetchQueries: [GET_ALL_PRODUK_LIMIT],
  });

  // Function
  const doSearch = (search) => {
    searchProduk({
      variables: {
        _iregex: search,
        limit: dataLimit,
      },
    });
  };

  const deleteData = (id) => {
    deleteProduk({
      variables: {
        id,
      },
    });
  };

  // useEffect
  useEffect(() => {
    refetchLimitProduk({
      limit: dataLimit,
    });
  }, [dataLimit]);

  return (
    <div className="m-5 bg-white rounded-md">
      <ContentTitle title={title} />
      <TableController
        btnName="Product"
        setdataLimit={setdataLimit}
        doSearch={doSearch}
      />
      <Table
        link="Product"
        column={column}
        dataTable={dataTable}
        deleteData={deleteData}
      />
    </div>
  );
};

export default Main;
