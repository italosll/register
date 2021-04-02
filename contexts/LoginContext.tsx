import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { useMutation, gql, useQuery, FetchResult } from "@apollo/client";
import { useRouter } from "next/router";

// const LOGIN = gql`
//   mutation login($input: UsersPermissionsLoginInput!) {
//     login(input: $input) {
//       jwt
//       user {
//         id
//         username
//         role {
//           type
//         }
//       }
//     }
//   }
// `;

interface User {
  id: String;
  username: String;
  role: {
    type: String;
  };
}

interface LoginData {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  isLoginHandled: Boolean;
  setIsLoginHandled: Dispatch<SetStateAction<Boolean>>;
}
export const LoginContext = createContext({} as LoginData);

export function LoginProvider({ children, ...rest }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoginHandled, setIsLoginHandled] = useState(false);

  // const [retrieveJwt, { data }] = useMutation(LOGIN);
  const router = useRouter();

  const [user, setUser] = useState({} as User);

  // const login = () => {
  //   retrieveJwt({
  //     variables: {
  //       input: { identifier: "admin@brainny.cc", password: "adminregister" },
  //       //input: { identifier: "maria@brainny.cc", password: "mariaregister" },
  //     },
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // };

  // useEffect(() => {
  //   let user = data?.login?.user;

  //   if (data !== undefined) {
  //     console.log("return", user);

  //     sessionStorage.setItem("userId", user?.id);
  //     sessionStorage.setItem(
  //       "userRole",
  //       user?.role?.type === "admin" ? "Administrador" : "Colaborador"
  //     );

  //     if (user?.username !== undefined)
  //       sessionStorage.setItem("userName", user?.username);

  //     if (user?.name !== undefined)
  //       sessionStorage.setItem("userName", user?.name);

  //     if (data?.login?.jwt !== undefined)
  //       localStorage.setItem("token", data?.login?.jwt);

  //     user?.role?.type === "admin" && router.push({ pathname: "/dashboard" });
  //     user?.role?.type === "user" &&
  //       router.push({ pathname: "/registry", query: { id: user?.id } });
  //   }
  // }, [data]);

  return (
    <LoginContext.Provider
      value={{
        isLoginHandled,
        setIsLoginHandled,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
