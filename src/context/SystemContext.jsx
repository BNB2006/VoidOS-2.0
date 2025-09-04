import { createContext, useState } from "react";

export const SystemContext = createContext();

export function SystemProvider({children}){
    const [systemState, setSystemState] = useState("running")

    const shutdown = () => {
        setSystemState("shutting-down");
        setTimeout(()=>{
            setSystemState("off");
        }, 3000);
    };

    const powerON = () => {
        setSystemState("loading");
        setTimeout(()=>{
            setSystemState("running");
        }, 3000)
    }

    const restart = () => {
        setSystemState("restarting");
        setTimeout(()=>setSystemState("running"), 3000);
    }

return(
    <SystemContext.Provider value={{systemState, restart, shutdown, powerON}}>
        {children}
    </SystemContext.Provider>
)
}