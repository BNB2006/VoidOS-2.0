"use client"

import { useState, useEffect, useRef } from "react"
import { useWindowManager } from '../WindowManager/WindowManager'
import { Sidebar } from "./Sidebar"
import { HeadphoneOff, Headphones, Power } from "lucide-react"
import MusicWidget from "./MusicWidget"
import PowerWidget from "./PowerWidget"
import { useVolume } from "../../context/volumeContext"
import { motion, AnimatePresence } from "framer-motion"

export function Taskbar() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const { windows, focusWindow, minimizeWindow, restoreWindow } = useWindowManager()
  const [sideBar, setSideBar] = useState(false);
  const [musicWidget, setMusicWidget] = useState(false);
  const [powerWidget, setPowerWidget] = useState(false);

  const [spotify] = useState([
    { song: "Gone Gone Gone", imgUrl: "/assets/image/song1.jpg", songUrl: "/assets/audio/Phillip.mp3" },
    { song: "We dont talk", imgUrl: "/assets/image/song2.jpeg", songUrl: "/assets/audio/we-dont-talk-anymore.mp3" }
  ])
  const [currentSong, setCurrentSong] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null);
  const {volume} = useVolume();

  const handlePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
    }
  }

  const handleNext = () => {
    setCurrentSong((prev) => (prev + 1) % spotify.length)
    setIsPlaying(true)
  }

  const handleBack = () => {
    setCurrentSong((prev) => (prev === 0 ? spotify.length - 1 : prev - 1))
    setIsPlaying(true)
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) audioRef.current.play()
    }
  }, [currentSong, isPlaying]);

  useEffect(() => {
    if(audioRef.current){
      audioRef.current.volume = volume/100;
    }
  }, [volume])

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const handleTaskbarClick = (window) => {
    if (window.isMinimized) {
      restoreWindow(window.id)
    } else {
      minimizeWindow(window.id)
    }
  }

  const toggleSidebar = () => {
    if(musicWidget){
      toggleMusicWidget();
    }
    
    if(powerWidget){
      togglePowerWidget();
    }
    setSideBar(!sideBar)
  }
  
  const toggleMusicWidget = () => {
    if(sideBar){
      toggleSidebar();
    }
    if(powerWidget){
      togglePowerWidget();
    }
    setMusicWidget(!musicWidget);
  }
  
  const togglePowerWidget = () => {
    if(sideBar){
      toggleSidebar();
    }
    if(musicWidget){
      toggleMusicWidget();
    }
    setPowerWidget(!powerWidget);
  }

  return (
    <div className="fixed bottom-0 left-0 w-full rounded h-12 bg-black/50 backdrop-blur-sm flex items-center justify-between px-4 text-white border-t border-gray-900">
      <div><img src="/assets/image/waifu.gif" alt="" className="h-12" /></div>

      <div className="flex items-center gap-2">
        {windows.map((window) => (
          <button
            key={window.id}
            className={`
              text-white bg-white/20 p-0.5 rounded 
              flex items-center gap-2
              transition-opacity
              ${window.isMinimized ? "opacity-60" : "opacity-100"}
              transition-transform hover:scale-[1.2]
            `}
            onClick={() => handleTaskbarClick(window)}
            title={window.isMinimized ? `Restore ${window.title}` : `Minimize ${window.title}`}
          >
            {window.icon}
          </button>
        ))}        
      </div>

      <div className="flex items-center">
        <div onClick={toggleMusicWidget} className="text-purple-300 hover:bg-gray-900 rounded p-2">
          {isPlaying ? <Headphones/> : <HeadphoneOff/>}
          <audio ref={audioRef} src={spotify[currentSong].songUrl} preload="auto" />
        </div>
        <div onClick={togglePowerWidget} className="text-red-400 hover:bg-gray-900 rounded p-2">
          <Power/>
        </div>
        <div onClick={toggleSidebar} className="text-[12px] px-2 rounded-md hover:bg-gray-900 flex flex-col text-end">
          <span>{currentTime.toLocaleTimeString([], {hour: "2-digit", minute:"2-digit"})}</span>
                <span>{currentTime.toLocaleDateString()}</span>
              </div>
          </div>


      <AnimatePresence>
        {sideBar && (
          <motion.div key="main-widget"
           initial={{ opacity:0, y:20 }}
           animate={{ opacity:1, y:0 }}
           exit={{ opacity:0, y:20 }}
           transition={{ duration:0.3, ease:"easeOut"}}
          >
            <Sidebar 
        spotify={spotify} currentSong={currentSong} 
        isPlaying={isPlaying} onPlayPause={handlePlayPause} 
        onNext={handleNext} onBack={handleBack}/> 
          </motion.div>
        )}
      </AnimatePresence>
      {musicWidget && <MusicWidget spotify={spotify} currentSong={currentSong} isPlaying={isPlaying} onPlayPause={handlePlayPause} onNext={handleNext} onBack={handleBack}/>}
      {powerWidget && <PowerWidget/>}

    </div>
  )
}
