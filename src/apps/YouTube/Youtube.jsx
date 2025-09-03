import { Bell, CircleCheckBig, History, Home, Menu, Mic, Plus, Search, ThumbsDown, ThumbsUp, Video, X } from "lucide-react";
import { useState } from "react";

export function Youtube(){
    const [toggleNotification, setToggleNotification] = useState(false);
    const [section, setSection] = useState("Home")
    const [isPlaying, setIsPlaying] = useState(false)
    const [play, setPlay] = useState({
        id:1,
        title:"Bal Hanuman Official Trailer Digus Isekai", 
        src:"https://www.youtube.com/embed/_NJvncbpcCA?si=gYlq9oPETJE0ZAcL", 
        channelName:"Diguslsekai", profilePicture:"/assets/image/song2.jpeg",
        views:"301K", postDate:"1 day", subscribers:"24.7M",
    });

    const [likes, setLikes] = useState([])
    const [history, setHistory] = useState([]);

    const [videos, setVideos] = useState([
    {
        id: 1,
        title: "Bal Hanuman Official Trailer Digus Isekai",
        src: "https://www.youtube.com/embed/_NJvncbpcCA?si=gYlq9oPETJE0ZAcL",
        thumbnail: "https://img.youtube.com/vi/_NJvncbpcCA/maxresdefault.jpg",
        views: "389K",
        postDate: "3 days",
        channelName: "Diguslsekai",
        isLiked: false,
        isDisliked: false,
        profilePicture:
        "https://yt3.googleusercontent.com/fy3YHjK3ligSA0Dv7ukFO8I9DRrAh3mJjMBSLpf6_fi5G8jmCWmtveAq2Ge3_xuSFvvpJJoHoxI",
        subscribers: "24.7M",
    },
    {
        id: 2,
        title: "Scott Lang Training Montage | Ant-Man | Official Clip",
        src: "https://www.youtube.com/embed/jRWvpJNovZ0?si=Kwt3WU8ZAMeqSihD",
        thumbnail: "https://img.youtube.com/vi/jRWvpJNovZ0/maxresdefault.jpg",
        views: "301K",
        postDate: "1 day",
        channelName: "Marvel Entertainment",
        isLiked: false,
        isDisliked: false,
        profilePicture:
        "https://yt3.googleusercontent.com/k7BhK-hm9_MbJbaKznHPhir6e4pWXbm1ppAHoseLIzRgoAPBMmH1IIhYKlXbGono25RD1OQwHQ",
        subscribers: "21.7M",
    },
    {
        id: 3,
        title: "Happiness",
        src: "https://www.youtube.com/embed/e9dZQelULDk?si=5_xYYMfcL7f6rlfF",
        thumbnail: "https://img.youtube.com/vi/e9dZQelULDk/maxresdefault.jpg",
        views: "55M",
        postDate: "7 year",
        channelName: "Steve Cutts",
        isLiked: false,
        isDisliked: false,
        profilePicture:
        "https://yt3.googleusercontent.com/ytc/AIdro_miKmb89rERFj1lwkCnn7IY7bazxfNuAApGexoZFNI-v-0",
        subscribers: "1.97M",
    },
    {
        id: 4,
        title: "Dormammu Time Loop | Doctor Strange | Official Clip",
        src: "https://www.youtube.com/embed/DCrFkaZL254?si=RC7YN9XA2Lvf28_B",
        thumbnail: "https://img.youtube.com/vi/DCrFkaZL254/maxresdefault.jpg",
        views: "3.4M",
        postDate: "3 months",
        channelName: "Marvel Entertainment",
        isLiked: false,
        isDisliked: false,
        profilePicture:
        "https://yt3.googleusercontent.com/k7BhK-hm9_MbJbaKznHPhir6e4pWXbm1ppAHoseLIzRgoAPBMmH1IIhYKlXbGono25RD1OQwHQ",
        subscribers: "21.7M",
    },
    {
        id: 5,
        title: "Claude Code is Amazing!",
        src: "https://www.youtube.com/embed/i3tRkbsE54Q?si=dCklvzbO-rAwIMVH",
        thumbnail: "https://img.youtube.com/vi/i3tRkbsE54Q/maxresdefault.jpg",
        views: "166K",
        postDate: "3 weeks",
        channelName: "CodeWithHarry",
        isLiked: false,
        isDisliked: false,
        profilePicture:
        "https://yt3.googleusercontent.com/ytc/AIdro_kX3sdbuu3KFmRPsmlu0R5Rx_BhpxwupjtvJmkEdNfla7w",
        subscribers: "8.75M",
    },
    {
        id: 6,
        title: "Loki Bhaiya | Udit Edits",
        src: "https://www.youtube.com/embed/mM7gfVYwFuI?si=ERAu_axKBqmKpz4R",
        thumbnail: "https://img.youtube.com/vi/mM7gfVYwFuI/maxresdefault.jpg",
        views: "315K",
        postDate: "1 year",
        channelName: "Udit Edits",
        isLiked: false,
        isDisliked: false,
        profilePicture:
        "https://yt3.googleusercontent.com/DNGLrro0sbqheMKEgNE3UF7b8IgBO_HysH4YcVMOYIcymZHBb8keTZ-4aa3x7C5z8-n-zJ92",
        subscribers: "123K",
    },
    {
        id: 7,
        title: "Marvel Studios' Loki | Official Trailer | Disney+",
        src: "https://www.youtube.com/embed/nW948Va-l10?si=9AU5e6I11MYeljWf",
        isDisliked: false,
        thumbnail: "https://i.ytimg.com/vi/nW948Va-l10/hq720.jpg",
        views: "25M",
        postDate: "4 year",
        channelName: "Marvel Entertainment",
        isLiked: false,
        profilePicture:
        "https://yt3.googleusercontent.com/k7BhK-hm9_MbJbaKznHPhir6e4pWXbm1ppAHoseLIzRgoAPBMmH1IIhYKlXbGono25RD1OQwHQ",
        subscribers: "21.7M",
    },
    {
        id: 8,
        title: "Infinity Ultron VS The Watcher | What If...? | Official Clip",
        src: "https://www.youtube.com/embed/0tMMzqWIbcw?si=m5bDsqt5n54aofw9",
        thumbnail: "https://img.youtube.com/vi/0tMMzqWIbcw/maxresdefault.jpg",
        views: "259K",
        postDate: "2 weeks",
        channelName: "Marvel Entertainment",
        isLiked: false,
        isDisliked: false,
        profilePicture:
        "https://yt3.googleusercontent.com/k7BhK-hm9_MbJbaKznHPhir6e4pWXbm1ppAHoseLIzRgoAPBMmH1IIhYKlXbGono25RD1OQwHQ",
        subscribers: "21.7M",
    },
    {
        id: 9,
        title: "Afusic - Pal Pal (Official Music Video) Prod.",
        src: "https://www.youtube.com/embed/8of5w7RgcTc?si=ySS_Xs5d5GJ7-XuV",
        thumbnail: "https://img.youtube.com/vi/8of5w7RgcTc/maxresdefault.jpg",
        views: "259K",
        postDate: "6 months",
        channelName: "AFUSIC",
        isLiked: false,
        isDisliked: false,
        profilePicture:
        "https://yt3.googleusercontent.com/BHwT3bbu6tRGHKppQcBf5DY7arDKCijJesyKFSZGQegRPmQaMsg5j25NzIQGRPISvO6Cq2rL",
        subscribers: "756K",
    },
    {
        id: 10,
        title:
        "Monica - Telugu Song| COOLIE | Superstar Rajinikanth | Sun Pictures | Lokesh | Anirudh | Pooja Hegde",
        src: "https://www.youtube.com/embed/x6OaIcF3hbQ",
        thumbnail: "https://img.youtube.com/vi/KKKBaaxH_Jk/maxresdefault.jpg",
        views: "4.8M",
        postDate: "1 month",
        channelName: "Sun Neo TV",
        isLiked: false,
        isDisliked: false,
        profilePicture:
        "https://yt3.ggpht.com/35trRALtSCYVdtZcAK-4ixGWDfsVBzLCVc9lBZlkZ7XGPqdYrD-Mf7iSlR_2J_P7gORpZoj7Vg",
        subscribers: "1.77M",
    },
    {
        id: 11,
        title: "ONE PIECE: Season 2 | First Look | Netflix",
        src: "https://www.youtube.com/embed/-UE2i8xXErU",
        thumbnail: "https://img.youtube.com/vi/-UE2i8xXErU/maxresdefault.jpg",
        views: "7.4",
        postDate: "25 days",
        channelName: "Netflix",
        isLiked: false,
        isDisliked: false,
        profilePicture:
        "https://yt3.ggpht.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA",
        subscribers: "31.5M",
    },
    {
        id: 12,
        title: "Maand (Lyrics) - Bayaan, Hasan Raheem, Rovalio",
        src: "https://www.youtube.com/embed/p6ca7gq5H70",
        thumbnail: "https://img.youtube.com/vi/p6ca7gq5H70/maxresdefault.jpg",
        views: "15M",
        postDate: "7 months",
        channelName: "Euphonies",
        isLiked: false,
        isDisliked: false,
        profilePicture:
        "https://yt3.ggpht.com/gipjgVyErCewJEpj1tmg2oa0hNS-zSgU32e_sK40MOPea-oBi9DwSnjR-gcrkyx2gESLU73vnw",
        subscribers: "39.1K",
    },
    {
        id: 13,
        title:
        "When Spider-Man Lost His Powers! 😢| Spider-Man 2’s Most Emotional Scene | Hindi Dubbed - Superhero",
        src: "https://www.youtube.com/embed/HRan3NeCtZs",
        thumbnail: "https://img.youtube.com/vi/HRan3NeCtZs/maxresdefault.jpg",
        views: "196K",
        postDate: "2 weeks",
        channelName: "Flimy Action",
        isLiked: false,
        isDisliked: false,
        profilePicture:
        "https://yt3.ggpht.com/bpO1snAa9XXrLfQUpX-4m3yjGLMuU5Q1ChM_fs6vtTpOzxN1enjlK2Z-4j9cuiXDsVEQ2qZ5mw",
        subscribers: "2.13M",
    },
    {
        id: 14,
        title:
        "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
        src: "https://www.youtube.com/embed/tVzUXW6siu0",
        thumbnail: "https://img.youtube.com/vi/tVzUXW6siu0/maxresdefault.jpg",
        views: "5.7M",
        postDate: "1 year",
        channelName: "CodeWithHarry",
        isLiked: false,
        isDisliked: false,
        profilePicture:
        "https://yt3.ggpht.com/ytc/AIdro_kX3sdbuu3KFmRPsmlu0R5Rx_BhpxwupjtvJmkEdNfla7w",
        subscribers: "8.77M",
    },
    {
        id: 15,
        title: "The Most Important Film of the Year ⋮ Dhadak 2 Movie Review",
        src: "https://www.youtube.com/embed/j46gBkSscw0",
        thumbnail: "https://img.youtube.com/vi/j46gBkSscw0/maxresdefault.jpg",
        views: "314K",
        postDate: "2 weeks",
        channelName: "PJ Explained",
        isLiked: false,
        isDisliked: false,
        profilePicture:
        "https://yt3.ggpht.com/ytc/AIdro_kZDPy1Lt5dc0Doto1Dqb-uG24R6B1ZkeH7E58r4NMUxkE",
        subscribers: "2.52M",
    },
    {
        id: 16,
        title:
        "Otherworldly Munchkin: Let's Speedrun the Dungeon with Only 1 HP! | Official Trailer | Crunchyroll",
        src: "https://www.youtube.com/embed/Clr6kEIs5co",
        thumbnail: "https://img.youtube.com/vi/Clr6kEIs5co/maxresdefault.jpg",
        views: "73K",
        postDate: "4 weeks",
        channelName: "Crunchyroll",
        isLiked: false,
        isDisliked: false,
        profilePicture:
        "https://yt3.ggpht.com/BUp_RGMNx21asWdmkCSN0X9QoBAARyCXxG_cnC-Zd4_8xARZDgRDVjbhSa99jmoy4z9bdbNy",
        subscribers: "7.71M",
    },
    {
        id: 17,
        title:
        "Demon Slayer: Kimetsu no Yaiba Infinity Castle | OFFICIAL ENGLISH DUB TRAILER",
        src: "https://www.youtube.com/embed/U85ASAbHPzU",
        thumbnail: "https://img.youtube.com/vi/U85ASAbHPzU/maxresdefault.jpg",
        views: "486K",
        postDate: "1 month",
        channelName: "Aniplex USA",
        isLiked: false,
        isDisliked: false,
        profilePicture:
        "https://yt3.ggpht.com/ytc/AIdro_n4xlOv990XVpqUNNcBE1wY9C6nb0LYE9jjsPM80DlA3qw",
        subscribers: "995K",
    },
    {
        id: 18,
        title:
        "Bye Bye Bye Opening Scene | DEADPOOL & WOLVERINE (2024) Movie CLIP HD",
        src: "https://www.youtube.com/embed/VHAK-gU9gi0",
        thumbnail:
        "https://i.ytimg.com/vi/VHAK-gU9gi0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA9ra0FWlhL6qUtQmQfuTrRhi-R7Q",
        views: "40M",
        postDate: "9 month",
        channelName: "JoBlo Movie Clips",
        isLiked: false,
        isDisliked: false,
        profilePicture:
        "https://yt3.ggpht.com/_2dYGk34OLMvQPN5co7uQ9OX3_vSOVI4PExNuaNTFRW1lsCcmhQrxJ46C0HwWhxxhdyXsA75IxI",
        subscribers: "7.71M",
    },
    ])

    const playVideo = (videoDetails) => {
        const videoInVideos = videos.find(v => v.id === videoDetails.id);
        const isVideoLiked = videoInVideos ? videoInVideos.isLiked : false;
        const isVideoDisliked = videoInVideos ? videoInVideos.isDisliked : false;

        setPlay({
            id: videoDetails.id,
            title: videoDetails.title,
            src: videoDetails.src,
            channelName: videoDetails.channelName,
            views: videoDetails.views,
            profilePicture: videoDetails.profilePicture,
            postDate: videoDetails.postDate,
            subscribers: videoDetails.subscribers,
            isLiked: isVideoLiked,
            isDisliked: isVideoDisliked,
        });
        setIsPlaying(true);
        setSection("");

        setHistory((prev) => [
            {
                id: Date.now(),
                title: videoDetails.title,
                src: videoDetails.src,
                views: videoDetails.views,
                thumbnail: videoDetails.thumbnail,
                channelName: videoDetails.channelName,
                time: new Date().toLocaleTimeString([], {hour: "2-digit", minute:"2-digit"})
            },
            ...prev.slice(0, 99),
        ]);
    };

    const removeFromHistory = (videoID) => {
        setHistory((prev) => prev.filter((video) => video.id !== videoID));
    };

    const removeFromLikes = (videoID) => {
        setLikes((prev) => prev.filter((video) => video.id !== videoID));
        setVideos((prev) => prev.map((video) =>
            video.id === videoID ? {...video, isLiked: false} : video
        ));

        if(play.id === videoID){
            setPlay(prev => ({...prev, isLiked: false}));
        }
    }

    const likeVideo = () => {
        const currentVideoId = play.id;
        const isCurrentlyLiked = play.isLiked;

        setPlay(prev => ({
            ...prev,
            isLiked: !isCurrentlyLiked,
            isDisliked: isCurrentlyLiked ? false : prev.isDisliked
        }));

        setVideos(prev => prev.map(video => 
            video.id === currentVideoId ? {
                ...video,
                isLiked: !isCurrentlyLiked,
                isDisliked: !isCurrentlyLiked ? false : video.isDisliked
            } : video
        ));

        if(!isCurrentlyLiked){
            const videoToAdd = videos.find(v => v.id === currentVideoId)
            if(videoToAdd){
                setLikes(prev => [
                    {
                        ...videoToAdd,
                        isLiked: true,
                        LikedAt: new Date().toLocaleString()
                    },
                    ...prev
                ]);
            }
        } else {
            setLikes(prev => prev.filter(video => video.id !== currentVideoId))
        }
    };

    const dislikeVideo = () => {
        const currentVideoId = play.id;
        const isCurrentlyDisliked = play.isDisliked;

        setPlay(prev => ({
            ...prev,
            isDisliked: !isCurrentlyDisliked,
            isLiked: !isCurrentlyDisliked ? false : prev.isLiked
        }));

        setVideos(prev => prev.map(video =>
            video.id === currentVideoId ? {
                ...video,
                isDisliked: !isCurrentlyDisliked,
                isLiked: !isCurrentlyDisliked ? false : video.isLiked
            } : video
        ));

        if(!isCurrentlyDisliked && play.isLiked){
            setLikes(prev => prev.filter(video => video.id !== currentVideoId));
        }

    }

    return(
    <>
    <div className="bg-[#0f0f0f] w-full h-full text-white overflow-y-hidden overflow-x-hidden">

        <div className="p-2 flex items-center justify-between">
                <div className=" flex items-center">
                    <button className="mr-2 cursor-not-allowed"><Menu/></button>
                    <img src="/Logo/youtube.png" alt="youtube logo" className="w-5"/>
                    <span className="text-white text-xl">YouTube</span>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center rounded-full border border-gray-400">
                        <input type="text" className="p-2 w-90 outline-none" placeholder="Search..."/>
                        <button type="submit" className="py-2 px-3 bg-[#222222] rounded-r-full cursor-not-allowed"><Search/></button>
                    </div>
                    <div className="bg-[#222222] w-10 h-10 flex items-center justify-center rounded-full cursor-not-allowed"><Mic className=""/></div>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1 bg-[#222222]  p-2 rounded-full text-sm  cursor-not-allowed">
                        <Plus/>
                        <span>Create</span>
                    </div>
                    <Bell size={22} onClick={()=> setToggleNotification(!toggleNotification)} className={`cursor-pointer ${toggleNotification ? 'fill-current' : ''}`}/>
                    <img src="https://i.pinimg.com/originals/95/1b/7e/951b7e1c05c3cdfc5ffd514ff4ccc23c.jpg?nii=t" className="w-10 h-10 rounded-full" alt="" />
                </div>
            </div>

            {toggleNotification && (
                <div className="bg-[#282828] absolute right-5 w-[400px] h-[500px] rounded-lg shadow-xl border border-gray-600">
                    <div className="p-4 border-b border-gray-600 flex items-center">
                        <span className="text-white font-medium">Notification</span>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full p-8">
                        <div className="w-20 h-20 rounded-full bg-[#3f3f3f] flex items-center justify-center m-6">
                            <Bell className="text-gray-500" size={32}/>
                        </div>
                        <div className="text-center">
                            <h3 className="text-white text-lg font-medium mb-2">Your notification live here</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                                Subscribe to your favourite channels to receive notifications about their latest videos.
                            </p>
                        </div>
                    </div>
                </div>
            )}


        <div className="flex w-full h-full">
            <div className="w-[13%] min-w-40 h-full p-2">
                <div className={`flex items-center gap-5 cursor-pointer ${section === "Home" ? 'bg-[#222222] rounded-lg' : ''}`}
                    onClick={() => {
                        setSection("Home")
                        setIsPlaying(false)
                    }}
                >
                    <Home size={20} className="ml-2"/>
                    <span className="p-2 text-sm">Home</span>
                </div>
                <div className={`flex items-center gap-5 cursor-pointer ${section === "Like" ? 'bg-[#222222] rounded-lg' : ''}`}
                    onClick={() => {
                        setSection("Like")
                        setIsPlaying(false)
                    }}
                >
                    <ThumbsUp size={20} className="ml-2"/>
                    <span className="p-2 text-sm">Liked videos</span>
                </div>
                <div className={`flex items-center gap-5 cursor-pointer ${section === "History" ? 'bg-[#222222] rounded-lg' : ''}`}
                    onClick={() => {
                        setSection("History")
                        setIsPlaying(false)
                    }}
                >
                    <History size={20} className="ml-2"/>
                    <span className="p-2 text-sm">History</span>
                </div>
            </div>

            {section === "Home" && (
            <>
            <div className="flex-1 gap-5 mb-17 flex flex-wrap overflow-y-auto">
                {videos.map((details) => (
                    <div key={details.id} className="w-102 cursor-pointer" onClick={() => playVideo(details)}>
                        <img src={details.thumbnail} className="w-[100%] rounded"/>
                        <div className="flex items-center gap-2 pt-1">
                            <img src={details.profilePicture} className="w-8 h-8 rounded-full" />
                            <div>
                                <p className="text-sm">{details.title}</p>
                                <p className="text-sm text-gray-400">{details.channelName}</p>
                                <p className="text-sm text-gray-400">{details.views} views • {details.postDate} ago</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            </>
            )}

            {isPlaying && (
            <>
                <div className="flex-1 flex">
                    <div className="w-[900px] h-full">
                        <iframe src={play.src} className="w-[100%] h-[500px] rounded-md" frameBorder="0"
                            title="Youtube Video Player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-cross-origin" allowFullScreen
                        />
                        <div className="mt-2 w-[100%]">
                            <p className="text-2xl">{play.title}</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-5 mt-2">
                                    <img src={play.profilePicture} className="w-8 h-8 rounded-full" alt="" />
                                    <div>
                                        <p className="text-sm flex items-center gap-2">{play.channelName} <CircleCheckBig className="text-blue-500 w-4"/></p>
                                        <p className="text-gray-400 text-xs">{play.subscribers} Subscribers</p>
                                    </div>
                                </div>
                                <div className="bg-[#272727] rounded-full flex items-center overflow-hidden">
                                    <button className={`px-3 py-2 flex items-center gap-2 hover:bg-[#3f3f3f] transition-colors ${
                                        play.isLiked ? 'text-gray-300' : 'text-white'
                                    }`}
                                    onClick={likeVideo}
                                    >
                                        <ThumbsUp size={18} className={play.isLiked ? 'fill-current' : ''}/>
                                        <span className="text-sm">69K</span>
                                    </button>
                                    <div className="w-px h-6 bg-gray-600"></div>
                                    <button className="px-4 py-2 flex items-center gap-2 hover:bg-[#3f3f3f] transition-colors"
                                    onClick={dislikeVideo}
                                    >
                                        <ThumbsDown size={18} className={play.isDisliked ? 'fill-current' : "not-only-of-type:"}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 px-2 text-3xl w-[402px] mb-15  overflow-y-auto">
                        {videos.filter(video => video.id !== play.id).map((video)=>(
                        <div key={video.id} className="w-[394px] h-[95px] flex gap-2 my-2 cursor-pointer hover:bg-[#161616]" onClick={() => playVideo(video)}>
                            <img src={video.thumbnail} alt="" className="w-[168px] rounded-sm"/>
                            <div className="flex flex-col">
                                <span className="text-[1rem] overflow-hidden">{video.title}</span>
                                <span className="text-sm text-gray-400">{video.channelName}</span>
                                <span className="text-sm text-gray-400">{video.views} views • {video.postDate} ago</span>
                            </div>
                        </div>
                        ))}
                    </div>

                </div>
            </>
            )}

            {section === "Like" && (
                <>
                {likes.length > 0 ? (
                    <div className="flex-1 flex flex-col mb-15 p-4">
                        <div className="pb-5 text-2xl font-bold mb-4">
                            Liked Videos ({likes.length})
                        </div>

                        <div className="h-full overflow-y-auto">
                            {likes.map((video) => (
                                <div key={video.id} className="flex p-3 my-2 bg-[#1a1a1a] rounded-lg hover:bg-[#252525] transition-colors">
                                    <div onClick={() => playVideo(video)} className="flex gap-4 cursor-pointer flex-1">
                                        <img src={video.thumbnail} alt="" className="w-48 h-32 object-cover rounded-md"/>
                                        <div className="flex flex-col justify-start">
                                            <span className="text-lg font-medium">{video.title}</span>
                                            <div className="flex items-center gap-2 py-1.5">
                                                <img src={video.profilePicture} className="w-6 h-6 rounded-full" alt="" />
                                                <span className="text-sm text-gray-400 flex items-center gap-2">
                                                    {video.channelName} 
                                                    <CircleCheckBig className="w-3 text-blue-500"/> 
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <span>{video.views} views</span>
                                                <span>|</span>
                                                <span>{video.postDate} ago</span>
                                            </div>
                                            <span className="text-gray-400 text-sm">Liked on {video.likedAt}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between items-end">
                                        <button 
                                            className="p-2 hover:bg-[#4f4a4a22]  rounded-md transition-colors" 
                                            onClick={() => removeFromLikes(video.id)}
                                            title="Remove from liked videos"
                                        >
                                            <X size={18}/>
                                        </button>
                                        <div className="flex items-center gap-1 text-xs">
                                            <ThumbsUp size={14} className="fill-current"/>
                                            <span>Liked</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="text-6xl mb-4">💔</div>
                            <p className="text-2xl mb-2">No liked videos yet</p>
                            <span className="text-gray-400">Videos you like will appear here</span>
                        </div>
                    )}
                    </>
                )}

            {section === "History" && (
                <>
                {history.length > 0 ? (
                    <div className="flex-1 flex flex-col mb-15">
                        <div className="pb-5 ml-[27%] text-5xl">
                            Watch History
                        </div>

                        <div className="h-full overflow-y-auto">
                            {history.map((video) => (
                                <div key={video.id} className="flex p-2 my-2 max-h-30 bg-[#45454522] rounded-md">
                                <div onClick={() => playVideo(video)} className="flex gap-2 cursor-pointer">
                                    <img src={video.thumbnail} alt="" className=" rounded-sm"/>
                                    <div className="flex flex-col">
                                        <span className="text-xl ">{video.title}</span>
                                        <div className="flex items-center gap-5 ">
                                            <span className="text-md text-gray-400 flex items-center gap-2">{video.channelName} <CircleCheckBig className=" w-4"/> </span>
                                            <span className="text-shadow-md text-gray-400">{video.views} views</span>
                                        </div>
                                        <span className="text-sm text-gray-400 mr-1 overflow-hidden">Lorem ipsum dolor sit amet consectetur hhdg hjhjjhjhjh adipisicing elit. Amet exercitationem debitis placeat ullam accusantium. Accusamus quos ipsum similique atque quibusdam!</span>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between">
                                    <button className="flex justify-end" onClick={() => removeFromHistory(video.id)}>
                                        <span className="p-2 hover:bg-[#4f4a4a22] rounded-md">
                                            <X size={15}/>
                                        </span></button>
                                    <p className="text-xs bg-[#4f4a4a22] w-20 py-2 flex items-center justify-center rounded-sm">{video.time}</p>
                                </div>
                            </div>
                            ))}
                        </div>

                    </div>
                    ):(
                    <>
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="text-6xl mb-4">🕐</div>
                        <span className="text-2xl">No videos in history</span>
                        <span className="text-gray-400 mt-2">Videos you watch will appear here</span>
                    </div>
                    </>
                )}
                </>
                )}
            

        </div>

    </div>
    </>
    )
}