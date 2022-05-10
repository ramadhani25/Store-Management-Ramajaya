import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import { Form, ContentTitle } from "components";

// GraphQL
import { useQuery, useMutation } from "@apollo/client";
import {
  EDIT_PRODUK,
  GET_ALL_PRODUK_LIMIT,
  GET_PRODUK_BY_ID,
} from "graphql/Produk/queries";
import { GET_ALL_KATEGORI_QUERY } from "graphql/Kategori/queries";
import { GET_ALL_SUPPLIER_QUERY } from "graphql/Supplier/queries";

const Main = () => {
  // States & Variables
  const title = {
    textTitle: "Product",
    desc: "Fill in the form to edit Product",
  };
  const { id } = useParams();
  const [dataInputs, setDataInputs] = useState(null);
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
    data: dataProdukById,
    loading: loadingProdukById,
    error: errorProdukById,
  } = useQuery(GET_PRODUK_BY_ID, {
    variables: {
      _eq: id,
    },
    onCompleted: (data) => {
      setDataInputs(data.produk);
    },
  });

  const [editProduk, { data, loading, error }] = useMutation(EDIT_PRODUK, {
    refetchQueries: [GET_ALL_PRODUK_LIMIT],
  });

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

  // Function
  const doSubmit = () => {
    editProduk({
      variables: {
        id: id,
        nama: inputs[0].value,
        harga: inputs[1].value,
        id_kategori: selects[0].value,
        id_supplier: selects[1].value,
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

  useEffect(() => {
    if (dataInputs) {
      setInputs([
        {
          ...inputs[0],
          value: dataInputs[0].nama,
        },
        {
          ...inputs[1],
          value: dataInputs[0].harga,
        },
      ]);
    }
  }, [dataInputs]);

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
