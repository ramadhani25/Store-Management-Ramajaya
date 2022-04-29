import React from "react";
import { TableController, Table } from "components";

const Main = () => {
  return (
    <div className="m-5 bg-white rounded-md">
      <div className="p-5">
        <h1 className="font-bold text-gray-700">Judul</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          animi, dicta esse ad fuga accusantium, hic est dolorem unde tenetur
          quod id voluptatibus reprehenderit.
        </p>
      </div>
      <hr />
      <div>
        <TableController />
        <Table />
      </div>
    </div>
  );
};

export default Main;
