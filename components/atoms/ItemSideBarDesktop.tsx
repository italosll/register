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

    // <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    //   <path d="M0 0h24v24H0z" fill="none"/>
    //   <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="#fff"/>
    // </svg>

    // (background === "logo" && (
    //   <img
    //     className="
    //     w-12
    //     mx-auto
    //     my-4
    //     "
    //     src="/logo.svg"
    //   />
    // )) ||
    // (background === "dashboard" && (
    //   <img
    //     className="
    //     w-16
    //     mx-auto
    //     my-4
    //     "
    //     src="/dashboardIcon.svg"
    //   />
    // )) ||
    // (background === "registry" && (
    //   <img
    //     className="
    //     w-16
    //     mx-auto
    //     my-4
    //     "
    //     src="/registryIcon.svg"
    //   />
    // ))
  );
};
