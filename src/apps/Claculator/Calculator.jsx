"use client"

import { useState } from "react"


export function Calculator() {
  const [display, setDisplay] = useState("0") // Current display value (what user sees on screen)
  

  const [previousValue, setPreviousValue] = useState(null) // Previous value stored for calculations
  

  const [operation, setOperation] = useState(null) // Current operation (+, -, *, /, =)
 

  const [waitingForOperand, setWaitingForOperand] = useState(false)// Whether we're waiting for user to enter a new number
  

  const calculate = (firstOperand, secondOperand, operation) => {
    switch (operation) {
      case "+":
        return firstOperand + secondOperand
      case "-":
        return firstOperand - secondOperand
      case "*":
        return firstOperand * secondOperand
      case "/":
        return firstOperand / secondOperand
      case "=":
        return secondOperand
      default:
        return secondOperand
    }
  }

  
  const handleNumber = (num) => {
    if (waitingForOperand) {
      // Start fresh with new number
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      // Append to existing display (unless display is "0")
      setDisplay(display === "0" ? String(num) : display + num)
    }
  }

  const handleOperation = (nextOperation) => {
    const inputValue = Number.parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true) // Wait for next number input
    setOperation(nextOperation) // Store the operation
  }

  const handleClear = () => {
    setDisplay("0")
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  // Button layout for the calculator
  const buttons = [
    ["C", "±", "%", "/"], // Row 1: Clear, plus/minus, percent, divide
    ["7", "8", "9", "*"], 
    ["4", "5", "6", "-"], 
    ["1", "2", "3", "+"], 
    ["0", ".", "="], 
  ]

  return (
    <div className="bg-[#333232] h-full flex items-center justify-center">
      <div className="w-100 p-2 bg-[#222222]">

        <div className="bg-black text-white text-right text-5xl p-4 mb-2 rounded">{display}</div>

      <div className="grid gap-1">
        {buttons.map((row, i) => (
          <div key={i} className="grid grid-cols-4 gap-1">
            {row.map((btn) => (
              <button
                key={btn}
                className={`
                  h-15 rounded border
                  ${
                    ["+", "-", "*", "/", "="].includes(btn)
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }
                  ${btn === "0" ? "col-span-2" : ""} // Zero button spans 2 columns
                `}
                onClick={() => {
                  if (btn === "C") {
                    handleClear()
                  } else if (["+", "-", "*", "/", "="].includes(btn)) {
                    handleOperation(btn)
                  } else if (btn !== "±" && btn !== "%") {
                    handleNumber(btn)
                  }
                }}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>

      </div>
    </div>
  )
}
