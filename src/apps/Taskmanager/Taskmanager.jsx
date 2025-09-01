
import { useState } from "react"

export function Taskmanager(){
    const [option, setOption] = useState("GPU")


    return(
        <div className="bg-[#191919] h-full text-white">
            <div className="border-b border-gray-600 p-2">Performance</div>
            <div className="flex h-160">
                <div className="w-[15%] p-2">
                    <div onClick={() => setOption("CPU")} className="p-2 cursor-pointer hover:bg-black/20">
                        <p className="text-2xl">CPU</p>
                        <p className="text-sm">27% 3.28GHz</p>
                    </div>
                    <div onClick={() => setOption("Memory")} className="p-2 cursor-pointer hover:bg-black/20">
                        <p>Memory</p>
                        <p className="text-sm">9.0/16 GB (56%)</p>
                    </div>
                    <div onClick={() => setOption("Disk")} className="p-2 cursor-pointer hover:bg-black/20">
                        <p>Disk</p>
                        <p className="text-sm">SSD 27%</p>
                    </div>
                    <div onClick={() => setOption("Wi-Fi")} className="p-2 cursor-pointer hover:bg-black/20">
                        <p>Wi-Fi</p>
                        <p className="text-sm">wi-fi 5.5 Mbps</p>
                    </div>
                    <div onClick={() => setOption("GPU")} className="p-2 cursor-pointer hover:bg-black/20">
                        <p>GPU</p>
                        <p className="text-sm">NVIDIA GeForce RTX 2050</p>
                        <span className="text-sm">0% (39 °C)</span>
                    </div>
                </div>

                <div className=" flex-1 flex flex-col p-2 gap-2">
                    <div className="text-xl">{option}</div>
                    {option !== "GPU" ? (
                        <>
                        <div className="w-[100%] h-[70%] border [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_32px),repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_32px)]">
                            
                        </div>
                        </>
                    ) :(
                        <>
                        <div className="flex flex-col gap-4">
                        <div className="flex flex-1 gap-2">
                            <div class="w-[50%] h-50 border bg-[length:32px_32px] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_32px),repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_32px)]">3D</div>
                            <div className="w-[50%] h-50 border bg-[length:32px_32px] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_32px),repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_32px)]">Copy</div>
                        </div>
                        <div className="flex flex-1 gap-2">
                            <div className="w-[50%] h-50 border bg-[length:32px_32px] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_32px),repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_32px)]">Video Decode</div>
                            <div className="w-[50%] h-50 border bg-[length:32px_32px] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_32px),repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_32px)]">Video Processing</div>
                        </div>
                    </div>

                    <div className="w-[100%] h-30 border bg-[length:32px_32px] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_7px),repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_32px)]"></div>

                    <div className="w-[100%] h-40 border"></div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
