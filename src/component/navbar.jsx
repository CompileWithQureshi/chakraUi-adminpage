import { useState } from "react";

import { RiFileShredFill, RiHome7Line } from "react-icons/ri";
import { FaTasks, FaRegUserCircle } from "react-icons/fa";
import { IoStatsChart, IoSettingsOutline } from "react-icons/io5";
import { FcSalesPerformance } from "react-icons/fc";
import { SiGooglemarketingplatform } from "react-icons/si";
import { AddIcon } from "@chakra-ui/icons";
import { ToggleButton } from "primereact/togglebutton";

// The default icon size is 1em (16px)

function NavbarComponent() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <nav>
        <div className=" w-50 h-screen  rounded-l-3xl   bg-gray-800 text-white p-10  grid  content-between justify-center">
          <div className="w-fit h-2 flex items-center pt-5  justify-between gap-4">
            <RiFileShredFill className=" bg-yellow-400 w-14 h-16 rounded-full" />
            <h1 className=" font-semibold font-serif text-lg">Assist</h1>
          </div>
          <div>
            <ul>
              <li className="flex items-center gap-2 mb-2 hover:bg-white hover:text-sky-500 p-1 cursor-pointer rounded-md">
                <RiHome7Line className="w-6 h-6  text-sky-500" />
                Dashboard
              </li>
              <li className="flex items-center gap-2 mb-2 hover:bg-white hover:text-sky-500 p-1 cursor-pointer rounded-md">
                <FaTasks className="w-6 h-6  text-sky-500" />
                Tasks
              </li>{" "}
              <li className="flex items-center gap-2 mb-2 hover:bg-white hover:text-sky-500 p-1 cursor-pointer rounded-md">
                <IoStatsChart className="w-6 h-6  text-sky-500" />
                stats
              </li>{" "}
              <li className="flex items-center gap-2 mb-2 hover:bg-white hover:text-sky-500 p-1 cursor-pointer rounded-md">
                <FaRegUserCircle className="w-6 h-6  text-sky-500" />
                profile
              </li>{" "}
              <li className="flex items-center gap-2 mb-2 hover:bg-white hover:text-sky-500 p-1 cursor-pointer rounded-md">
                <IoSettingsOutline className="w-6 h-6  text-sky-500" />
                Setting
              </li>{" "}
            </ul>
          </div>
          <div>
            <p className=" font-bold text-lg">Teams</p>
            <ul>
              <li className="flex items-center gap-2 mb-2 hover:bg-white hover:text-sky-500 p-1 cursor-pointer rounded-md">
                <FcSalesPerformance className="w-6 h-6  text-sky-500" />
                Sales
              </li>{" "}
              <li className="flex items-center gap-2 mb-2 hover:bg-white hover:text-sky-500 p-1 cursor-pointer rounded-md">
                <SiGooglemarketingplatform className="w-6 h-6  text-sky-500" />
                Marketing
              </li>{" "}
              <li className="flex items-center gap-2 mb-2 hover:bg-white hover:text-sky-500 p-1 cursor-pointer rounded-md">
                <AddIcon boxSize={20} className="w-6 h-6  text-sky-500" />
                Projects
              </li>{" "}
            </ul>
          </div>
          <div className="card flex justify-content-center ">
            <ToggleButton
              onLabel="White"
              offLabel="Dark"
              onIcon="pi pi-check"
              offIcon="pi pi-times"
              checked={checked}
              onChange={(e) => setChecked(e.value)}
              className="w-9rem border-sky-200 border px-4 rounded-xl font-semibold  "
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;
