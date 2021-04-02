// type Props = {
//   text: string;
// };

import React, { FunctionComponent } from "react";
import { LoginContext } from "../../contexts/LoginContext";

// export const TextRegular: FunctionComponent<Props> = ({ text }) => (
//   <p className="font-display font-medium text-x">{text}</p>
// );

type Props = {
  label: string;
};

export const Input: FunctionComponent<Props> = ({ label }) => {
  const { setPassword, setEmail } = React.useContext(LoginContext);

  const set = (text) => {
    if (label === "Login") {
      setEmail(text);
    }
    if (label === "Senha") {
      setPassword(text);
    }
  };

  return (
    <input
      onChange={(event) => set(event.target.value)}
      type={label === "Senha" ? "password" : "email"}
      className={`
      bg-gray-100 rounded-sm focus:outline-none  border-transparent pl-4

      sm:h-8
      lg:h-12
      xl:h-14 
     `}
    />
  );
};
