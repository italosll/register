import React, { FunctionComponent } from "react";
import { RegistryContext } from "../../contexts/RegistryContext";
import { ButtonRegistry } from "../atoms/ButtonRegistry";

type Props = {
  name: String;
  role: any;
  dateTime: String;
};

const DrawerDesktop: FunctionComponent<Props> = ({ name, role, dateTime }) => {
  const { setAtualDateTime } = React.useContext(RegistryContext);
  setAtualDateTime(dateTime);
  return (
    <div
      className="
        hidden
        lg:flex
        absolute
        z-40
        w-screen h-screen
        bg-black bg-opacity-50
        flex-row-reverse
        "
    >
      <div
        className="
        flex flex-col 
        w-72 h-screen
        bg-white
        
        "
      >
        <p
          className="
          font-registry text-gray-600
          text-xs
          ml-6 my-4
          "
        >
          Novo Registro
        </p>
        <div className="w-full h-px bg-gray-300" />

        <p className="font-display text-xs mt-10 mx-10">{role}</p>

        <p className="font-display text-lg mx-10 mt-1">{name}</p>

        <p className="font-display text-xs mx-10 mt-8">Data/Hora</p>

        <p className="font-display text-lg mx-10 mt-1 pl-2 bg-gray-50">
          {dateTime}
        </p>

        <div className="w-full h-px mt-auto bg-gray-300" />

        <div
          className="
          w-full h-20 
          flex justify-around flex-row space-x-2 p-5 "
        >
          <ButtonRegistry text={"Salvar"} />
          <ButtonRegistry text={"Cancelar"} />
        </div>
      </div>
    </div>
  );
};

export default DrawerDesktop;
