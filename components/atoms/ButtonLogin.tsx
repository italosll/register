import React, { FunctionComponent } from "react";
import { LoginContext } from "../../contexts/LoginContext";

type Props = {
  text: string;
};

export const ButtonLogin: FunctionComponent<Props> = ({ text }) => {
  const { setIsLoginHandled } = React.useContext(LoginContext);

  return (
    <button
      onClick={() => {
        if (text === "Login") setIsLoginHandled(true);
      }}
      type="button"
      className="
        font-black  text-white bg-primary focus:outline-none
        w-16 h-6 font-display text-xs rounded-md
        sm:h-12 
        md:h-7 md:rounded-none lg:h-10 lg:w-24 
        xl:h-12 xl:w-28 xl:text-base  
        2xl:h-14 2xl:w-36
      "
    >
      {text}
    </button>
  );
};
