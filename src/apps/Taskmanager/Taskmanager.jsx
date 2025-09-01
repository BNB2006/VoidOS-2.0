export function Taskmanager(){
    return(
        <div className="bg-gray-700 h-full text-white">
            <div className="border-b border-gray-600 p-2">Performance</div>
            <div className="flex h-160">
                <div className="bg-red-400 w-60 p-2">
                    <div className="p-2 text-2xl">CPU</div>
                    <div className="p-2 text-2xl">Memory</div>
                    <div className="p-2 text-2xl">Disk</div>
                    <div className="p-2 text-2xl">Wi-Fi</div>
                    <div className="p-2 text-2xl">GPU</div>
                </div>

            <div className="bg-blue-400 flex-1 flex flex-col p-2 gap-2">
                <div>CPU</div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-1 gap-2">
                        <div className="bg-red-400 w-150 h-50">1</div>
                        <div className="bg-purple-400 w-150 h-50">2</div>
                    </div>
                    <div className="flex flex-1 gap-2">
                        <div className="bg-green-400 w-150 h-50">3</div>
                        <div className="bg-orange-400 w-150 h-50">4</div>
                    </div>
                </div>

                <div className="bg-red-400 w-302 h-30"></div>
                <div className="bg-red-400 w-302 h-40"></div>
            </div>
            </div>
        </div>
    )
}