import { useContext } from "react";
import { RegistryContext } from "../../contexts/RegistryContext";

export default function MenuMobile() {
  const { openMobileSideBar } = useContext(RegistryContext);
  return (
    <img
      onClick={openMobileSideBar}
      className="
      w-8 
      "
      src="/menu.svg"
    />
  );
}
