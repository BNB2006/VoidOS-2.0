
import { useContext, useEffect, useRef, useState } from "react"
import { Desktop } from "./components/Desktop/Desktop"
import { Taskbar } from "./components/Taskbar/Taskbar"
import { WindowManager } from "./components/WindowManager/WindowManager"
import { SystemContext } from "./Context/SystemContext"
import Loader from "./components/Power/Loader"

function App() {
  const { systemState } = useContext(SystemContext)
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  const startLoader = () => {
    if(intervalRef.current) clearInterval(intervalRef.current);
    setProgress(0);
    setIsLoading(true);

    intervalRef.current = setInterval(()=>{
      setProgress(prev => {
        if(prev>=100){
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setTimeout(()=>{
            setIsLoading(false);
            setProgress(0);
          }, 500);
          return 100;
        }
        return prev+10;
      });
    }, 200)
  };

  useEffect(() => {
    startLoader();
    return () => intervalRef.current && clearInterval(intervalRef.current)
  }, []);

  useEffect(()=>{
    if(systemState === "restarting" | systemState === "loading") startLoader();
  }, [systemState]);
  
  if(systemState === "restarting") return <Loader progress={progress} message="Restarting"/>

  if( isLoading | systemState === "loading") return <Loader progress={progress} message="Loading"/>

  return (
    <div className="h-screen w-full overflow-hidden">
      <WindowManager>
        <Desktop/>
        <Taskbar/>
    </WindowManager>
    </div>
  )
}

export default App
