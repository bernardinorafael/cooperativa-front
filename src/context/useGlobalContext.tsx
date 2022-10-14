import { createContext, ReactNode } from "react"

interface GlobalProviderProps {
   children: ReactNode
}

interface GlobalContextProps {}

export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps)

export function GlobalProvider({ children }: GlobalProviderProps) {
   return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
}
