import React, { useEffect, useState } from "react";

// Components
import { Form, ContentTitle } from "components";

// GraphQL
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PRODUK, GET_ALL_PRODUK_LIMIT } from "graphql/Produk/queries";
import { GET_ALL_KATEGORI_QUERY } from "graphql/Kategori/queries";
import { GET_ALL_SUPPLIER_QUERY } from "graphql/Supplier/queries";

const Main = () => {
  // States & Variables
  const title = {
    textTitle: "Product",
    desc: "Fill in the form to add Product",
  };
  const [dataKategori, setDataKategori] = useState([]);
  const [dataSupplier, setDataSupplier] = useState([]);
  const [inputs, setInputs] = useState([
    {
      label: "Name",
      name: "nama",
      type: "text",
      placeholder: "Input Name here",
      value: "",
    },
    {
      label: "Price",
      name: "harga",
      type: "number",
      placeholder: "Input Price here",
      value: "",
    },
  ]);
  const [selects, setSelects] = useState([
    {
      label: "Category",
      name: "id_kategori",
      value: "",
      options: [],
    },
    {
      label: "Supplier",
      name: "id_supplier",
      value: "",
      options: [],
    },
  ]);

  // GraphQL
  const {
    loading: loadingGetAllKategori,
    error: errorGetAllKategori,
    data: dataAllKategori,
  } = useQuery(GET_ALL_KATEGORI_QUERY, {
    onCompleted: (data) => {
      const newKategori = data.kategori.map((input) => ({
        titleValue: input.nama,
        value: input.id,
      }));
      setDataKategori(newKategori);
    },
  });

  const {
    loading: loadingGetAllSupplier,
    error: errorGetAllSupplier,
    data: dataAllSupplier,
  } = useQuery(GET_ALL_SUPPLIER_QUERY, {
    onCompleted: (data) => {
      const newSupplier = data.supplier.map((input) => ({
        titleValue: input.nama,
        value: input.id,
      }));
      setDataSupplier(newSupplier);
    },
  });

  const [addProduk, { data, loading, error }] = useMutation(ADD_PRODUK, {
    refetchQueries: [GET_ALL_PRODUK_LIMIT],
  });

  // Function
  const doSubmit = () => {
    addProduk({
      variables: {
        object: {
          nama: inputs[0].value,
          harga: inputs[1].value,
          id_kategori: selects[0].value,
          id_supplier: selects[1].value,
        },
      },
    });
  };

  // useEffect
  useEffect(() => {
    setSelects([
      {
        label: "Category",
        name: "id_kategori",
        value: "",
        options: dataKategori,
      },
      {
        label: "Supplier",
        name: "id_supplier",
        value: "",
        options: dataSupplier,
      },
    ]);
  }, [dataKategori, dataSupplier]);

  return (
    <div className="m-5 bg-white rounded-md">
      <ContentTitle title={title} />
      <Form
        inputs={inputs}
        setInputs={setInputs}
        selects={selects}
        setSelects={setSelects}
        link="product"
        doSubmit={doSubmit}
      />
    </div>
  );
};

export default Main;
