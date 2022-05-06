import React, { useState } from "react";
import { TableController, Table, ContentTitle } from "components";
import { useQuery } from "@apollo/client";
import { GET_ALL_USER } from "graphql/User/queries";

const Main = () => {
  const [dataTable, setDataTable] = useState([]);
  const column = [
    { heading: "Name", value: "nama" },
    { heading: "Username", value: "username" },
    { heading: "Type", value: "tipe" },
  ];

  const { loading, error, data } = useQuery(GET_ALL_USER, {
    onCompleted: (data) => {
      setDataTable(data.user);
    },
  });

  return (
    <div className="m-5 bg-white rounded-md">
      <ContentTitle />
      <TableController btnName="User" />
      <Table column={column} dataTable={dataTable} />
    </div>
  );
};

export default Main;
