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
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      border: {
        display: false,
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
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 1",
      data: [100, 125, 150, 180, 175, 200, 225, 250, 275, 300],
      backgroundColor: "#6BD098",
      borderWidth: 0,
      pointRadius: 0,
    },
    {
      fill: true,
      label: "Dataset 2",
      data: [200, 225, 250, 280, 275, 300, 325, 350, 375, 400],
      backgroundColor: "#F17E5D",
      borderWidth: 0,
      pointRadius: 0,
    },
    {
      fill: true,
      label: "Dataset 3",
      data: [300, 325, 350, 380, 375, 400, 425, 450, 475, 500],
      backgroundColor: "#FCC468",
      borderWidth: 0,
      pointRadius: 0,
    },
  ],
};
