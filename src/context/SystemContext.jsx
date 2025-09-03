import { createContext, useState } from "react";

export const SystemContext = createContext();

export function SystemProvider({children}){
    const [systemState, setSystemState] = useState("running")

    const restart = () => {
        setSystemState("restarting");
        setTimeout(()=>setSystemState("running"), 3000);
    }

return(
    <SystemContext.Provider value={{systemState, restart}}>
        {children}
    </SystemContext.Provider>
)
}