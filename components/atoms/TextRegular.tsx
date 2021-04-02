import React, { FunctionComponent } from "react";

type Props = {
  text: string;
};

export const TextRegular: FunctionComponent<Props> = ({ text }) => (
  <p
    className="
    text-sm
    2xl:text-xl
    text-gray-800
    font-display font-normal
    "
  >
    {text}
  </p>
);
