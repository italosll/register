import { Input } from "./Input";
import React, { FunctionComponent, useEffect } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { ApolloProvider, gql, useMutation } from "@apollo/client";
import { RegistryContext } from "../../contexts/RegistryContext";
import Loading from "../molecules/Loading";

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

type Props = {
  text: string;
};

export const ButtonRegistry: FunctionComponent<Props> = ({ text }) => {
  const {
    openDrawer,
    closeDrawer,
    registerEvent,
    setIsLoading,
  } = React.useContext(RegistryContext);

  const [register, { error, loading }] = useMutation(REGISTERDATETIME);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  const registerDateTime = () => {
    register({
      variables: {
        input: {
          data: {
            timeRegistered: new Date(sessionStorage.getItem("dateTime")),
            user: sessionStorage.getItem("userId"),
          },
        },
      },
    })
      .then((data) => {
        closeDrawer();
      })

      .catch((error) => {
        alert("Ocorreu algum erro");
      });
  };

  return (
    <>
      <button
        onClick={() => {
          if (text === "Registro") {
            openDrawer();
            sessionStorage.setItem("dateTime", String(new Date()));
          }
          if (text === "Cancelar") closeDrawer();
          if (text === "Salvar") {
            registerDateTime();
          }
        }}
        type="button"
        className={`
        font-display font-black  text-white 
        mr-4 rounded-xl focus:outline-none
        border-solid border-2 border-primary
        w-full text-sm
        lg:w-36 
        lg:h-10 lg:rounded-none lg:text-sm 

      ${text === "Cancelar" ? "bg-none text-primary " : "bg-primary"}
      `}
      >
        {text}
      </button>
    </>
  );
};
