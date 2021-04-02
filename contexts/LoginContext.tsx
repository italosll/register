import { createContext, Dispatch, SetStateAction, useState } from "react";

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

  return (
    <LoginContext.Provider
      value={{
        setIsLoginHandled,
        setEmail,
        setPassword,
        email,
        password,
        isLoginHandled,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
