import React, { useState } from "react";
import { TableController, Table, ContentTitle } from "components";
import { useQuery } from "@apollo/client";
import { GET_ALL_CUSTOMER } from "graphql/Customer/queries";

const Main = () => {
  const [dataTable, setDataTable] = useState([]);
  const column = [{ heading: "Name", value: "nama" }];

  const { loading, error, data } = useQuery(GET_ALL_CUSTOMER, {
    onCompleted: (data) => {
      setDataTable(data.customer);
    },
  });

  return (
    <div className="m-5 bg-white rounded-md">
      <ContentTitle />
      <TableController btnName="Customer" />
      <Table column={column} dataTable={dataTable} />
    </div>
  );
};

export default Main;
