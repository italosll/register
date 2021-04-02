import { FunctionComponent } from "react";
import { ItemSideBarDesktop } from "../atoms/ItemSideBarDesktop";
import Logout from "../atoms/Logout";

interface User {
  id: String;
  username: String;
  role: String;
}

type Props = {
  page: String;
  user: User;
};

const SideBarDesktop: FunctionComponent<Props> = ({ page, user }) => {
  return (
    <div
      className="
      lg:w-24 lg:h-screen flex flex-row bg-white
      xl:w-28
      2xl:w-32
      "
    >
      <div
        className="
        lg:w-full lg:h-screen
         bg-white
        flex flex-col 
        "
      >
        <ItemSideBarDesktop background={"logo"} />
        <div className="w-16 h-px bg-gray-200 mx-auto" />

        <div
          className="
          flex flex-row
          "
        >
          <div
            className={`
          flex 
          ${page === "Dashboard" && `flex-col`}
          ${page === "Registry" && `flex-col-reverse`}
          `}
          >
            <div
              className={`
              w-1
              h-12 
              mt-2
              xl:h-16 xl:mt-1 xl:mb-2 xl:w-1

              2xl:h-16 2xl:mt-1 2xl:mb-2 2xl:w-2
              bg-primary
              rounded-full
              `}
            />
          </div>

          <div
            className="
            w-full
            flex flex-col
            "
          >
            {user.role === "Administrador" && (
              <>
                <ItemSideBarDesktop
                  background={"Dashboard"}
                  active={page === "Dashboard" && true}
                  id={user?.id}
                />
                <div className="w-16 h-px bg-gray-200 mx-auto" />
              </>
            )}

            <ItemSideBarDesktop
              background={"Registry"}
              active={page === "Registry" && true}
              id={user?.id}
            />
            <div className="w-16 h-px bg-gray-200 mx-auto" />
          </div>
        </div>

        <Logout />
      </div>
    </div>
  );
};
export default SideBarDesktop;
