import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import { Form, ContentTitle } from "components";

// GraphQL
import { useQuery, useMutation } from "@apollo/client";
import {
  EDIT_CUSTOMER,
  GET_ALL_CUSTOMER_LIMIT,
  GET_CUSTOMER_BY_ID,
} from "graphql/Customer/queries";

const Main = () => {
  // States & Variables
  const title = {
    textTitle: "Customer",
    desc: "Fill in the form to edit Customer",
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
    data: dataCustomerById,
    loading: loadingCustomerById,
    error: errorCustomerById,
  } = useQuery(GET_CUSTOMER_BY_ID, {
    variables: {
      _eq: id,
    },
    onCompleted: (data) => {
      setDataInputs(data.customer);
    },
  });

  const [editCustomer, { data, loading, error }] = useMutation(EDIT_CUSTOMER, {
    refetchQueries: [GET_ALL_CUSTOMER_LIMIT],
  });

  // Function
  const doSubmit = () => {
    editCustomer({
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
