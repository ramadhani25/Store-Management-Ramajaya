import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Assets
import bgImg from "assets/padi.jpg";

// Library
import Swal from "sweetalert2";

// GraphQL
import { useLazyQuery } from "@apollo/client";
import { GET_LOGIN_USER } from "graphql/User/queries";

const Login = () => {
  // State & Variables
  const navigate = useNavigate();
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

  // Swal
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  // GraphQL
  const [getLoginUser, { data, loading, error }] = useLazyQuery(
    GET_LOGIN_USER,
    {
      onCompleted: (data) => {
        if (data.user.length === 0) {
          Toast.fire({
            icon: "error",
            title: "Signed in Error",
          });
        } else {
          localStorage.setItem("token", JSON.stringify(data.user[0]));
          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
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

  // useEffect
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col sm:flex-row justify-center items-center">
      <div className="hidden relative sm:flex w-full h-full bg-gradient-to-r from-accent/80 to-primary bg-cover">
        <img
          src={bgImg}
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
      </div>
      <div className="w-screen h-screen sm:w-1/2 p-5 flex flex-col justify-center bg-primary items-center">
        <div className="flex tracking-widest pb-10 sm:pb-0 text-4xl sm:text-3xl justify-between text-center font-semibold text-accent">
          RAMAJAYA
        </div>
        <form
          className="p-10 sm:p-5 w-full bg-white sm:bg-primary rounded-sm"
          onSubmit={handleSubmitForm}
        >
          {inputs &&
            inputs.map((input, inputIdx) => (
              <div key={inputIdx} className="py-2 w-full">
                <label className="text-gray-500 sm:text-gray-200">
                  {input.label}
                </label>
                <input
                  className="w-full border-2 p-3 rounded-sm text-gray-700 focus:outline-none"
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                  value={input.value}
                  onChange={(e) => handleInput(e.target.value, inputIdx)}
                  required
                />
              </div>
            ))}
          {/* {isLoginError && <div>Login Gagal</div>} */}
          <div className="w-full flex justify-center mt-5">
            <button
              className="w-full px-5 py-2 rounded-sm bg-accent active:bg-accent/90"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
