import { topCardsData } from "./dashboard.data";
import DataCard from "./dataCard";
import ChartLayout from "./chartLayout";
import AreaChart from "./areaChart";
import PieChart from "./pieChart";
import LineChart from "./lineChart";
import { LuHistory } from "react-icons/lu";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const Dashboard= () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between">
        {topCardsData &&
          topCardsData.map((item) => <DataCard {...item} key={item.id} />)}
      </div>
      <div className="mb-[3vh]">
        <ChartLayout
          title="Users Behavior"
          subTitle="24 Hours Performance"
          FooterIcon={LuHistory}
          footerText="Update 3 minutes ago"
        >
          <AreaChart />
        </ChartLayout>
      </div>
      <div className="flex flex-col md:flex-row gap-[2em]">
        <div className="w-[100%] md:w-[50%] lg:w-[30%]">
          <ChartLayout
            title="Email Statistics"
            subTitle="Last Campaign Performance"
            FooterIcon={MdOutlineCalendarMonth}
            footerText="Number of emails sent"
          >
            <PieChart />
          </ChartLayout>
        </div>
        <div className="w-[100%] md:w-[50%] lg:w-[70%]">
          <ChartLayout
            title="NASDAQ: AAPL"
            subTitle="Line Chart With Points"
            FooterIcon={FaCheck}
            footerText="Data information certified"
          >
            <LineChart />
          </ChartLayout>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
