import { Bell, Menu, Mic, Plus, Search } from "lucide-react";
import { useState } from "react";

export function Youtube(){
    const [toggleNotification, setToggleNotification] = useState(false);

    return(
    <>
    <div className="bg-[#0f0f0f] w-full h-full text-white overflow-y-hidden overflow-x-hidden">

        <div className="p-2 flex items-center justify-between">
                <div className=" flex items-center">
                    <button className="mr-2 cursor-not-allowed"><Menu/></button>
                    <img src="/Logo/youtube.png" alt="youtube logo" className="w-5"/>
                    <span className="text-white text-xl">YouTube</span>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center rounded-full border border-gray-400">
                        <input type="text" className="p-2 w-90 outline-none" placeholder="Search..."/>
                        <button type="submit" className="py-2 px-3 bg-[#222222] rounded-r-full cursor-not-allowed"><Search/></button>
                    </div>
                    <div className="bg-[#222222] w-10 h-10 flex items-center justify-center rounded-full cursor-not-allowed"><Mic className=""/></div>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1 bg-[#222222]  p-2 rounded-full text-sm  cursor-not-allowed">
                        <Plus/>
                        <span>Create</span>
                    </div>
                    <Bell size={22} onClick={()=> setToggleNotification(!toggleNotification)} className={`cursor-pointer ${toggleNotification ? 'fill-current' : ''}`}/>
                    <img src="https://i.pinimg.com/originals/95/1b/7e/951b7e1c05c3cdfc5ffd514ff4ccc23c.jpg?nii=t" className="w-10 h-10 rounded-full" alt="" />
                </div>
            </div>

            {toggleNotification && (
                <div className="bg-[#282828] absolute right-5 w-[400px] h-[500px] rounded-lg shadow-xl border border-gray-600">
                    <div className="p-4 border-b border-gray-600 flex items-center">
                        <span className="text-white font-medium">Notification</span>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full p-8">
                        <div className="w-20 h-20 rounded-full bg-[#3f3f3f] flex items-center justify-center m-6">
                            <Bell className="text-gray-500" size={32}/>
                        </div>
                        <div className="text-center">
                            <h3 className="text-white text-lg font-medium mb-2">Your notification live here</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                                Subscribe to your favourite channels to receive notifications about their latest videos.
                            </p>
                        </div>
                    </div>
                </div>
            )}


        <div className="flex w-full h-full bg-blue-400"></div>

    </div>
    </>
    )
}