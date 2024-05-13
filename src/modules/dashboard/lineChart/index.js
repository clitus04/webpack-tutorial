import {
  Chart as ChartJS,
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

const LineChart= () => {
  ChartJS.register(
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
    <div className="h-auto md:h-[25vh] my-[1em]">
      <Line data={data} options={options} height={"20vh"} width={"100%"} />
    </div>
  );
};

export default LineChart;
