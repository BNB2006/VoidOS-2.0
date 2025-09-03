import { createContext, useState } from "react";

export const SystemContext = createContext();

export function SystemProvider({children}){
    const [systemState, setSystemState] = useState("running")

    //I will add here other states

return(
    <SystemContext.Provider value={{systemState}}>
        {children}
    </SystemContext.Provider>
)
}