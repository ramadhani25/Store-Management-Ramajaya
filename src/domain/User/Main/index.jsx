import React, { useEffect, useState } from "react";

// Components
import { TableController, Table, ContentTitle } from "components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// GraphQL
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  DELETE_USER,
  GET_ALL_USER_LIMIT,
  GET_USER_BY_SEARCH,
} from "graphql/User/queries";

const Main = () => {
  // States & Variables
  const title = {
    textTitle: "User",
    desc: "Contains data tables from users",
  };
  const [dataLimit, setdataLimit] = useState(10);
  const [dataTable, setDataTable] = useState();
  const column = [
    { heading: "Name", value: "nama" },
    { heading: "Username", value: "username" },
    { heading: "Type", value: "tipe" },
  ];
  const userLoginId = JSON.parse(localStorage.getItem("token")).id;

  // GraphQL
  const {
    loading: loadingGetLimitUser,
    error: errorGetLimitUser,
    data: dataLimitUser,
    refetch: refetchLimitUser,
  } = useQuery(GET_ALL_USER_LIMIT, {
    variables: {
      limit: dataLimit,
    },
    onCompleted: (data) => {
      const user = data.user.filter((item) => item.id !== userLoginId);
      setDataTable(user);
    },
    fetchPolicy: "network-only",
  });

  const [searchUser, { data, loading, error }] = useLazyQuery(
    GET_USER_BY_SEARCH,
    {
      onCompleted: (data) => {
        const user = data.user.filter((item) => item.id !== userLoginId);
        setDataTable(user);
      },
    }
  );

  const [deleteUser, { loading: loadingDeleteUser, error: errorDeleteUser }] =
    useMutation(DELETE_USER, {
      refetchQueries: [GET_ALL_USER_LIMIT],
    });

  // Function
  const doSearch = (search) => {
    searchUser({
      variables: {
        _iregex: search,
        limit: dataLimit,
      },
    });
  };

  const deleteData = (id) => {
    deleteUser({
      variables: {
        id,
      },
    });
  };

  // useEffect
  useEffect(() => {
    refetchLimitUser({
      limit: dataLimit,
    });
  }, [dataLimit]);

  useEffect(() => {
    refetchLimitUser({
      limit: dataLimit,
    });
  }, [dataLimit]);

  return (
    <div className="m-5 bg-white rounded-md">
      <ContentTitle title={title} />
      <TableController
        btnName="User"
        setdataLimit={setdataLimit}
        doSearch={doSearch}
      />
      <Table
        link="User"
        column={column}
        dataTable={dataTable}
        deleteData={deleteData}
      />
    </div>
  );
};

export default Main;
