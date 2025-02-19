import { createContext } from "react";

export interface Iuser {
  auth_Id: string;
  name: string;
  email: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
