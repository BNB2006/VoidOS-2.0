"use client"

import { useState, useCallback, useRef, useEffect } from "react"


export function useDragAndDrop(initialPosition, onPositionChange) {
  const [position, setPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const elementRef = useRef(null)


  const handleMouseDown = useCallback((e) => {
    // Check if the clicked element or its parent has the "drag-handle" class
    const target = e.target
    if (!target.classList.contains("drag-handle") && !target.closest(".drag-handle")) {
      return
    }

    setIsDragging(true)

    // Calculate the offset between mouse position and element's top-left corner
    const rect = elementRef.current?.getBoundingClientRect()
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top, 
      })
    }

    
    e.preventDefault()
  }, [])

 
  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return
 
      const newPosition = {
        x: Math.max(0, e.clientX - dragOffset.x),
        y: Math.max(0, e.clientY - dragOffset.y), 
      }

      setPosition(newPosition)

      onPositionChange?.(newPosition)
    },
    [isDragging, dragOffset, onPositionChange],
  )

 
  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

    // Effect to attach/detach global mouse event listeners
  useEffect(() => {
    if (isDragging) { 
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)

      
      document.body.style.userSelect = "none"

      
      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
        document.body.style.userSelect = "" 
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  // Return the hook's API
  return {
    position,
    isDragging,
    elementRef, 
    handleMouseDown, 
    setPosition, 
  }
}
