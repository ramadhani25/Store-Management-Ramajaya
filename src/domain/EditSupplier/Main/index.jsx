import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import { Form, ContentTitle } from "components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// GraphQL
import { useQuery, useMutation } from "@apollo/client";
import {
  EDIT_SUPPLIER,
  GET_ALL_SUPPLIER_LIMIT,
  GET_SUPPLIER_BY_ID,
} from "graphql/Supplier/queries";

const Main = () => {
  // States & Variables
  const title = {
    textTitle: "Supplier",
    desc: "Fill in the form to edit Supplier",
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
    data: dataSupplierById,
    loading: loadingSupplierById,
    error: errorSupplierById,
  } = useQuery(GET_SUPPLIER_BY_ID, {
    variables: {
      _eq: id,
    },
    onCompleted: (data) => {
      setDataInputs(data.supplier);
    },
  });

  const [editSupplier, { data, loading, error }] = useMutation(EDIT_SUPPLIER, {
    refetchQueries: [GET_ALL_SUPPLIER_LIMIT],
  });

  // Function
  const doSubmit = () => {
    editSupplier({
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
          link="supplier"
          doSubmit={doSubmit}
        />
      )}
    </div>
  );
};

export default Main;
