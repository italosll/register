import { LoginProvider } from "../contexts/LoginContext";
import { RegistryProvider } from "../contexts/RegistryContext";
import Login from "./login";
import Registry from "./registry";

export default function Home() {
  return (
    <>
      <Login />
    </>
  );
}
