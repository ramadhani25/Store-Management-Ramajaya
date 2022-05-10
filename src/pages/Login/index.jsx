import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { GET_LOGIN_USER } from "graphql/User/queries";

const Login = () => {
  const navigate = useNavigate();

  const [isLoginError, setIsLoginError] = useState(false);
  const [inputs, setInputs] = useState([
    {
      label: "Username",
      name: "username",
      type: "text",
      placeholder: "Username",
      value: "",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
      value: "",
    },
  ]);

  const [getLoginUser, { data, loading, error }] = useLazyQuery(
    GET_LOGIN_USER,
    {
      onCompleted: (data) => {
        console.log(data);
        if (data.user.length === 0) {
          setIsLoginError(true);
        } else {
          setIsLoginError(false);
          localStorage.setItem("token", JSON.stringify(data.user[0]));
          navigate("/");
        }
      },
    }
  );

  // Function
  const handleInput = (value, index) => {
    const newInputs = inputs.map((input, inputIdx) => {
      if (inputIdx === index) {
        return { ...input, value: value };
      }
      return input;
    });
    setInputs(newInputs);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    getLoginUser({
      variables: {
        username: inputs[0].value,
        password: inputs[1].value,
      },
    });
    setInputs([
      {
        label: "Username",
        name: "username",
        type: "text",
        placeholder: "Username",
        value: "",
      },
      {
        label: "Password",
        name: "password",
        type: "password",
        placeholder: "Password",
        value: "",
      },
    ]);
  };

  return (
    <div className="w-screen h-screen p-5 flex flex-col justify-center bg-primary items-center">
      <div className="flex tracking-widest pb-10 text-4xl justify-between text-center font-semibold text-accent">
        RAMAJAYA
      </div>
      <form
        className="p-10 w-full md:w-1/2 bg-white rounded-md"
        onSubmit={handleSubmitForm}
      >
        {inputs &&
          inputs.map((input, inputIdx) => (
            <div key={inputIdx} className="py-2 w-full">
              <label className="text-gray-500">{input.label}</label>
              <input
                className="w-full border-2 p-3 rounded-md text-gray-700"
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                value={input.value}
                onChange={(e) => handleInput(e.target.value, inputIdx)}
                required
              />
            </div>
          ))}
        {isLoginError && <div>Login Gagal</div>}
        <div className="w-full flex justify-center mt-5">
          <button
            className="w-full px-5 py-2 rounded-md bg-accent"
            type="submit"
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
