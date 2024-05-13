import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { data, options } from "./data";

const AreaChart = () => {
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  return (
    <div className="h-auto md:h-[50vh] my-[1em]">
      <Line data={data} options={options} height={"30vh"} width={"100%"} />
    </div>
  );
};

export default AreaChart;
