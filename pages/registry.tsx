import { useMutation, useQuery } from "@apollo/client";
import { Transition } from "@headlessui/react";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import { AsyncLocalStorage } from "node:async_hooks";
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/molecules/Loading";

import DrawerDesktop from "../components/organisms/DrawerDesktop";
import DrawerMobile from "../components/organisms/DrawerMobile";
import { RegistryContext } from "../contexts/RegistryContext";
import RegistryTemplate from "../templates/registry";

function getMyRegistry(id: String) {
  const REGISTRY = gql`
    query {
      registeredTimes(where: { user: { id: ${id} } }) {
        timeRegistered
        user {
          id
          name
        }
      }
    }
  `;
  return REGISTRY;
}

const REGISTERDATETIME = gql`
  mutation createRegisteredTime($input: createRegisteredTimeInput!) {
    createRegisteredTime(input: $input) {
      registeredTime {
        id
        timeRegistered
      }
    }
  }
`;

function formatDateTime(setAtualDateTime) {
  let dateHour = new Date();
  let formatedDateTime =
    dateHour.getDate() +
    "/" +
    (dateHour.getMonth() + 1) +
    "/" +
    dateHour.getFullYear() +
    "  " +
    dateHour.getHours() +
    ":" +
    dateHour.getMinutes();

  setAtualDateTime(new Date());

  return formatedDateTime as String;
}

type Props = {
  userIdProp: String;
};

const Registry: FunctionComponent<Props> = ({ userIdProp }) => {
  const {
    isDrawerOpen,
    isRegisterHandled,
    setIsRegisterHandled,
    atualDateTime,
    setAtualDateTime,
    closeDrawer,
    setRegisterEvent,
    registerEvent,
    isLoading,
    setIsLoading,
  } = React.useContext(RegistryContext);

  const { data } = useQuery(getMyRegistry(userIdProp));
  //const [register, { error, loading }] = useMutation(REGISTERDATETIME);
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const router = useRouter();

  const [isLoadingFinished, setIsLoadindFinished] = useState("");

  const [register, { error, loading }] = useMutation(REGISTERDATETIME);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  // console.log("data->", atualDateTime);

  // const registerDateTime = () => {
  //   register({
  //     variables: {
  //       input: {
  //         data: { timeRegistered: "2021-04-02T07:00:48.839Z", user: "1" },
  //       },
  //     },
  //   })
  //     .then((data) => {
  //       console.log("data", data);
  //     })

  //     .catch((error) => {
  //       alert("Ocorreu algum erro");
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   console.log("teste");
  //   registerDateTime();
  // }, []);

  // useEffect(() => {
  //   if (isRegisterHandled) {
  //     registerDateTime();
  //     setIsRegisterHandled(false);
  //   }
  // }, [isRegisterHandled]);

  // if (isRegisterHandled) {
  //   setIsRegisterHandled(false);
  //   console.log("fui chamado");
  //   registerDateTime();
  // }

  useEffect(() => {
    const jwt = sessionStorage.getItem("token");
    if (jwt === null) {
      router.replace({ pathname: "/login" });
    }
    setUserId(sessionStorage.getItem("userId"));
    setUserName(sessionStorage.getItem("userName"));
    setUserRole(sessionStorage.getItem("userRole"));
  }, []);

  return (
    <>
      {isLoading && <Loading />}

      {/* <Loading /> */}

      {userId !== "" && userIdProp === undefined && (
        <Registry userIdProp={userId} />
      )}

      {userId === "" ||
        (userIdProp !== undefined && (
          <div className="static">
            {isDrawerOpen && (
              <>
                <>
                  <DrawerDesktop
                    dateTime={formatDateTime(setAtualDateTime)}
                    role={userRole}
                    name={userName}
                  />
                  <DrawerMobile
                    dateTime={formatDateTime(setAtualDateTime)}
                    role={userRole}
                    name={userName}
                  />
                </>
              </>
            )}

            {userId !== "" && (
              <RegistryTemplate
                page={"Registry"}
                user={{ id: userIdProp, username: userName, role: userRole }}
                data={data}
              />
            )}
          </div>
        ))}
    </>
  );
};

export default Registry;
