import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { RegistryContext } from "../../contexts/RegistryContext";
import Logout from "../atoms/Logout";

type Props = {
  user: {
    id: string;
    username: String;
    role: String;
  };
};

const SideBarMobile: FunctionComponent<Props> = ({ user }) => {
  const { closeMobileSideBar } = React.useContext(RegistryContext);
  const router = useRouter();

  console.log(user);

  return (
    <div
      className="
      w-screen h-full bg-black bg-opacity-5 fixed
      "
    >
      <div
        className="
        w-56 h-screen absolute flex flex-col z-20
        "
      >
        <div
          className="
        bg-gray-800 w-full h-52  pl-6 text-secundary space-y-1
        "
        >
          <p
            className="
             font-bold text-3xl font-registry mt-8 
            "
          >
            Olá,
          </p>
          <p
            className="
             font-semibold text-md font-registry
            "
          >
            {user?.username}
          </p>
          <p
            className="
            font-regular text-xs font-registry
            "
          >
            {user?.role}
          </p>
        </div>

        <div
          className="
        bg-secundary w-full h-full pl-6 space-y-10 pt-10  
          flex flex-col
          "
        >
          <div
            className="
            w-full h-full  space-y-10   
            "
          >
            {user.role === "Administrador" && (
              <img
                onClick={() => {
                  closeMobileSideBar();
                  router.replace({ pathname: "/dashboard" });
                }}
                className="h-6"
                src="/dashboardMobile.svg"
              />
            )}

            <img
              onClick={() => {
                closeMobileSideBar();
                router.replace({
                  pathname: "/registry",
                  query: { id: user?.id },
                });
              }}
              className="h-6"
              src="/registryMobile.svg"
            />
          </div>

          <Logout />
        </div>
      </div>
      <div
        onClick={closeMobileSideBar}
        className="
        fixed right-0 z-10 w-3/4 h-screen flex flex-col
        "
      />
    </div>
  );
};
export default SideBarMobile;
