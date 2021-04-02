import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";
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
    setAtualDateTime,
    isLoading,
    setIsLoading,
  } = React.useContext(RegistryContext);

  const { data } = useQuery(getMyRegistry(userIdProp));
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const router = useRouter();

  const [isLoadingFinished, setIsLoadindFinished] = useState("");

  const [register, { error, loading }] = useMutation(REGISTERDATETIME);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

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
