import Sidebar from "./sidebar";
import Header from "./header";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import Dashboard from "../../modules/dashboard";

const AppLayout = () => {
  const [collapsible, setCollapsible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    if (window.screen.width <= 1024) {
      setCollapsible(true);
      setSidebarVisible(false);
    }
    window.addEventListener("resize", () => {
      if (window.screen.width <= 1024) {
        setCollapsible(true);
        setSidebarVisible(false);
      } else {
        setCollapsible(false);
        setSidebarVisible(true);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);
  return (
    <div className="flex h-screen">
      <Sidebar sidebarVisible={sidebarVisible} />
      <div className="bg-background-light flex-1 border-l overflow-y-auto no-scrollbar">
        <Header
          collapsible={collapsible}
          sidebarVisible={sidebarVisible}
          setSidebarVisible={setSidebarVisible}
        />
        <div className="p-[5vw] sm:p-[2vw] min-h-[83.5vh]">
          <Dashboard />
        </div>
        <div className="flex justify-between items-center my-[1vh] px-[5vw] sm:px-[1.5vw] py-[2vh]">
          <div className="flex items-center gap-[1em]">
            <span className="text-primary-600 text-[2vw] sm:text-[1vw]">
              CREATIVE TIM
            </span>
            <span className="text-primary-600 text-[2vw] sm:text-[1vw]">
              BLOG
            </span>
            <span className="text-primary-600 text-[2vw] sm:text-[1vw]">
              LICENSES
            </span>
          </div>
          <div className="flex items-center text-[2vw] sm:text-[1vw] text-primary-600">
            © 2024, made with <FaHeart className="mx-[0.25em]" color="#000" />
            by
            <span className="text-blue-400 cursor-pointer hover:underline ml-1">
              Creative Tim
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
