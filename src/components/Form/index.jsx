import React from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ inputs, setInputs, link, doSubmit, selects, setSelects }) => {
  const navigate = useNavigate();

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
    navigate(`/${link}`);
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
          <div key={selectIdx}>
            <label className="text-gray-500">{select.label}</label>
            <select
              defaultValue={""}
              name={select.name}
              className="w-full border-2 p-3 rounded-md text-gray-700"
              onChange={(e) => handleSelect(e.target.value, selectIdx)}
              required
            >
              <option value="" disabled hidden>
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

      <div className="w-full flex justify-center mt-5">
        <button className="px-5 py-2 rounded-md bg-accent" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;