import { CameraIcon } from "lucide-react";
import { useRef, useState } from "react";
import Webcam from "react-webcam";
import Gallery from "./Gallery";

export function Camera(){
    const webcamRef = useRef(null);
    const [images, setImages] = useState([]);
    const [showGallery, setShowGallery] = useState(false);

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImages((prev) => [...prev, imageSrc])
    };

    const deleteImage = (index) => {
        setImages((prev) => prev.filter((_,i)=> i !== index));
    }

    if(showGallery){
        return <Gallery images={images} onBack={()=> setShowGallery(false)} onDelete={deleteImage}/>
    }

return(
    <div className="h-full overflow-hidden flex bg-black">
        <div className="h-[100%] w-full">
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="w-full h-[100%] object-cover rounded-xl py-2 pl-2"
                videoConstraints={{width:1280, height:720, facingMode:"user"}}
            />
        </div>

        <div className="py-2 px-1 flex flex-col justify-between">
            <div></div>
            <div>
                <button onClick={capture} className="w-15 h-15 bg-gray-400 text-white rounded-full border-2 border-white/70 flex items-center justify-center">
                    <CameraIcon/>
                </button>
            </div>

            <div className="pb-5">
                <button onClick={()=>setShowGallery(true)} className="transition-transform hover:scale-105">
                    {images.length > 0 ? (
                    <div className="relative">
                        <img src={images[0]} alt="latest" className="w-12 h-12 rounded object-cover border-2 border-white/70 shadow-lg" />
                    </div>
                    ):(
                        <div className="w-12 h-12 rounded bg-gray-400 border-2 border-white/50 flex items-center justify-center backdrop-blur-sm">
                            <span className="text-gray-300 text-lg">📷</span>
                        </div>
                    )}
                </button>
            </div>
        </div>

    </div>
)
}