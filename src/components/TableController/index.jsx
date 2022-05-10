import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Assets
import { icon } from "assets/icon";

const TableController = ({ btnName, setdataLimit, doSearch }) => {
  // States & Variables
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [isAdmin] = useState(
    JSON.parse(localStorage.getItem("token")).tipe === "admin"
  );

  // Function
  const submitSearch = (e) => {
    e.preventDefault();
    doSearch(search);
    setSearch("");
  };

  return (
    <div className="flex justify-between items-center p-5 text-xs md:text-sm">
      <form
        className={`flex items-center justify-between ${
          isAdmin ? "" : "w-full"
        }`}
        onSubmit={submitSearch}
      >
        <label className="flex mr-3 items-center">
          <span className="mr-3">Show</span>
          <select
            className="mr-2 bg-accent p-1 rounded-lg"
            onChange={(e) => {
              setdataLimit(parseInt(e.target.value));
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
          <span>entries</span>
        </label>
        <label className="flex">
          <input
            type="text"
            placeholder="Search"
            value={search}
            className="w-2/3 border-solid border-2 border-secondary bg-accent mr-2 rounded-md outline-none py-1 px-3 placeholder:text-gray-500"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="text-xl">
            {icon.fisearch}
          </button>
        </label>
      </form>
      <button
        onClick={() => navigate(`add${btnName}`)}
        className={`bg-accent font-semibold items-center py-1 px-3 rounded-lg text-xs md:text-xs ${
          isAdmin ? "flex" : "hidden"
        }`}
      >
        <span className="mr-2">{icon.fiplus}</span>
        <span>Add {btnName}</span>
      </button>
    </div>
  );
};

export default TableController;
