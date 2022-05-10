import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Chart = ({ dataCustomer }) => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Data Chart",
      },
    },
  };
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Customer",
        data: [
          dataCustomer?.filter((item) => item.created_at.split("-")[1] === "01")
            .length,
          dataCustomer?.filter((item) => item.created_at.split("-")[1] === "02")
            .length,
          dataCustomer?.filter((item) => item.created_at.split("-")[1] === "03")
            .length,
          dataCustomer?.filter((item) => item.created_at.split("-")[1] === "04")
            .length,
          dataCustomer?.filter((item) => item.created_at.split("-")[1] === "05")
            .length,
          dataCustomer?.filter((item) => item.created_at.split("-")[1] === "06")
            .length,
          dataCustomer?.filter((item) => item.created_at.split("-")[1] === "07")
            .length,
          dataCustomer?.filter((item) => item.created_at.split("-")[1] === "08")
            .length,
          dataCustomer?.filter((item) => item.created_at.split("-")[1] === "09")
            .length,
          dataCustomer?.filter((item) => item.created_at.split("-")[1] === "10")
            .length,
          dataCustomer?.filter((item) => item.created_at.split("-")[1] === "11")
            .length,
          dataCustomer?.filter((item) => item.created_at.split("-")[1] === "12")
            .length,
        ],
        borderColor: "#F1DDBF",
        backgroundColor: "#F1DDBF",
      },
    ],
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
