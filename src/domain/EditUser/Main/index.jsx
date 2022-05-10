import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import { Form, ContentTitle } from "components";

// GraphQL
import { useQuery, useMutation } from "@apollo/client";
import {
  EDIT_USER,
  GET_ALL_USER_LIMIT,
  GET_USER_BY_ID,
} from "graphql/User/queries";

const Main = () => {
  // States & Variables
  const title = {
    textTitle: "User",
    desc: "Fill in the form to edit User",
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
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Input Password here",
      value: "",
    },
  ]);

  // GraphQL
  const {
    data: dataUserById,
    loading: loadingUserById,
    error: errorUserById,
  } = useQuery(GET_USER_BY_ID, {
    variables: {
      _eq: id,
    },
    onCompleted: (data) => {
      setDataInputs(data.user);
    },
  });

  const [editUser, { data, loading, error }] = useMutation(EDIT_USER, {
    refetchQueries: [GET_ALL_USER_LIMIT],
  });

  // Function
  const doSubmit = () => {
    editUser({
      variables: {
        id: id,
        nama: inputs[0].value,
        password: inputs[1].value,
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
        {
          ...inputs[1],
          value: dataInputs[0].password,
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
        link="user"
        doSubmit={doSubmit}
      />
    </div>
  );
};

export default Main;
