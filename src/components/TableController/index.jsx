import React from "react";
import { FiPlus } from "react-icons/fi";

const TableController = () => {
  return (
    <div className="flex justify-between p-5 text-xs md:text-sm">
      <div>
        <form>
          <label className="mr-3">
            <span className="mr-3">Show</span>
            <select className="mr-2 bg-accent p-1 rounded-lg" name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
            <span>entries</span>
          </label>
          <label>
            <input type="text" />
            <button type="submit">🔎</button>
          </label>
        </form>
      </div>
      <div>
        <button className="bg-accent font-semibold flex items-center py-1 px-3 rounded-lg">
          <FiPlus className="mr-2" />
          Add User
        </button>
      </div>
    </div>
  );
};

export default TableController;
