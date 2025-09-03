const Loader = ({progress}) => {
    return(
        <div className="flex items-center justify-center h-screen bg-black text-white">
            <div className="w-80">
                <h2 className="text-center mb-4">Loading...</h2>
                <div
                 style={{width:`${progress}%`}}
                 className="bg-white h-0.5 rounded-full transition-all duration-300 ease-out"></div>
                 <p className="text-center mt-4">{progress}</p>

            </div>
        </div>
    )
}

export default Loader;