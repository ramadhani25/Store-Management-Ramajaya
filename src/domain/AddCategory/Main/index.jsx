import React, { useState } from "react";

// Components
import { Form, ContentTitle } from "components";

// GraphQL
import { useMutation } from "@apollo/client";
import { ADD_KATEGORI, GET_ALL_KATEGORI_LIMIT } from "graphql/Kategori/queries";

const Main = () => {
  // States & Variables
  const title = {
    textTitle: "Category",
    desc: "Fill in the form to add Customer",
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
  const [addKategori, { data, loading, error }] = useMutation(ADD_KATEGORI, {
    refetchQueries: [GET_ALL_KATEGORI_LIMIT],
  });

  // Function
  const doSubmit = () => {
    addKategori({
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
        link="category"
        doSubmit={doSubmit}
      />
    </div>
  );
};

export default Main;
