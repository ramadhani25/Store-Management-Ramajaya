import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import { Form, ContentTitle } from "components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// GraphQL
import { useQuery, useMutation } from "@apollo/client";
import {
  EDIT_KATEGORI,
  GET_ALL_KATEGORI_LIMIT,
  GET_KATEGORI_BY_ID,
} from "graphql/Kategori/queries";

const Main = () => {
  // States & Variables
  const title = {
    textTitle: "Category",
    desc: "Fill in the form to edit Category",
  };
  const { id } = useParams();
  const [dataInputs, setDataInputs] = useState(null);
  const [inputs, setInputs] = useState([
    {
      label: "Name",
      name: "nama",
      type: "text",
      placeholder: "Input Name here",
      value: "",
    },
  ]);

  // GraphQL
  const {
    data: dataKategoriById,
    loading: loadingKategoriById,
    error: errorKategoriById,
  } = useQuery(GET_KATEGORI_BY_ID, {
    variables: {
      _eq: id,
    },
    onCompleted: (data) => {
      setDataInputs(data.kategori);
    },
  });

  const [editKategori, { data, loading, error }] = useMutation(EDIT_KATEGORI, {
    refetchQueries: [GET_ALL_KATEGORI_LIMIT],
  });

  // Function
  const doSubmit = () => {
    editKategori({
      variables: {
        id: id,
        nama: inputs[0].value,
      },
    });
  };

  // useEffect
  useEffect(() => {
    if (dataInputs) {
      setInputs([
        {
          ...inputs[0],
          value: dataInputs[0].nama,
        },
      ]);
    }
  }, [dataInputs]);

  return (
    <div className="m-5 bg-white rounded-md">
      <ContentTitle title={title} />
      {!dataInputs && (
        <div className="p-5">
          <Skeleton className="mb-1" width={100} />
          <Skeleton className="mb-1 p-2" />
        </div>
      )}
      {dataInputs && (
        <Form
          inputs={inputs}
          setInputs={setInputs}
          link="category"
          doSubmit={doSubmit}
        />
      )}
    </div>
  );
};

export default Main;
