import React, { useState } from "react";

// Components
import { Form, ContentTitle } from "components";

// GraphQL
import { useMutation } from "@apollo/client";
import { ADD_USER, GET_ALL_USER_LIMIT } from "graphql/User/queries";

const Main = () => {
  // States & Variables
  const title = {
    textTitle: "User",
    desc: "Fill in the form to add User",
  };
  const [inputs, setInputs] = useState([
    {
      label: "Name",
      name: "nama",
      type: "text",
      placeholder: "Input Name here",
      value: "",
    },
    {
      label: "Username",
      name: "username",
      type: "text",
      placeholder: "Input Username here",
      value: "",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Input Password here",
      value: "",
    },
  ]);
  const [selects, setSelects] = useState([
    {
      label: "Type",
      name: "tipe",
      value: "",
      options: [
        { titleValue: "Admin", value: "admin" },
        { titleValue: "Cashier", value: "cashier" },
      ],
    },
  ]);

  // GraphQL
  const [addUser, { data, loading, error }] = useMutation(ADD_USER, {
    refetchQueries: [GET_ALL_USER_LIMIT],
  });

  // Function
  const doSubmit = () => {
    addUser({
      variables: {
        object: {
          nama: inputs[0].value,
          username: inputs[1].value,
          password: inputs[2].value,
          tipe: selects[0].value,
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
        selects={selects}
        setSelects={setSelects}
        link="user"
        doSubmit={doSubmit}
      />
    </div>
  );
};

export default Main;
