import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";
import RegistryTemplate from "../templates/registry";

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const REGISTRY = gql`
  query {
    registeredTimes {
      user {
        id
        username
      }
      timeRegistered
    }
  }
`;

const Dashboard = () => {
  const { loading, error, data } = useQuery(REGISTRY);
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");

  const router = useRouter();

  if (userRole !== "Administrador" && userRole !== "") {
    alert("Você não tem permissão para acessar esta página");
    router.replace({ pathname: "/registry" });
  }

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
    <RegistryTemplate
      page={"Dashboard"}
      user={{ username: userName, id: userId, role: userRole }}
      data={data}
    />
  );
};

export default Dashboard;
