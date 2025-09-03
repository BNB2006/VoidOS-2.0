import { ArrowRight, Search } from "lucide-react";
import { useEffect, useState } from "react";

export function HomePage({ onNavigate }){
    const [currentTime, setcurrentTime] = useState(new Date())
    const [searchInput, setSearchInput] = useState("")
    const [apps, setApps] = useState([
        { id:1, title: "Google", logo: "/Logo/google.png", url: "https://www.google.com/search?igu=1"},
        { id:2, title: "VS Lite", logo: "/Logo/vs-code.svg", url: "https://vs-lite.vercel.app/"},
        { id:3, title: "Sigma", logo: "https://cdn-icons-png.flaticon.com/128/5968/5968705.png", url: "https://sigma-two-rosy.vercel.app/"},
        { id:4, title: "Tetris", logo: "https://cdn-icons-png.flaticon.com/128/9146/9146515.png", url: "https://bnb2006.github.io/Tetris-game/"},
        { id:4, title: "Google Map", logo: "https://cdn-icons-png.flaticon.com/128/2875/2875433.png", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29571306.450245593!2d61.028322527582525!3d19.69057626482709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e1!3m2!1sen!2sin!4v1753789123070!5m2!1sen!2sin"},
    ])

    useEffect(() => {
    const timer = setInterval(() => setcurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchInput.trim()) {
      onNavigate(searchInput.trim())
      setSearchInput("")
    }
  }

  const appClicked = (appUrl) => {
    if(appUrl.trim()){
        onNavigate(appUrl.trim())
    }
}

    return(
        <div className="bg-[url(https://wallpaperaccess.com/full/14672884.jpg)] bg-cover bg-center w-full h-full">
            <div className="border flex flex-col h-full w-full items-center">
                <div className="flex flex-col items-center justify-center text-3xl py-10">
                    <p>{currentTime.toLocaleDateString([], {weekday: "long", day:"2-digit", month:"short"})}</p>
                    <p>{currentTime.toLocaleTimeString([], {hour: "2-digit", minute:"2-digit"})}</p>
                </div>

                <form onSubmit={handleSearchSubmit} className="flex items-center bg-black/40 rounded">
                    <input type="text" className="p-2 w-100 outline-none" placeholder="Search or Enter URL" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
                    <button type="submit" className="p-2 hover:text-violet-600 border-l border-white"><Search/></button>
                </form>
                <div className="flex items-center p-4 gap-2 ">
                    {apps.map((app) => (
                        <div key={app.id} onClick={() => appClicked(app.url)} className="w-10 h-10 rounded bg-black/60 flex items-center justify-center transition-transform hover:scale-[1.1]" title={app.title}><img src={app.logo} alt={app.title} className="w-8" /></div>
                    ))}
                </div>
            </div>
        </div>
    )
}