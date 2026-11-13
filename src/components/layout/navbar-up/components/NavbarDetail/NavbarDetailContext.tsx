"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface NavbarDetailState {
  isSaved: boolean;
  onSave?: () => void;
}

interface NavbarDetailContextType extends NavbarDetailState {
  setNavbarDetail: (state: NavbarDetailState) => void;
}

const defaultState: NavbarDetailState = {
  isSaved: false,
  onSave: undefined,
};

const NavbarDetailContext =
  createContext<NavbarDetailContextType | null>(null);

export function NavbarDetailProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [navbarState, setNavbarState] =
    useState<NavbarDetailState>(defaultState);

  const setNavbarDetail = useCallback(
    (state: NavbarDetailState) => {
      setNavbarState(state);
    },
    [],
  );

  return (
    <NavbarDetailContext.Provider
      value={{ ...navbarState, setNavbarDetail }}
    >
      {children}
    </NavbarDetailContext.Provider>
  );
}

export function useNavbarDetail() {
  const context = useContext(NavbarDetailContext);

  if (!context) {
    throw new Error(
      "useNavbarDetail must be used inside NavbarDetailProvider",
    );
  }

  return context;
}