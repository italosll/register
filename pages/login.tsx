import React, { useContext, useEffect, useState } from "react";
import { LoginContext, LoginProvider } from "../contexts/LoginContext";
import LoginTemplate from "../templates/login";

import { useMutation, gql, useQuery, FetchResult } from "@apollo/client";
import { useRouter } from "next/router";

const LOGIN = gql`
  mutation login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        username
        role {
          type
        }
      }
    }
  }
`;

const Login = () => {
  const [retrieveJwt, { data }] = useMutation(LOGIN);
  const router = useRouter();
  const { isLoginHandled, setIsLoginHandled, email, password } = useContext(
    LoginContext
  );

  useEffect(() => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userRole");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("userId");
  }, []);

  const login = () => {
    retrieveJwt({
      variables: {
        // Para facilitar os testes :)
        //input: { identifier: "admin@brainny.cc", password: "adminregister" },
        //input: { identifier: "maria@brainny.cc", password: "mariaregister" },
        //input: { identifier: "joao@brainny.cc", password: "joaoregister" },
        //input: { identifier: "amanda@brainny.cc", password: "amandaregister" },
        input: { identifier: email, password: password },
      },
    }).catch((error) => {
      alert("Ocorreu algum erro");
    });
  };

  useEffect(() => {
    if (isLoginHandled) {
      login();
      setIsLoginHandled(false);
    }
  }, [isLoginHandled]);

  useEffect(() => {
    let user = data?.login?.user;

    if (data !== undefined) {
      sessionStorage.setItem("userId", user?.id);
      sessionStorage.setItem(
        "userRole",
        user?.role?.type === "admin" ? "Administrador" : "Colaborador"
      );

      if (user?.username !== undefined)
        sessionStorage.setItem("userName", user?.username);

      if (user?.name !== undefined)
        sessionStorage.setItem("userName", user?.name);

      if (data?.login?.jwt !== undefined)
        sessionStorage.setItem("token", data?.login?.jwt);

      user?.role?.type === "admin" && router.push({ pathname: "/dashboard" });
      user?.role?.type === "user" &&
        router.push({ pathname: "/registry", query: { id: user?.id } });
    }
  }, [data]);

  return <LoginTemplate />;
};

export default Login;
