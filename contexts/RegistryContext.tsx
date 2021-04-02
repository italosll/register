import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { LoginContext } from "./LoginContext";

interface RegistryData {
  openDrawer: () => void;
  closeDrawer: () => void;
  openMobileSideBar: () => void;
  closeMobileSideBar: () => void;
  registerEvent: Promise<void>;
  setAtualDateTime: Dispatch<SetStateAction<String | Date>>;
  setIsRegisterHandled: Dispatch<SetStateAction<Boolean>>;
  setRegisterEvent: Dispatch<SetStateAction<Promise<void>>>;
  setIsLoading: Dispatch<SetStateAction<Boolean>>;
  isLoading: Boolean;
  atualDateTime: String | Date;
  isRegisterHandled: Boolean;
  isDrawerOpen: boolean;
  isMobileSideBarOpen: Boolean;
}
export const RegistryContext = createContext({} as RegistryData);

export function RegistryProvider({ children, ...rest }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileSideBarOpen, setIsMobileSideBarOpen] = useState(false);
  const [atualDateTime, setAtualDateTime] = useState();
  const [isRegisterHandled, setIsRegisterHandled] = useState(false);
  const [registerEvent, setRegisterEvent] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function openDrawer() {
    setIsDrawerOpen(true);
  }
  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  function openMobileSideBar() {
    setIsMobileSideBarOpen(true);
  }
  function closeMobileSideBar() {
    setIsMobileSideBarOpen(false);
  }

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [isRegisterHandled]);

  useEffect(() => {
    //console.log("useeffect_ Contexto", isDrawerOpen);
  }, [isDrawerOpen]);

  return (
    <RegistryContext.Provider
      value={{
        openDrawer,
        closeDrawer,
        openMobileSideBar,
        closeMobileSideBar,
        setAtualDateTime,
        setIsRegisterHandled,
        setRegisterEvent,
        setIsLoading,
        isLoading,
        registerEvent,
        isRegisterHandled,
        atualDateTime,
        isDrawerOpen,
        isMobileSideBarOpen,
      }}
    >
      {children}
    </RegistryContext.Provider>
  );
}
