import { CloudSun, BatteryMedium, Headphones, Sun, Cpu, Power, RefreshCcw, Lock, Moon, LogOut, ThermometerSunIcon, SkipBack, Play, SkipForward, Pause } from "lucide-react"
import { useContext, useEffect, useState } from "react";
import { SystemContext } from "../../context/SystemContext";

export function Sidebar({ spotify, currentSong, isPlaying, onPlayPause, onNext, onBack }) {
    const [currentTime, setCurrentTime] = useState(new Date())
    const {restart, shutdown} = useContext(SystemContext);

    const [sound, setSound] = useState(50);
    const [brightness, setBrightness] = useState(50);
    const [cpu, setCpu] = useState(30);
    const [battery, setBattery] = useState(69)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date())
      }, 1000);
    
      return () => {
        clearInterval(timer)
      }
    }, []);

    useEffect(() => {
      const interval = setInterval(()=>{
        setCpu(Math.floor(Math.random()*80) + 10);
        setBattery((prev) => (prev > 10 ? prev -1 : 100));
      }, 1000);

      return () => clearInterval(interval);
    });


  return(
        <div className="absolute right-2 bottom-15 w-70">

            <div className="py-1">
              <div className="grid grid-cols-3">
                <div className="w-18 p-1 bg-black/70 rounded-md flex flex-col items-center justify-center">
                  <div className="text-red-400 text-2xl">{currentTime.getDate()}</div>
                  <div className="text-xs">{currentTime.toLocaleString([], {month: "long"})}</div>
                </div>
                <div className="col-span-2  bg-black/70 rounded-md flex items-center justify-between">
                  <div className="p-3 ml-4 text-blue-400"><CloudSun size={34}/></div>
                  <div className="mr-5 text-sm text-center py-2">
                    <div className="flex items-center gap-2">28°C <ThermometerSunIcon className="text-yellow-200"/></div>
                    <div className="text-red-400">Sun</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-1">
              <div className=" bg-black/70 rounded-md flex items-center px-9 gap-2 p-2">
                <div className="w-16 h-16">
                  <img src="/assets/image/sand-watch.webp" alt="" className="" />
                </div>
                <div className="flex flex-col items-center justify-center">
                <div className="text-4xl">{currentTime.getHours()} : <span className="text-red-400">{currentTime.getMinutes()}</span></div>
                <div className="text-green-400">{currentTime.toLocaleString([], {weekday: "long"})}</div>
                </div>
              </div>
            </div>

          <div className="py-1">
            <div className=" bg-black/70 flex gap-2 p-3 rounded-md">
              <div className="w-15"><img src={spotify[currentSong].imgUrl} alt="" className="rounded" /></div>
              <div className="flex flex-col items-center justify-center px-5">
                <div className="text-sm text-red-200">{spotify[currentSong].song}</div>
                <div className="flex items-center gap-3 mt-2">
                  <button onClick={onBack}><SkipBack /></button>
                  <button onClick={onPlayPause}>
                    {isPlaying ? <Pause className="text-red-400" /> : <Play className="text-red-400" />}
                  </button>
                  <button onClick={onNext}><SkipForward /></button>
                </div>
              </div>
            </div>
          </div>

            <div className="py-1">
              <div className=" bg-black/70 rounded-md p-7">

                <div className="flex items-center space-x-3 py-1 text-purple-400">
                  <div><Headphones/></div>
                  <div className="flex-1 flex items-center gap-2">
                    <input className="w-full h-2 rounded-lg bg-gray-600 accent-purple-400" type="range" min="0" max="100" value={sound} onChange={(e) => setSound(e.target.value)}/>
                    <div className="text-xs">
                      {Math.round(sound)}%
                    </div>
                  </div>
              </div>

                <div className="flex items-center space-x-3 py-1 text-red-400">
                  <div className=""><Sun/></div>
                  <div className="flex-1 flex items-center gap-2">
                    <input className="w-full h-2 rounded-lg bg-gray-600 accent-red-400" type="range" min="0" max="100" value={brightness} onChange={(e) => setBrightness(e.target.value)} />
                    <span className="text-xs">
                      {Math.round(brightness)}%</span>
                  </div>
              </div>

                <div className="flex items-center space-x-3 py-1 text-blue-400">
                  <div><Cpu/></div>
                  <div className="flex-1 bg-gray-600 rounded-full h-2 relative">
                    <div className="bg-blue-400 h-2 rounded-full" style={{width: `${cpu}%`}}/>
                  </div>
                    <div className="text-xs">
                      {Math.round(cpu)}%
                    </div>
              </div>
 
                <div className="flex items-center space-x-3 py-1 text-green-400">
                  <div><BatteryMedium/></div>
                  <div className="flex-1 bg-gray-600 rounded-full h-2 relative">
                    <div className="bg-green-400 h-2 rounded-full" style={{width: `${battery}%`}}></div>
                  </div>
                  <div className="text-xs">
                    {Math.round(battery)}%
                  </div>
              </div>
              </div>
            </div>

            <div className="py-1">
              <div className=" bg-black/70 rounded-md p-7">
                <input type="text" className="bg-gray-600 p-1 rounded-md ml-2 text-center outline-none" placeholder="🔍Seach..." />
                <div className="flex items-center justify-around mt-3">
                  <button onClick={shutdown} title="Shutdown" className="text-red-400 cursor-pointer">
                    <Power />
                  </button>
                  <button title="Restart" className="text-violet-300 cursor-pointer" onClick={restart}>
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
          </div>
    )
}