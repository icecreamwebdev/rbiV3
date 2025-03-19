import React from "react";
import Link from "next/link";

const Policies = () => {
  return (
    <div className="bg-[#3c3d3e] opacity-90 w-full flex  items-center border-b-4 border-white justify-center">
      <div className="max-w-2xl w-full md:flex-row w-full px-7 py-5 flex flex-col justify-between">
        <p className="text-white text-center">RBI Media Limited | 2025</p>

        <ul className="flex text-gray-400 font-light pt-3 md:pt-0 justify-center font-light text-sm">
          <li className="pl-4">
            <Link href="../privacy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Policies;
