import { Pause, Play, SkipBack, SkipForward } from "lucide-react"

const MusicWidget = ({ spotify, currentSong, isPlaying, onPlayPause, onNext, onBack, isSidebar }) => {
    return(
        <div className={`${isSidebar ? 'py-1' : 'absolute right-2 bottom-15'}`}>
            <div className=" bg-black/70 flex gap-2 p-3 rounded-md">
              <div className="w-15"><img src={spotify[currentSong].imgUrl} alt="" className="rounded" /></div>
              <div className="flex flex-col items-center justify-center px-5">
                <div className="text-sm text-red-200">{spotify[currentSong].song}</div>
                <div className="flex items-center gap-3 mt-2">
                  <button onClick={onBack}><SkipBack /></button>
                  <button onClick={onPlayPause}>
                    {isPlaying ? <Pause className="text-red-400" /> : <Play className="text-red-400" />}
                  </button>
                  <button onClick={onNext}><SkipForward /></button>
                </div>
              </div>
            </div>
          </div>
    )
};

export default MusicWidget;