import { useContext } from "react";
import { RegistryContext } from "../../contexts/RegistryContext";

export default function ButtonRounded() {
  const { openDrawer } = useContext(RegistryContext);

  return (
    <button
      onClick={() => {
        openDrawer();
        sessionStorage.setItem("dateTime", String(new Date()));
      }}
      className="w-16 h-16 fixed right-6 bottom-6 bg-primary rounded-full"
    >
      <p className="w-16 h-16 font-registry font-extrabold text-6xl text-white">
        +
      </p>
    </button>
  );
}
