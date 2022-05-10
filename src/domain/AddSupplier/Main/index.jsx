import React, { useState } from "react";

// Components
import { Form, ContentTitle } from "components";

// GraphQL
import { useMutation } from "@apollo/client";
import { ADD_SUPPLIER, GET_ALL_SUPPLIER_LIMIT } from "graphql/Supplier/queries";

const Main = () => {
  // States & Variables
  const title = {
    textTitle: "Supplier",
    desc: "Fill in the form to add Supplier",
  };
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
  const [addSupplier, { data, loading, error }] = useMutation(ADD_SUPPLIER, {
    refetchQueries: [GET_ALL_SUPPLIER_LIMIT],
  });

  // Function
  const doSubmit = () => {
    addSupplier({
      variables: {
        object: {
          nama: inputs[0].value,
        },
      },
    });
  };

  return (
    <div className="m-5 bg-white rounded-md">
      <ContentTitle title={title} />
      <Form
        inputs={inputs}
        setInputs={setInputs}
        link="supplier"
        doSubmit={doSubmit}
      />
    </div>
  );
};

export default Main;
