import React, { useState } from "react";
import { TableController, Table, ContentTitle } from "components";
import { useQuery } from "@apollo/client";
import { GET_ALL_KATEGORI } from "graphql/Kategori/queries";

const Main = () => {
  const [dataTable, setDataTable] = useState([]);
  const column = [{ heading: "Name", value: "nama" }];

  const { loading, error, data } = useQuery(GET_ALL_KATEGORI, {
    onCompleted: (data) => {
      setDataTable(data.kategori);
    },
  });

  return (
    <div className="m-5 bg-white rounded-md">
      <ContentTitle />
      <TableController btnName="Category" />
      <Table column={column} dataTable={dataTable} />
    </div>
  );
};

export default Main;
