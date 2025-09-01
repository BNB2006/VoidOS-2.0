
import { useEffect, useState } from "react"
import { Line, LineChart, ResponsiveContainer, YAxis } from "recharts";

export function Taskmanager(){
    const [option, setOption] = useState("GPU")
    const [cpuData, setCpuData] = useState([])

    useEffect(() => {
        const generateInitialData = (baseValue, variance = 10, points = 60) => {
            return Array.from({ length: points }, (_, i) => ({
                time: i,
                value: Math.max(0, Math.min(100, baseValue + (Math.random() - 0.5) * variance))
            }))
        }

        setCpuData(generateInitialData(27, 15))
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            const updateData = (prevData, baseValue, variance) => {
                const newData = [...prevData.slice(1)]
                const lastValue = prevData[prevData.length - 1]?.value || baseValue
                const change = (Math.random() - 0.5) * variance
                const newValue = Math.max(0, Math.min(100, lastValue + change))
                newData.push({
                    time: Date.now(),
                    value: newValue
                })
                return newData
            }

            setCpuData(prev => updateData(prev, 27, 8))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const GraphComponent = ({ data, color = "#00ff00", height = "100%" }) => (
        <ResponsiveContainer width="100%" height={height}>
            <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <YAxis domain={[0, 100]} hide />
                <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke={color} 
                    strokeWidth={1}
                    dot={false}
                    isAnimationActive={false}
                />
            </LineChart>
        </ResponsiveContainer>
    )

    const getCurrentValue = (data) => {
        return data.length > 0 ? Math.round(data[data.length - 1].value) : 0
    }


    return(
        <div className="bg-[#191919] h-full text-white">
            <div className="overflow-y-hidden">
            <div className="border-b border-gray-600 p-2">Performance</div>
            <div className="flex">
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
                    {option === "CPU" && (
                    <>
                    <div>
                        <div className="text-xl flex items-center justify-between">
                            <p>CPU</p>
                            <p>11th Gen Intel(R) Core(TM) i5-11320 @3.20GHz</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                        <p>% Utlization</p>
                        <p>{getCurrentValue(cpuData)}%</p>
                    </div>
                    <div className="h-60 p-4 border [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_32px),repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_32px)]">
                        <GraphComponent data={cpuData} color="#00ff41"/>
                    </div>
                    <div className="flex items-center justify-between text-gray-400 text-xs">
                        <p>60 seconds</p>
                        <p>0</p>
                    </div>

                    <div className="flex gap-5 mt-4">
                        <div>
                            <div className="flex gap-5">
                                <div>
                                    <p className="text-gray-500 text-sm">Utilization</p>
                                    <p>27%</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">speed</p>
                                    <p>3.28GHz</p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <div>
                                    <p className="text-gray-500 text-sm">Processess</p>
                                    <p>311</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Threads</p>
                                    <p>4785</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Handles</p>
                                    <p>173463</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Up time</p>
                                <p>15:07:53:22</p>
                            </div>
                        </div>

                        <div className="w-50 flex justify-between">
                            <div className="text-gray-500 text-sm">
                                <p>Base speed:</p>
                                <p>Scokets:</p>
                                <p>Cores:</p>
                                <p>Logical processors:</p>
                                <p>Virtualization:</p>
                                <p>L1 cache:</p>
                                <p>L2 cache:</p>
                                <p>L3 cache</p>
                            </div>
                            <div className="text-sm">
                                <p>3.19 GHz</p>
                                <p>1</p>
                                <p>4</p>
                                <p>8</p>
                                <p>Enabled</p>
                                <p>320 Kb</p>
                                <p>5.0 MB</p>
                                <p>8.0 MB</p>
                            </div>
                        </div>
                    </div>
                    </>
                    )}

                    {/* <div className="text-xl">{option}</div>
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
                    )} */}
                </div>
            </div>
            </div>
        </div>
    )
}
