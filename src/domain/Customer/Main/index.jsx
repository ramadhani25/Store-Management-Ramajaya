import React, { useEffect, useState } from "react";

// Components
import { TableController, Table, ContentTitle } from "components";

// GraphQL
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  DELETE_CUSTOMER,
  GET_ALL_CUSTOMER_LIMIT,
  GET_CUSTOMER_BY_SEARCH,
} from "graphql/Customer/queries";

// Library
import Swal from "sweetalert2";

const Main = () => {
  // States & Variables
  const title = {
    textTitle: "Customer",
    desc: "Contains data tables from customers",
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
    loading: loadingGetLimitCustomer,
    error: errorGetLimitCustomer,
    data: dataLimitCustomer,
    refetch: refetchLimitCustomer,
  } = useQuery(GET_ALL_CUSTOMER_LIMIT, {
    variables: {
      limit: dataLimit,
    },
    onCompleted: (data) => {
      setDataTable(data.customer);
    },
    fetchPolicy: "network-only",
  });

  const [searchCustomer, { data, loading, error }] = useLazyQuery(
    GET_CUSTOMER_BY_SEARCH,
    {
      onCompleted: (data) => {
        setDataTable(data.customer);
      },
    }
  );

  const [
    deleteCustomer,
    { loading: loadingDeleteCustomer, error: errorDeleteCustomer },
  ] = useMutation(DELETE_CUSTOMER, {
    refetchQueries: [GET_ALL_CUSTOMER_LIMIT],
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
    searchCustomer({
      variables: {
        _iregex: search,
        limit: dataLimit,
      },
    });
  };

  const deleteData = (id) => {
    deleteCustomer({
      variables: {
        id,
      },
    });
  };

  // useEffect
  useEffect(() => {
    refetchLimitCustomer({
      limit: dataLimit,
    });
  }, [dataLimit]);

  return (
    <div className="m-5 bg-white rounded-md">
      <ContentTitle title={title} />
      <TableController
        btnName="Customer"
        setdataLimit={setdataLimit}
        doSearch={doSearch}
      />
      <Table
        link="Customer"
        column={column}
        dataTable={dataTable}
        deleteData={deleteData}
      />
    </div>
  );
};

export default Main;
