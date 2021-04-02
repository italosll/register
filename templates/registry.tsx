import React, { FunctionComponent } from "react";
import ButtonRounded from "../components/atoms/ButtonAddRounded";
import { ButtonRegistry } from "../components/atoms/ButtonRegistry";
import NavBarMobile from "../components/molecules/NavBarMobile";
import RegistryList from "../components/organisms/RegistryList";
import SideBarDesktop from "../components/organisms/SideBarDesktop";
import SideBarMobile from "../components/organisms/SideBarMobile";
import { RegistryContext } from "../contexts/RegistryContext";

type User = {
  id: String;
  username: String;
  role: String;
};

type Props = {
  page: String;
  user: User;
  data: {
    registeredTimes: [
      {
        timeRegistered: Date;
        user: {
          id: String;
          username: String;
        };
      }
    ];
  };
};

const RegistryTemplate: FunctionComponent<Props> = ({ page, user, data }) => {
  const { isMobileSideBarOpen } = React.useContext(RegistryContext);

  return (
    <>
      <div
        className="
        bg-gray-50
        flex flex-col
        lg:hidden
        "
      >
        <NavBarMobile page={page} />

        <RegistryList data={data} page={page} />

        {page === "Registry" && <ButtonRounded />}

        {isMobileSideBarOpen && <SideBarMobile user={user} />}
      </div>

      <div
        className="
        absolut
        lg:w-screen lg:h-screen
        flex flex-row bg-gray-50
        "
      >
        <div
          className="
          h-screen w-screen
          hidden
          lg:flex
          "
        >
          <SideBarDesktop page={page} user={user} />
          <div
            className="
            lg:w-8/12 lg:h-screen
             mx-auto flex flex-col overflow-hidden
            max-w-4xl
            2xl:max-w-6xl
            "
          >
            <div
              className="
              h-32
              "
            >
              <div
                className="
              lg:h-32
              flex flex-row-reverse
              pt-16
              "
              >
                {page === "Registry" && <ButtonRegistry text={"Registro"} />}
              </div>
            </div>

            <div
              className="
              lg:h-full
              "
            >
              <RegistryList data={data} page={page} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistryTemplate;
