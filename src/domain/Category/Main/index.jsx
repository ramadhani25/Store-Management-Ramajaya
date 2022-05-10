import React, { useEffect, useState } from "react";

// Components
import { TableController, Table, ContentTitle } from "components";

// GraphQL
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  DELETE_KATEGORI,
  GET_ALL_KATEGORI_LIMIT,
  GET_KATEGORI_BY_SEARCH,
} from "graphql/Kategori/queries";

const Main = () => {
  // States & Variables
  const title = {
    textTitle: "Category",
    desc: "Contains data tables from categories",
  };
  const [dataLimit, setdataLimit] = useState(10);
  const [dataTable, setDataTable] = useState([]);
  const column = [{ heading: "Name", value: "nama" }];

  // GraphQL
  const {
    loading: loadingGetLimitKategori,
    error: errorGetLimitKategori,
    data: dataLimitKategori,
    refetch: refetchLimitKategori,
  } = useQuery(GET_ALL_KATEGORI_LIMIT, {
    variables: {
      limit: dataLimit,
    },
    onCompleted: (data) => {
      setDataTable(data.kategori);
    },
    fetchPolicy: "network-only",
  });

  const [searchKategori, { data, loading, error }] = useLazyQuery(
    GET_KATEGORI_BY_SEARCH,
    {
      onCompleted: (data) => {
        setDataTable(data.kategori);
      },
    }
  );

  const [
    deleteKategori,
    { loading: loadingDeleteKategori, error: errorDeleteKategori },
  ] = useMutation(DELETE_KATEGORI, {
    refetchQueries: [GET_ALL_KATEGORI_LIMIT],
  });

  // Function
  const doSearch = (search) => {
    searchKategori({
      variables: {
        _iregex: search,
        limit: dataLimit,
      },
    });
  };

  const deleteData = (id) => {
    deleteKategori({
      variables: {
        id,
      },
    });
  };

  // useEffect
  useEffect(() => {
    refetchLimitKategori({
      limit: dataLimit,
    });
  }, [dataLimit]);

  return (
    <div className="m-5 bg-white rounded-md">
      <ContentTitle title={title} />
      <TableController
        btnName="Category"
        setdataLimit={setdataLimit}
        doSearch={doSearch}
      />
      <Table
        link="Category"
        column={column}
        dataTable={dataTable}
        deleteData={deleteData}
      />
    </div>
  );
};

export default Main;
