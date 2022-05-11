import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Assets
import { icon } from "assets/icon";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Table = ({ column, dataTable, deleteData, link }) => {
  const navigate = useNavigate();
  const [isAdmin] = useState(
    JSON.parse(localStorage.getItem("token")).tipe === "admin"
  );

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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      iconColor: "#EB5353",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#EB5353",
      showClass: {
        popup: "animate__animated animate__bounceIn",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(id);
        Toast.fire({
          icon: "success",
          title: "Delete successfully",
        });
      }
    });
  };

  return (
    <div className="p-5">
      {!dataTable && (
        <div>
          <Skeleton className="py-2 mb-3" />
          <Skeleton count={3} className="py-1 mb-1" />
        </div>
      )}
      {dataTable && (
        <table className="table-auto w-full text-center">
          <thead>
            <tr className="bg-accent">
              <th className="py-2 text-xs md:text-sm">No</th>
              {column.map((item, itemIdx) => (
                <th key={itemIdx} className="py-2 text-xs md:text-sm">
                  {item.heading}
                </th>
              ))}
              <th
                className={`py-2 text-xs md:text-sm ${
                  isAdmin ? "block" : "hidden"
                }`}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {dataTable &&
              dataTable.map((item, itemIdx) => (
                <tr key={itemIdx}>
                  <td className="py-3 text-xs md:text-sm">{itemIdx + 1}</td>
                  {column.map((colItem, colItemIdx) =>
                    colItem.value !== "kategori" &&
                    colItem.value !== "supplier" ? (
                      <td key={colItemIdx} className="py-3 text-xs md:text-sm">
                        {item[colItem.value]}
                      </td>
                    ) : (
                      <td key={colItemIdx} className="py-3 text-xs md:text-sm">
                        {item[colItem.value]["nama"]}
                      </td>
                    )
                  )}
                  <td
                    className={`justify-center py-3 text-xs md:text-sm ${
                      isAdmin ? "flex" : "hidden"
                    }`}
                  >
                    <button
                      className="text-blue-500 mr-2"
                      onClick={() => navigate(`edit${link}/${item.id}`)}
                    >
                      {icon.fiedit}
                    </button>
                    <button
                      className="text-red-600"
                      onClick={() => handleDelete(item.id)}
                    >
                      {icon.rideletebin6line}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
