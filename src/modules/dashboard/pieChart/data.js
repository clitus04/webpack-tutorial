import { ChartData } from "chart.js";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const labels = ["Opened", "Read", "Deleted", "Unopened"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 2",
      data: [20, 30, 30, 10],
      borderWidth: 0,
      backgroundColor: ["#CCCCCC", "#12EDED", "#FCC468", "#EF8157"],
    },
  ],
};
