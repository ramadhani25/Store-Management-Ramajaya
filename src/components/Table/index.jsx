import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
// import { product } from "constants/dummyData";

const Table = ({ column, dataTable }) => {
  return (
    <div className="p-5">
      <table className="table-auto w-full text-center">
        <thead>
          <tr className="bg-accent">
            <th>No</th>
            {column.map((item, itemIdx) => (
              <th key={itemIdx}>{item.heading}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map((item, itemIdx) => (
            <tr key={itemIdx}>
              <td>{itemIdx + 1}</td>
              {column.map((colItem, colItemIdx) =>
                colItem.value !== "kategori" && colItem.value !== "supplier" ? (
                  <td key={colItemIdx}>{item[colItem.value]}</td>
                ) : (
                  <td key={colItemIdx}>{item[colItem.value]["nama"]}</td>
                )
              )}
              <td className="flex justify-center py-3">
                <button className="text-blue-500 mr-2">
                  <FiEdit />
                </button>
                <button className="text-red-600">
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
