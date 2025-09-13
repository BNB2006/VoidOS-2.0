import { createContext, useContext, useState } from "react";

const VolumeContext = createContext();

export const VolumeProvider = ({ children }) => {
    const [volume, setVolume] = useState(50);
    return(
        <VolumeContext.Provider value={{ volume, setVolume }}>
            {children}
        </VolumeContext.Provider>
    )
}

export const useVolume = () => useContext(VolumeContext);