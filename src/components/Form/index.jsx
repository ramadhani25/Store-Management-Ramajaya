import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";
import Swal from "sweetalert2";

const Form = ({
  inputs,
  setInputs,
  link,
  doSubmit,
  selects,
  setSelects,
  inputDropzone,
  file,
  setFile,
}) => {
  const navigate = useNavigate();
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

  const handleSelect = (value, index) => {
    const newSelects = selects.map((select, selectIdx) => {
      if (selectIdx === index) {
        return { ...select, value: value };
      }
      return select;
    });
    setSelects(newSelects);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    doSubmit();
    Toast.fire({
      icon: "success",
      title: "Successfully",
    });
    navigate(`/${link}`);
  };

  const getBase64 = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFile(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  return (
    <form className="p-5" onSubmit={handleSubmitForm}>
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

      {selects &&
        selects.map((select, selectIdx) => (
          <div key={selectIdx} className="py-2 w-full">
            <label className="text-gray-500">{select.label}</label>
            <select
              defaultValue={""}
              name={select.name}
              className="w-full border-2 p-3 rounded-md text-gray-700"
              onChange={(e) => handleSelect(e.target.value, selectIdx)}
              required
            >
              <option value="" disabled>
                Select {select.label}
              </option>
              {select.options &&
                select.options.map((option, optionIdx) => (
                  <option key={optionIdx} value={option.value}>
                    {option.titleValue}
                  </option>
                ))}
            </select>
          </div>
        ))}

      {inputDropzone && (
        <Dropzone onDrop={(acceptedFiles) => getBase64(acceptedFiles[0])}>
          {({ getRootProps, getInputProps }) => (
            <div className="py-2 w-full">
              <label className="text-gray-500">Image</label>
              <div
                className="w-full h-28 border-2 p-3 rounded-md text-gray-700 flex justify-center items-center"
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <p>Drop files here</p>
              </div>
            </div>
          )}
        </Dropzone>
      )}

      {inputDropzone && (
        <div className="py-2 w-full">
          <label className="text-gray-500">Preview</label>
          <div className="w-full h-60 border-2 overflow-hidden rounded-md text-gray-700 flex justify-center items-center">
            <img src={file} alt="" className="w-1/2 md:w-1/4" />
          </div>
        </div>
      )}

      <div className="w-full flex justify-center mt-5">
        <button className="px-5 py-2 rounded-md bg-accent" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
