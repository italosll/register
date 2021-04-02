import { FunctionComponent } from "react";

type Props = {
  text: String;
  type: String;
  platform: String;
};

export const TextNunitoRegular: FunctionComponent<Props> = ({
  text,
  type,
  platform,
}) => {
  if (platform === "desktop")
    return (
      (type === "name" && <p className=" text-gray-800">{text}</p>) ||
      (type === "id" && (
        <p className="font-registry text-xs text-gray-800">{text}</p>
      )) ||
      (type === "date" && (
        <p className="font-registry text-gray-500">{text}</p>
      )) ||
      (type === "hour" && (
        <p className="font-registry text-gray-500 font-bold text-2xl">{text}</p>
      ))
    );
  else
    return (
      (platform === "mobile" && type === "name" && (
        <>
          <p className="font-registry text-gray-700 font-bold text-md">
            Colaborador:
          </p>
          <p className="font-registry font-normal text-gray-800">{text}</p>
        </>
      )) ||
      (type === "id" && (
        <>
          <p className="font-registry font-normal text-gray-800">
            {"(" + text + ")"}
          </p>
        </>
      )) ||
      (type === "date" && (
        <>
          <p className="font-registry text-gray-700 font-bold text-md">Data:</p>
          <p className="font-registry text-gray-500 text-md">{text}</p>
        </>
      )) ||
      (type === "hour" && (
        <>
          <p className="font-registry text-gray-700 font-bold text-md">
            Horário:
          </p>
          <p className="font-registry text-gray-700 font-bold text-md">
            {text}
          </p>
        </>
      ))
    );
};
