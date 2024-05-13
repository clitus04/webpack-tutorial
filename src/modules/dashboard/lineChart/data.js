export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  scales: {
    y: {
      ticks: {
        stepSize: 10,
      },
    },
  },
};

export const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
      borderColor: "#12EDED",
      pointRadius: 7,
      pointBackgroundColor: "#12EDED",
    },
    {
      label: "Dataset 2",
      data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
      borderColor: "#FCC468",
      pointRadius: 7,
      pointBackgroundColor: "#FCC468",
    },
  ],
};
