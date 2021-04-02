import React, { FunctionComponent } from "react";
import { RegistryContext } from "../../contexts/RegistryContext";
import MenuMobile from "../atoms/MenuMobile";

type Props = {
  page: String;
};

const NavBarMobile: FunctionComponent<Props> = ({ page }) => {
  return (
    <div
      className="
        w-full h-20 flex flex-row items-center pl-8 pr-16
        bg-gray-50
        fixed
        "
    >
      <MenuMobile />
      <p
        className="
          m-auto font-display font-medium text-sm
          "
      >
        {page === "Registry" && "Meus Registros"}
        {page === "Dashboard" && "Dashboard"}
      </p>
    </div>
  );
};

export default NavBarMobile;
