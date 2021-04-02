import { FunctionComponent } from "react";
import { RegistryItemDesktop } from "../molecules/RegistryItemDesktop";
import { RegistryItemMobile } from "../molecules/RegistryItemMobile";

type Props = {
  page: String;
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

type FormatedRegistry = {
  id: String;
  name: String;
  formatedDate: String;
  formatedHour: String;
};

function format(registry) {
  let user = registry?.user;
  let id = registry?.user?.id;
  let dateHour = new Date(registry?.timeRegistered);
  let formatedDate =
    dateHour.getDate() +
    "/" +
    (dateHour.getMonth() + 1) +
    "/" +
    dateHour.getFullYear();

  let name = user?.username === undefined ? user?.name : user?.username;
  let formatedHour = dateHour.getHours() + ":" + dateHour.getMinutes() + "h";

  return { id, name, formatedDate, formatedHour } as FormatedRegistry;
}

const RegistryList: FunctionComponent<Props> = ({ data, page }) => {
  return (
    <>
      <div
        className="
        lg:h-10 
        lg:flex lg:flex-row lg:justify-between lg:mr-20 lg:mt-12 lg:ml-6
        "
      >
        <p className="hidden lg:block lg:text-xl lg:text-gray-600 lg:font-registry">
          Colaborador
        </p>
        <p className="hidden lg:block lg:text-xl lg:text-gray-600 lg:font-registry">
          Data
        </p>
        <p className="hidden lg:block lg:text-xl lg:text-gray-600 lg:font-registry">
          Hora
        </p>
      </div>

      <div
        className="
        mt-16
        lg:mt-0
        lg:overflow-auto lg:flex lg:flex-col
        lg:h-3/5

        
        
        "
      >
        {data?.registeredTimes?.map((item, index) => {
          let formatedRegistry = format(item);
          if (formatedRegistry !== undefined) {
            return (
              <>
                <RegistryItemMobile
                  key={index + "mobile"}
                  formatedRegistry={formatedRegistry}
                  page={page}
                />
                <RegistryItemDesktop
                  key={index + "desktop"}
                  formatedRegistry={formatedRegistry}
                />
              </>
            );
          }
        })}
      </div>
    </>
  );
};

export default RegistryList;
