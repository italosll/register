import { FunctionComponent } from "react";
import { TextNunitoRegular } from "../atoms/TextNunitoRegular";

type Props = {
  formatedRegistry: {
    id: String;
    name: String;
    formatedDate: String;
    formatedHour: String;
  };
};

export const RegistryItemDesktop: FunctionComponent<Props> = ({
  formatedRegistry,
}) => {
  return (
    <div
      className="
      hidden
      lg:bg-white lg:mx-4 lg:rounded-lg lg:flex lg:items-center  lg:shadow-md  lg:p-2 lg:m-2
      xl:p-4 
      "
    >
      <div
        className="
        lg:flex lg:flex-row 
        "
      >
        <div
          className="
          lg:h-7 lg:w-1 lg:ml-4 lg:my-auto lg:mr-16 lg:rounded-full
          lg:bg-primary
          "
        />
        <div
          className="
          lg:w-36
          lg:flex lg:flex-col
          xl:w-44
          2xl:w-64
          "
        >
          <TextNunitoRegular
            text={formatedRegistry?.name}
            type={"name"}
            platform="desktop"
          />
          <TextNunitoRegular
            text={formatedRegistry?.id}
            type={"id"}
            platform="desktop"
          />
        </div>
      </div>

      <div
        className="
        lg:w-72
        lg:flex lg:justify-center lg:mr-10
        xl:w-96 xl:mr-0 xl:ml-10
        2xl:ml-10
      
        "
      >
        <TextNunitoRegular
          text={formatedRegistry?.formatedDate}
          type={"date"}
          platform="desktop"
        />
      </div>

      <div
        className="
        mr-5
        lg:w-52
        lg:flex lg:flex-row-reverse
        xl:w-96
     
        "
      >
        <TextNunitoRegular
          text={formatedRegistry?.formatedHour}
          type={"hour"}
          platform="desktop"
        />
      </div>
    </div>
  );
};
