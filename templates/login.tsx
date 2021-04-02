import { type } from "node:os";
import React from "react";
import GreenArea from "../components/atoms/GreenArea";
import LogoRegisterText from "../components/atoms/LogoRegisterText";
import ModalLogin from "../components/organisms/ModalLogin";

export default function LoginTemplate() {
  return (
    <>
      <div
        className="
        w-screen h-screen 
        lg:flex flex-row
        bg-darkgray 
        "
      >
        <div
          className="
          h-2/6
          lg:h-screen lg:w-screen
          flex justify-center items-center
          "
        >
          <LogoRegisterText />
        </div>

        <div
          className="
          h-4/6
          lg:h-screen
          flex justify-center items-center w-screen overflow-hidden
          
          "
        >
          <ModalLogin />
        </div>
      </div>
    </>
  );
}
