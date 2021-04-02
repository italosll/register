import { FunctionComponent } from "react";
import { ButtonRegistry } from "../atoms/ButtonRegistry";
import DateTimeDrawerMobile from "../atoms/DateTimeDrawerMobile";

type Props = {
  name: String;
  role: any;
  dateTime: String;
};
const DrawerMobile: FunctionComponent<Props> = ({ name, role, dateTime }) => {
  return (
    <div
      className="
        fixed
        w-screen h-screen
        flex flex-col-reverse
        lg:hidden
        z-10
        "
    >
      <div
        className="
        flex flex-col 
        w-full h-96  rounded-t-xl shadow-lg 
        font-display 
        bg-gray-100
        "
      >
        <div
          className="
          w-10 h-1 bg-gray-300 mt-auto mx-auto rounded-full
          "
        />

        <p
          className="
          font-bold text-sm text-gray-800 mx-auto mt-6
          "
        >
          Novo Registro
        </p>

        <div
          className="
          w-full mt-auto
          flex flex-row  px-5"
        >
          <DateTimeDrawerMobile value={name} />
        </div>

        <div
          className="
          w-full mt-auto
          flex flex-row space-x-5 px-5"
        >
          <DateTimeDrawerMobile
            label={"Data: "}
            value={dateTime?.split("  ")[0]}
          />
          <DateTimeDrawerMobile
            label={"Horário: "}
            value={dateTime.split("  ")[1]}
          />
        </div>

        <div
          className="
          w-full h-20  mt-auto
          flex justify-around flex-row space-x-2 py-5 px-5 "
        >
          <ButtonRegistry text={"Salvar"} />
          <ButtonRegistry text={"Cancelar"} />
        </div>
      </div>
    </div>
  );
};

export default DrawerMobile;
