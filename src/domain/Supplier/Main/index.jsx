import React, { useEffect, useState } from "react";

// Components
import { TableController, Table, ContentTitle } from "components";

// GraphQL
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  DELETE_SUPPLIER,
  GET_ALL_SUPPLIER_LIMIT,
  GET_SUPPLIER_BY_SEARCH,
} from "graphql/Supplier/queries";

// Library
import Swal from "sweetalert2";

const Main = () => {
  // States & Variables
  const title = {
    textTitle: "Supplier",
    desc: "Contains data tables from suppliers",
  };
  const [dataLimit, setdataLimit] = useState(10);
  const [dataTable, setDataTable] = useState();
  const column = [{ heading: "Name", value: "nama" }];

  // Swal
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  // GraphQL
  const {
    loading: loadingGetLimitSupplier,
    error: errorGetLimitSupplier,
    data: dataLimitSupplier,
    refetch: refetchLimitSupplier,
  } = useQuery(GET_ALL_SUPPLIER_LIMIT, {
    variables: {
      limit: dataLimit,
    },
    onCompleted: (data) => {
      setDataTable(data.supplier);
    },
    fetchPolicy: "network-only",
  });

  const [searchSupplier, { data, loading, error }] = useLazyQuery(
    GET_SUPPLIER_BY_SEARCH,
    {
      onCompleted: (data) => {
        setDataTable(data.supplier);
      },
    }
  );

  const [
    deleteSupplier,
    { loading: loadingDeleteSupplier, error: errorDeleteSupplier },
  ] = useMutation(DELETE_SUPPLIER, {
    refetchQueries: [GET_ALL_SUPPLIER_LIMIT],
    onCompleted: () => {
      Toast.fire({
        icon: "success",
        title: "Delete successfully",
      });
    },
    onError: () => {
      Toast.fire({
        icon: "error",
        title: "Delete Error",
      });
    },
  });

  // Function
  const doSearch = (search) => {
    searchSupplier({
      variables: {
        _iregex: search,
        limit: dataLimit,
      },
    });
  };

  const deleteData = (id) => {
    deleteSupplier({
      variables: {
        id,
      },
    });
  };

  // useEffect
  useEffect(() => {
    refetchLimitSupplier({
      limit: dataLimit,
    });
  }, [dataLimit]);

  return (
    <div className="m-5 bg-white rounded-md">
      <ContentTitle title={title} />
      <TableController
        btnName="Supplier"
        setdataLimit={setdataLimit}
        doSearch={doSearch}
      />
      <Table
        link="Supplier"
        column={column}
        dataTable={dataTable}
        deleteData={deleteData}
      />
    </div>
  );
};

export default Main;
