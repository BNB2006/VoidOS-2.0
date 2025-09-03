import { ArrowLeft, Trash2 } from "lucide-react";

const Gallery = ({ images, onBack, onDelete}) => {
return(
    <div className="h-full bg-black text-white flex flex-col">
        <div className="flex items-center justify-between p-4 bg-black/80">
            <button onClick={onBack} className="flex items-center gap-2 text-white hover:text-gray-300">
                <ArrowLeft size={24}/>
                <span>back</span>
            </button>
            <h1>({images.length})</h1>
            <div></div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
            {images.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                    <div className="text-center text-gray-400">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-700 flex items-center justify-center text-4xl">
                            📷
                        </div>
                        <p>No photos yet</p>
                        <p className="text-sm mt-2">Start taking photos to see them here</p>
                    </div>
                </div>
            ):(
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <div key={index} className="relative group">
                            <img src={image} alt={`captured ${index+1}`} className="w-full aspect-square object-cover rounded-lg"/>
                            <button onClick={()=>onDelete(index)} className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Trash2 size={16}/>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>

    </div>
)
};

export default Gallery;