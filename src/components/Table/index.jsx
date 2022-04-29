import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const Table = () => {
  return (
    <div className="p-5">
      <table className="table-auto w-full text-center">
        <thead>
          <tr className="bg-accent">
            <th>No</th>
            <th>Name</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm">
            <td>1</td>
            <td>Malcolm Lockyer</td>
            <td>Admin</td>
            <td className="flex justify-center">
              <button className="text-blue-500 mr-2">
                <FiEdit />
              </button>
              <button className="text-red-600">
                <RiDeleteBin6Line />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
