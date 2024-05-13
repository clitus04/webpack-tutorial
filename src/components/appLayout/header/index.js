import { useCallback } from "react";
import { CiSearch, CiGrid32 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { RiMenu2Fill, RiCloseLargeFill } from "react-icons/ri";

const Header = ({ collapsible, sidebarVisible, setSidebarVisible }) => {
  const toggleMenu = useCallback(() => {
    setSidebarVisible(!sidebarVisible);
  }, [sidebarVisible]);
  return (
    <div className="h-[9vh] px-[4vw] sm:px-[2vw] flex justify-between items-center border-b bg-background-light z-10">
      <div className="flex items-center gap-[3vw] sm:gap-[0.75vw]">
        {collapsible && (
          <div
            className="cursor-pointer w-[5vw] sm:w-[2vw] lg:w-[1.5vw]"
            onClick={toggleMenu}
          >
            {sidebarVisible ? (
              <RiCloseLargeFill size={"100%"} color="#66615B" />
            ) : (
              <RiMenu2Fill size={"100%"} color="#66615B" />
            )}
          </div>
        )}
        <div className="text-[4vw] sm:text-[2vw] lg:text-[1.35vw] text-primary-600">
          Dashboard
        </div>
      </div>
      <div className="flex items-center gap-[5vw] sm:gap-[1vw] mr-[1.25vw]">
        <div className="flex items-center bg-primary-400 px-[0.75vw] py-[0.8vh] rounded-sm">
          <input
            placeholder="Search..."
            className="bg-transparent w-[30vw] sm:w-[20vw] lg:w-[12vw] text-[2.5vw] sm:text-[1.25vw]"
          />
          <span className="w-[3vw] sm:w-[2.25vw] lg:w-[1.5vw]">
            <CiSearch size={"100%"} />
          </span>
        </div>
        <div className="flex gap-[1.75vw]">
          <span className="w-[3.5vw] sm:w-[2.25vw] lg:w-[1.5vw]">
            <CiGrid32 size={"100%"} color="#66615B" />
          </span>
          <div className="flex items-start">
            <span className="w-[3.5vw] sm:w-[2.25vw] lg:w-[1.5vw]">
              <IoIosNotificationsOutline size={"100%"} color="#66615B" />
            </span>
            <span className="w-[1.5vw] sm:w-[1.15vw] lg:w-[0.75vw]">
              <FaCaretDown size={"100%"} color="#66615B" />
            </span>
          </div>
          <span className="w-[3.5vw] sm:w-[2.25vw] lg:w-[1.5vw]">
            <HiOutlineCog8Tooth size={"100%"} color="#66615B" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
