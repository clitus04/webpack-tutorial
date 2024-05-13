import { CiBank, CiUser, CiViewTable } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineFontSize } from "react-icons/ai";

export const menuItems = [
  {
    id: 0,
    name: "Dashboard",
    Icon: CiBank,
    path: "/",
  },
  // {
  //   id: 1,
  //   name: "Icons",
  //   Icon: IoDiamondOutline,
  //   path: "/icons",
  // },
  {
    id: 2,
    name: "Maps",
    Icon: FiMapPin,
    path: "/maps",
  },
  {
    id: 3,
    name: "Notifications",
    Icon: IoNotificationsOutline,
    path: "/notifications",
  },
  {
    id: 4,
    name: "User Profile",
    Icon: CiUser,
    path: "/user",
  },
  {
    id: 5,
    name: "Table List",
    Icon: CiViewTable,
    path: "/table",
  },
  {
    id: 6,
    name: "Typography",
    Icon: AiOutlineFontSize,
    path: "/typography",
  },
];
