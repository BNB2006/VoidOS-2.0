import {  Globe2, Plus, X, LockKeyhole, Search, Globe, ArrowLeft, ArrowRight, RotateCcw, Bookmark, History, Settings,  } from "lucide-react"
import { useRef, useState, useEffect } from "react";
import { HomePage } from "./HomePage";

export function Browser(){
    const [addressBarValue, setAddressBarValue] = useState("");
    const [tabs, setTabs] = useState([
        {
            id:1,
            url: "",
            title: "New Tab",
            isLoading: false,
        },
    ]);

    const [activeTabId, setActiveTabId] = useState(1);
    const [nextTabId, setNextTabId] = useState(2);
    const iframeRef = useRef(null)

    const [showHistory, setShowHistory] = useState(false)
    const [history, setHistory] = useState([])

    const toggleHistory = () => {
      setShowHistory(!showHistory)
    }

    const getActiveTab = () => {
        return tabs.find((tab) => tab.id === activeTabId)
    }

    const getDomain = (url) => {
        try{
            return new URL(url).hostname;
        }catch{
            return url;
        }
    }

    const createNewTab = () => {
        const newTab = {
        id: nextTabId,
        url: "",
        title: "New Tab",
        isLoading: false,
        }

        setTabs((prev) => [...prev, newTab])
        setActiveTabId(nextTabId)
        setNextTabId((prev) => prev + 1)
        setAddressBarValue("")
  }

  const closeTab = (tabId) => {
    if (tabs.length === 1) return

    setTabs((prev) => prev.filter((tab) => tab.id !== tabId))

    if (tabId === activeTabId) {
      const remainingTabs = tabs.filter((tab) => tab.id !== tabId)
      if (remainingTabs.length > 0) {
        setActiveTabId(remainingTabs[0].id)
        setAddressBarValue(remainingTabs[0].url)
      }
    }
  }

    const switchTab = (tabId) => {
        setActiveTabId(tabId)
        const tab = tabs.find((t) => t.id === tabId)
        if (tab) {
        setAddressBarValue(tab.url)
    }
  }
    
    const updateTab = (tabId, updates) => {
      setTabs((prev) => prev.map((tab) => (tab.id === tabId ? { ...tab, ...updates } : tab)))
    }

    const formatUrl = (input) => {
    if (!input.includes(".") && !input.startsWith("http")) {
      return `https://www.google.com/search?q=${encodeURIComponent(input)}`
    }

    if (!input.startsWith("http://") && !input.startsWith("https://")) {
      return `https://${input}`
    }

    return input
  }

  const navigateToUrl = (url) => {
    const formattedUrl = formatUrl(url)
    const activeTab = getActiveTab()

    if (activeTab) {
      updateTab(activeTab.id, {
        url: formattedUrl,
        isLoading: true,
        title: "Loading...",
      })

      setHistory((prev) => [
        {
          id: prev+1,
          title: getDomain(formattedUrl),
          url: formattedUrl,
          visitedAt: new Date().toLocaleTimeString([], {hour: "2-digit", minute:"2-digit"}),
        },
        ...prev.slice(0, 99),
      ])
    }

    setAddressBarValue(formattedUrl)
  }

  const handleAddressBarSubmit = (e) => {
    e.preventDefault()
    navigateToUrl(addressBarValue)
  }


  const handleIframeLoad = () => {
    const activeTab = getActiveTab()
    if (activeTab) {
      updateTab(activeTab.id, {
        isLoading: false,
        title: getDomain(activeTab.url),
      })
    }
  }

  const refresh = () => {
    const activeTab = getActiveTab();
    if(activeTab){
      updateTab(activeTab, {isLoading: true});
      if(iframeRef.current){
        iframeRef.current.src = activeTab.url;
      }
    }
  }

  useEffect(() => {
    const activeTab = getActiveTab()
    if (activeTab) {
      setAddressBarValue(activeTab.url)
    }
  }, [activeTabId, tabs])

  const activeTab = getActiveTab()

    return (
        <div className="w-full h-full flex flex-col bg-white text-white">
            <div className="flex items-center bg-[#190423]">
        <div className="flex items-center flex-1 overflow-x-auto">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`
                flex items-center gap-2 px-3 py-2 border-r cursor-pointer min-w-0 max-w-48
                ${tab.id === activeTabId ? "bg-[#310049] rounded-t" : "hover:bg-[#2F0642] border-b"}
              `}
              onClick={() => switchTab(tab.id)}
            >

              {tab.isLoading ? (
                <div className="w-3 h-3 border border-blue-500 border-t-transparent rounded-full animate-spin" />
              ) : (
                <Globe size={12} className="text-blue-400 flex-shrink-0" />
              )}

              <span className="text-sm truncate flex-1">{tab.title}</span>

              {tabs.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    closeTab(tab.id)
                  }}
                  className="p-1 hover:bg-[#13052A] rounded"
                >
                  <X size={10} />
                </button>
              )}
            </div>
          ))}

          <button onClick={() => createNewTab()} className="p-2.5 border-b hover:bg-[#13052A]" title="New Tab">
            <Plus size={14} />
          </button>
        </div>
      </div>

      <div className="p-1 bg-[#310049] border-b flex items-center gap-2">
        <div className="flex items-center gap-1 text-[#D590F7]">
          <button  className="p-1 rounded hover:bg-[#13052A] opacity-50 cursor-not-allowed" title="Back"><ArrowLeft size={16}/></button>
          <button  className="p-1 rounded hover:bg-[#13052A] opacity-50 cursor-not-allowed" title="Forward"><ArrowRight size={16}/></button>
          <button onClick={refresh} className="p-1 rounded hover:bg-[#13052A]" title="Refresh"><RotateCcw size={16}/></button>
        </div>

        <form onSubmit={handleAddressBarSubmit} className="flex-1 flex items-center">
          <div className="flex items-center flex-1 bg-[#13052A] border-2 border-[#D590F7] rounded-full px-3 py-1">
            <div className="hover:bg-[#D590F7] p-1.5 rounded-full text-center mr-2"><LockKeyhole size={14} className="" /></div>

            <input
              type="text"
              value={addressBarValue}
              onChange={(e) => setAddressBarValue(e.target.value)}
              className="flex-1 outline-none text-sm"
              placeholder="Search or enter web address"
            />

            <button type="submit" className="p-2 hover:bg-[#D590F7] rounded-full">
              <Search size={14}/>
            </button>
          </div>
        </form>

        <div className="flex items-center gap-1 text-[#D590F7]">
          <button className="p-1 rounded hover:bg-[#13052A] opacity-50 cursor-not-allowed" title="Bookmark"><Bookmark size={16}/></button>
          <button onClick={toggleHistory} className="p-1 rounded hover:bg-[#13052A]" title="History"><History size={16}/></button>
          <button className="p-1 rounded hover:bg-[#13052A] opacity-50 cursor-not-allowed" title="Settings"><Settings size={16}/></button>
        </div>

      </div>

      <div className="flex-1 flex">
        <div className="flex-1 relative">
          {activeTab ? (
            <>
              {activeTab.isLoading && (
                <div className="absolute inset-0 bg-violet-300 flex items-center justify-center z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-[#13052A] border-t-transparent rounded-full animate-spin" />
                    <span className="text-xl text-[#D590F7]">Loading...</span>
                  </div>
                </div>
              )}

              {activeTab.url === "" ? (
                <HomePage onNavigate={navigateToUrl}/>
              ) : (
                <iframe
                ref={iframeRef}
                src={activeTab.url}
                className="w-full h-full border-none"
                onLoad={handleIframeLoad}
                title={`Tab ${activeTab.id}`}
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              />
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-violet-500">
              <div className="text-center">
                <Globe size={48} className="mx-auto mb-2 opacity-50" />
                <div>No active tab</div>
              </div>
            </div>
          )}
        </div>

        {showHistory && (
          <div className="absolute right-10 top-33 w-70 h-100 bg-gray-900 border-2 overflow-y-auto">

            <div className="p-3 border-b">
              <h3 className="font-medium text-sm">History</h3>
            </div>
            <div className="p-2">
              {history.map((item) => (
                <div key={item.id} onClick={() => navigateToUrl(item.url)} className="flex items-center justify-between p-2 rounded hover:bg-gray-700 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Globe size={12}/>
                    <p>{item.title}</p>
                  </div>
                  <div>{item.visitedAt}</div>
                </div>
              ))}
            </div>


        </div>
        )}
      </div>


    </div>
  )
}
