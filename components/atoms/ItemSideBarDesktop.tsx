import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { LoginContext } from "../../contexts/LoginContext";

type Props = {
  background: string;
  active?: Boolean;
  id?: String;
};

export const ItemSideBarDesktop: FunctionComponent<Props> = ({
  background,
  active,
  id,
}) => {
  const router = useRouter();

  return (
    <>
      <img
        onClick={() => {
          background === "Dashboard" &&
            router.replace({ pathname: "/dashboard" });
          background === "Registry" &&
            router.replace({ pathname: "/registry", query: { id: id } });
        }}
        className={`
        w-14
        xl:w-20
       
        ${background === "registry" && "w-16"}
        mx-auto
        my-4
      `}
        src={`${
          background === "logo"
            ? `/logo.svg`
            : background === "Dashboard"
            ? active === true
              ? `/dashboardIconGreen.svg`
              : `/dashboardIcon.svg`
            : background === "Registry"
            ? active === true
              ? `/registryIconGreen.svg`
              : `/registryIcon.svg`
            : ""
        }`}
      />
    </>
  );
};
