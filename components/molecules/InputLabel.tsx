import { Input } from "../atoms/Input";
import { TextRegular } from "../atoms/TextRegular";

import React, { FunctionComponent } from "react";

type Props = {
  text: string;
};

export const InputLabel: FunctionComponent<Props> = ({ text }) => (
  <div
    className="
    w-9/12
    sm:w-10/12 
    flex flex-col  mx-auto"
  >
    <TextRegular text={text} />
    <Input label={text} />
  </div>
);
