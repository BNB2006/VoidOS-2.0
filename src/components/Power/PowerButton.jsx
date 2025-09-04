import { useContext, useState } from "react";
import { Power } from "lucide-react";
import { SystemContext } from "../../context/SystemContext";

const PowerButton = () => {
    const { powerON } = useContext(SystemContext);
    const [isPressed, setIsPressed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => {
      setIsPressed(false);
      powerON();
    }

    return(
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white text-3xl">
        <div 
        className={`relative cursor-pointer select-none transition-all duration-150 ease-out ${isPressed ? 'scale-95' : 'scale-100'}`}
        onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          setIsPressed(false)
          setIsHovered(false)
        }}
        onMouseEnter={() => setIsHovered(true)}
      >
        <div className={`absolute inset-0 rounded-full transition-all duration-300
        ${isHovered ? 'shadow-[0_0_40px_rgba(59,130,246,0.4)]' : 'shadow-[0_0_20px_rgba(59,130,246,0.2)]'}
        `}></div>
        
        <div className={`relative w-32 h-32 rounded-full transition-all duration-150 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900
          border-2 border-gray-600 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.3),0_8px_16px_rgba(0,0,0,0.4)]
          ${isPressed 
            ? 'shadow-[inset_0_4px_8px_rgba(0,0,0,0.4),inset_0_-1px_2px_rgba(255,255,255,0.05)]' 
            : 'shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.3),0_8px_16px_rgba(0,0,0,0.4)]'
          }
        `}>
          
          <div className={`rounded-full transition-all duration-150 bg-gradient-to-b absolute inset-3 from-gray-800 to-gray-900 border border-gray-500
            ${isPressed 
              ? 'shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)]' 
              : 'shadow-[inset_0_1px_3px_rgba(0,0,0,0.3),0_1px_2px_rgba(255,255,255,0.1)]'
            }
          `}>
            
            <div className={`absolute inset-2 rounded-full transition-all duration-200
              ${isHovered ? 'bg-gradient-to-b from-blue-600 to-blue-800 shadow-[0_0_15px_rgba(59,130,246,0.6)]' 
                : 'bg-gradient-to-b from-gray-700 to-gray-900'
              }
              ${isPressed ? 'shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]' : ''}
            `}>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <Power size={48} 
                  className={`transition-all duration-200 drop-shadow-lg ${isHovered ? 'text-white' : 'text-gray-300'}
                    ${isPressed ? 'scale-90' : 'scale-100'}
                  `}
                  strokeWidth={2.5}
                />
              </div>
            </div>
          </div>

        </div>
        
        <div className={`absolute inset-0 rounded-full pointer-events-none bg-gradient-to-b from-white/10 via-transparent to-transparent
          ${isPressed ? 'opacity-50' : 'opacity-100'}`}></div>
      </div>

      <div className="mt-8 text-center">
        <span className={`text-2xl font-light tracking-wider transition-all duration-200 ${isHovered ? 'text-blue-300' : 'text-gray-400'}`}>
          Power ON
        </span>
      </div>
      </div>
    )
}

export default PowerButton;