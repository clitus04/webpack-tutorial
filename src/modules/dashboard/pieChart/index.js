import { ArcElement, Chart as ChartJS } from "chart.js";
import { Pie } from "react-chartjs-2";
import { data, options } from "./data";

const PieChart = () => {
  ChartJS.register(ArcElement);

  return (
    <div className="h-auto md:h-[25vh] flex justify-center my-[1em]">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
