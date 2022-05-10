import React, { useState } from "react";

// Components
import { Form, ContentTitle } from "components";

// GraphQL
import { useMutation } from "@apollo/client";
import { ADD_CUSTOMER, GET_ALL_CUSTOMER_LIMIT } from "graphql/Customer/queries";

const Main = () => {
  // States & Variables
  const title = {
    textTitle: "Customer",
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
  const [addCustomer, { data, loading, error }] = useMutation(ADD_CUSTOMER, {
    refetchQueries: [GET_ALL_CUSTOMER_LIMIT],
  });

  // Function
  const doSubmit = () => {
    addCustomer({
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
        link="customer"
        doSubmit={doSubmit}
      />
    </div>
  );
};

export default Main;
