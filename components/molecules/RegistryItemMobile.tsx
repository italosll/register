import { FunctionComponent } from "react";
import { TextNunitoRegular } from "../atoms/TextNunitoRegular";

type Props = {
  formatedRegistry: {
    id: String;
    name: String;
    formatedDate: String;
    formatedHour: String;
  };
  page: String;
};

export const RegistryItemMobile: FunctionComponent<Props> = ({
  formatedRegistry,
  page,
}) => {
  return (
    <>
      <div
        className="
        h-32 bg-gray-50 m-4 rounded-lg flex flex-row items-center  shadow-md
        lg:hidden 
        "
      >
        <div
          className="
          w-64
          space-y-2
          pl-6
          flex flex-col
          "
        >
          {page === "Dashboard" && (
            <div
              className="
              h-1 w-12    rounded-full
              bg-secundary
              "
            />
          )}
          <div
            className="
            flex flex-row
            space-x-1
            "
          >
            <TextNunitoRegular
              text={formatedRegistry?.name}
              type={"name"}
              platform={"mobile"}
            />
            <TextNunitoRegular
              text={formatedRegistry?.id}
              type={"id"}
              platform={"mobile"}
            />
          </div>

          <div
            className="
            flex flex-row
            space-x-1
            
            "
          >
            <TextNunitoRegular
              text={formatedRegistry?.formatedDate}
              type={"date"}
              platform={"mobile"}
            />
          </div>

          <div
            className="
            flex flex-row
            space-x-1
            "
          >
            <TextNunitoRegular
              text={formatedRegistry?.formatedHour}
              type={"hour"}
              platform={"mobile"}
            />
          </div>
        </div>

        {page === "Registry" && (
          <div
            className="
            h-12 w-1  my-auto ml-auto mr-4 rounded-full
            bg-secundary
            "
          />
        )}
      </div>
    </>
  );
};
