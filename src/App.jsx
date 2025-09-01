
import { Desktop } from "./components/Desktop/Desktop"
import { Taskbar } from "./components/Taskbar/Taskbar"
import { WindowManager } from "./components/WindowManager/WindowManager"

function App() {

  return (
    <div className="h-screen w-full overflow-hidden">
      <WindowManager>
        <Desktop/>
        <Taskbar/>
    </WindowManager>
    </div>
  )
}

export default App
