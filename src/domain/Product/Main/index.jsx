import React, { useState } from "react";
import { TableController, Table, ContentTitle } from "components";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUK } from "graphql/Produk/queries";

const Main = () => {
  const [dataTable, setDataTable] = useState([]);
  const column = [
    { heading: "Name", value: "nama" },
    { heading: "Price", value: "harga" },
    { heading: "Category", value: "kategori" },
    { heading: "Supplier", value: "supplier" },
  ];

  const { loading, error, data } = useQuery(GET_ALL_PRODUK, {
    onCompleted: (data) => {
      setDataTable(data.produk);
    },
  });

  return (
    <div className="m-5 bg-white rounded-md">
      <ContentTitle />
      <TableController btnName="Product" />
      <Table column={column} dataTable={dataTable} />
    </div>
  );
};

export default Main;
