import { Lock, LogOut, Moon, Power, RefreshCcw } from "lucide-react"
import { SystemContext } from "../../context/SystemContext";
import { useContext } from "react";

const PowerWidget = ({isSidebar}) => {
    const {restart, shutdown} = useContext(SystemContext);
    return(
        <div className={`${isSidebar ? 'py-1' : 'absolute right-2 bottom-15 w-70'}`}>
            <div className=" bg-black/70 rounded-md p-7">
                <input type="text" className="bg-gray-600 p-1 rounded-md ml-2 text-center outline-none" placeholder="🔍Seach..." />
                <div className="flex items-center justify-around mt-3">
                  <button onClick={shutdown} title="Shutdown" className="text-red-400 cursor-pointer">
                    <Power />
                  </button>
                  <button  onClick={restart} title="Restart" className="text-violet-300 cursor-pointer">
                    <RefreshCcw />
                  </button>
                  <button title="comming soon..." className="text-green-300 cursor-not-allowed">
                    <Lock />
                  </button>
                  <button title="comming soon..." className="text-blue-300 cursor-not-allowed">
                    <Moon />
                  </button>
                  <button title="comming soon..." className="text-orange-300 cursor-not-allowed">
                    <LogOut />
                  </button>
                </div>
            </div>
        </div>
    )
};

export default PowerWidget;