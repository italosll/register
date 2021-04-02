import { ButtonLogin } from "../atoms/ButtonLogin";
import GreenArea from "../atoms/GreenArea";
import { InputLabel } from "../molecules/InputLabel";

export default function ModalLogin() {
  return (
    <>
      <GreenArea />
      <div
        className="
        h-48 w-2/3 flex flex-col justify-center space-y-3 
        absolute rounded-3xl max-w-xs

        bg-white

        sm:w-3/6 md:h-70 sm:max-w-xs
        md:w-64 md:space-y-3 md:max-w-xs
        lg:w-80 lg:h-72 lg:space-y-6 lg:right-7 lg:max-w-xs
        xl:w-96 xl:h-72 xl:space-y-6 xl:ml-72 xl:max-w-xs
        2xl:w-3/12 2xl:h-96 2xl:space-y-14 2xl:ml-96 2xl:max-w-lg 2xl:min-h-
        "
      >
        <InputLabel text={"Login"} />
        <InputLabel text={"Senha"} />

        <div
          className="
          flex flex-col mx-auto
          w-9/12
          sm:w-10/12
          lg:w-10/12
          "
        >
          <ButtonLogin text={"Login"} />
        </div>
      </div>
    </>
  );
}

// bg-white
// sm:bg-red-400
// 2xl:bg-red-900
// md:bg-green-900
// lg:bg-indigo-600
// xl:bg-yellow-300
