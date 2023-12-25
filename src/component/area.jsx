import { useState } from "react";
import Heart from "react-heart";

function MainArea() {
  return (
    <>
      <div className="  h-screen  w-full bg-slate-900 text-white">
        <Nav />
      </div>
    </>
  );
}

export default MainArea;

function Nav() {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center p-5  m-2">
        <div>
          <p className=" font-bold text-3xl font-serif">Manage Your Projects</p>
          <p className=" text-orange-300">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div className="flex gap-1 items-center  ">
          <Heart
            isActive={active}
            onClick={() => setActive(!active)}
            animationScale={1.25}
            style={{ width: "20px" }}
            className="border-white"
            inactiveColor="white"
          />

          <input
            type="date"
            name="calender"
            id=""
            className=" text-sky-600 outline-1 rounded-lg w-28"
          />
          <img
            src="/public/Screenshot (2).png"
            alt=""
            className="w-10  rounded-full border-sky-500 border-2 h-10"
          />
        </div>
      </nav>
    </>
  );
}
