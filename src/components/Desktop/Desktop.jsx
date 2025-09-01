"use client"

import { apps } from "../../apps"
import { useWindowManager } from "../WindowManager/WindowManager"
import FullscreenButton from "./FullScreenButton"

export function Desktop() {
  const { openWindow } = useWindowManager()

  const handleAppOpen = (app) => {
    openWindow(app)
  }

  return (
    <div className="w-screen h-screen text-white p-4 bg-[url(/bg.png)] bg-cover bg-center">
      {/* Desktop Icons Grid */}
      <div className="absolute h- top-4 left-4 grid grid-cols-2 grid-rows-7 gap-4">
        {apps.map((app) => (
          <div
            key={app.id}
            className="
              flex flex-col items-center
              p-2 rounded
              hover:bg-white/20
              cursor-pointer
              transition-colors
              select-none
            "
            onDoubleClick={() => handleAppOpen(app)}
          >
            <div>{app.icon}</div>

            <span className="text-xs text-white text-center">{app.title}</span>
          </div>
        ))}
      </div>
      <div className="absolute right-7 top-7">
        <FullscreenButton/>
      </div>
    </div>
  )
}
