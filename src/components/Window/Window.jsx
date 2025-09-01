"use client"

import { X, Minimize2, Maximize2, Minus, Square } from "lucide-react"
import { useDragAndDrop } from "../../hooks/useDragAndDrop"

export function Window({id, title, icon, children, position, size, isMaximized, zIndex, onClose, onMinimize, onMaximize, onFocus, onPositionChange}) {
 
  const {
    position: dragPosition, 
    isDragging,
    elementRef, 
    handleMouseDown, 
  } = useDragAndDrop(position, onPositionChange)


  const windowStyle = isMaximized
    ? {
        top: 0,
        left: 0,
        width: "100vw",
        height: "calc(100vh - 48px)",
        zIndex,
      }
    : {
        top: dragPosition.y,
        left: dragPosition.x,
        width: size.width,
        height: size.height,
        zIndex,
      }

  return (
    <div
      ref={elementRef}
      className={`
        absolute 
        bg-white 
        border border-gray-300 
        rounded-lg     
        shadow-lg 
        overflow-hidden   
        flex flex-col
        ${isDragging ? "cursor-grabbing" : ""}
      `}
      style={windowStyle}
      onClick={onFocus}
    >
      {/* TITLE BAR */}
      <div
        className="
          drag-handle 
          flex items-center justify-between
          bg-black/70 text-white
          border-b  
          cursor-grab 
          active:cursor-grabbing
          select-none 
          min-h-[40]
          
        "
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2 pointer-events-none px-2">
          {icon}
          <span className="text-sm font-medium">{title}</span>
        </div>

        <div className="flex items-center">
          <button
            className="p-3 hover:bg-gray-900 " 
            onClick={(e) => {
              e.stopPropagation()
              onMinimize()
            }}
          >
            <Minus size={14} />
          </button>

          <button
            className="p-3 hover:bg-gray-900"
            onClick={(e) => {
              e.stopPropagation()
              onMaximize()
            }}
          >
            <Square size={14} />
          </button>

          <button
            className="p-3 hover:bg-red-700 hover:text-black"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
          >
            <X size={14} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}
