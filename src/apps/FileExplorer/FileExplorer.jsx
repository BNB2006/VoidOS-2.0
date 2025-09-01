"use client"

import { ArrowLeft, File, FileText, Folder, FolderPlus, Home, ImageIcon, Music, Search, Trash2, Upload, Video, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function FileExplorer(){
  const [currentPath, setCurrentPath] = useState('/');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [showCreateFolder, setShowCreateFolder] = useState(false)
  const [showCreateFile, setShowCreateFile] = useState(false)
  const [newItemName, setNewItemName] = useState("")
  const [showPreview, setShowPreview] = useState(false)
  const [previewFile, setPreviewFile] = useState(null)
  const fileInputRef = useRef(null)

  const [fileSystem, setFileSystem] = useState({
    '/':{
      type: "folder",
      name: "Root",
      children: {
        Images:{
          type:"folder",
          name: "Images",
          children:{
            "AOT.jpg":{
              type: "file",
              name: "AOT.jpg",
              size: "237 KB",
              modified: "2024-01-15",
              url: "/assets/image/AOT.jpg",
              fileType: "image",
            },
            "vinland.jpg":{
              type: "file",
              name: "vinland.jpg",
              size: "1.6 MB",
              modified: "2024-01-15",
              url: "/assets/image/vinland.jpg",
              fileType: "image",
            },
          },
        },
        Music: {
          type: "folder",
          name: "Music",
          children: {
            "Phillip.mp3": {
              type: "file",
              name: "Phillip.mp3",
              size: "4.2 MB",
              modified: "2024-01-12",
              url: "/assets/audio/Phillip.mp3",
              fileType: "audio",
            },
            "we-dont-talk-anymore.mp3": {
              type: "file",
              name: "we-dont-talk-anymore.mp3",
              size: "8.1 MB",
              modified: "2024-01-14",
              url: "/assets/audio/we-dont-talk-anymore.mp3",
              fileType: "audio",
            },
          },
        },
        Videos: {
          type: "folder",
          name: "Videos",
          children: {
            "prime.mp4": {
              type: "file",
              name: "Transformers.mp4",
              size: "71.31 MB",
              modified: "2024-01-08",
              url: "/assets/video/transformers.mp4",
              fileType: "video",
            },
            "KungFuPanda.webm": {
              type: "file",
              name: "KungFuPanda.webm",
              size: "8.7 MB",
              modified: "2024-01-16",
              url: "/assets/video/KungFuPanda.mp4",
              fileType: "video",
            },
          },
        },
        Documents: {
          type: "folder",
          name: "Documents",
          children: {
            "readme.txt": {
              type: "file",
              name: "readme.txt",
              size: "1 KB",
              modified: "2024-01-16",
              content:
                "Welcome to the File Explorer!\n\nThis is a sample text file.\nYou can create, edit, and manage files here.\n\nFeatures:\n- Create folders and files\n- Upload real files\n- Preview images and videos\n- Search functionality\n- File management",
              fileType: "text",
            },
            "notes.md": {
              type: "file",
              name: "notes.md",
              size: "2.1 KB",
              modified: "2024-01-19",
              content:
                "# My Notes\n\n## Todo List\n- [x] Create file explorer\n- [x] Add file upload\n- [ ] Add file editing\n- [ ] Add file sharing\n\n## Ideas\n- Implement drag and drop\n- Add file compression\n- Create file search indexing",
              fileType: "text",
            },
          },
        },
        Notes: {
          type: "folder",
          name: "Notes",
          children:{},
        }
      },
    },
  });

  const getCurrentDirectory = () => {
    const pathParts = currentPath.split("/").filter(Boolean)
    let current = fileSystem["/"]

    
    for (const part of pathParts) {
      if (current.children && current.children[part]) {
        current = current.children[part]
      }
    }

    return current.children || {}
  }

  const getIcon = (item) => {
    if (item.type === "folder") {
      return <Folder className="h-4 w-4 text-blue-500" />
    }

    const extension = item.name.split(".").pop()?.toLowerCase()
    switch (extension) {
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
      case "webp":
        return <ImageIcon className="h-4 w-4 text-green-500" />
      case "mp3":
      case "wav":
      case "flac":
      case "ogg":
        return <Music className="h-4 w-4 text-purple-500" />
      case "mp4":
      case "avi":
      case "mkv":
      case "webm":
        return <Video className="h-4 w-4 text-red-500" /> 
      case "txt":
      case "md":
      case "json":
        return <FileText className="h-4 w-4 text-gray-500" />
      default:
        return <File className="h-4 w-4 text-gray-500" /> 
    }
  }

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files)

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileData = {
          type: "file",
          name: file.name,
          size: formatFileSize(file.size),
          modified: new Date().toISOString().split("T")[0],
          url: e.target.result,
          fileType: getFileType(file.type),
          realFile: true,
        }

        setFileSystem((prev) => {
          const newFS = { ...prev }
          const pathParts = currentPath.split("/").filter(Boolean)
          let current = newFS["/"]

          for(const part of pathParts){
            if(current.children && current.children[part]){
              current = current.children[part]
            }
          }

          if(!current.children) current.children = {}
          current.children[file.name] = fileData

          return newFS
        })
      }

      if(file.type.startsWith("image/")){
        reader.readAsDataURL(file)
      }else if(file.type.startsWith("audio/") || file.type.startsWith("video/")){
        reader.readAsDataURL(file)
      }else{
        reader.readAsText(file)
      }
    })

    event.target.value = ""
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const getFileType = (mimeType) => {
    if (mimeType.startsWith("image/")) return "image"
    if (mimeType.startsWith("audio/")) return "audio"
    if (mimeType.startsWith("video/")) return "video"
    if (mimeType.startsWith("text/")) return "text"
    return "file"
  }

  const previewFileHandler = (item) => {
    setPreviewFile(item);
    setShowPreview(true);
  }

  const navigateToFolder = (folderName) => {
    if (folderName === "..") {
      const pathParts = currentPath.split("/").filter(Boolean)
      pathParts.pop()
      setCurrentPath(pathParts.length > 0 ? "/" + pathParts.join("/") : "/")
    } else {
      const newPath = currentPath === "/" ? `/${folderName}` : `${currentPath}/${folderName}`
      setCurrentPath(newPath)
    }
    setSelectedItems([])
  }

  const goBack = () => {
    navigateToFolder("..")
  }

  const goHome = () => {
    setCurrentPath('/');
    setSelectedItems([]);
  }

  const createFolder = () => {
    if (!newItemName.trim()) return

    setFileSystem((prev) => {
      const newFS = { ...prev }
      const pathParts = currentPath.split("/").filter(Boolean)
      let current = newFS["/"]

      for (const part of pathParts) {
        if (current.children && current.children[part]) {
          current = current.children[part]
        }
      }

      if (!current.children) current.children = {}
      current.children[newItemName] = {
        type: "folder",
        name: newItemName,
        children: {},
      }

      return newFS
    })

    setNewItemName("")
    setShowCreateFolder(false)
  }

  const createFile = () => {
    if(!newItemName.trim()) return;
    
    setFileSystem((prev) => {
      const newFS = { ...prev }
      const pathParts = currentPath.split("/").filter(Boolean)
      let current = newFS["/"]

      for(const part of pathParts){
        if(current.children && current.children[part]){
          current = current.children[part];
        }
      }

      if(!current.children) current.children = {}
      current.children[newItemName] = {
        type: "file",
        name: newItemName,
        size: "0 KB",
        modified: new Date().toISOString().split("T")[0],
        content: "",
        fileType: "text",
      }

      return newFS
    })

    setShowCreateFile(false);
    setNewItemName("");
  }

  const toggleSelection = (itemName) => {
    setSelectedItems((prev) => 
      prev.includes(itemName)? prev.filter((name) => name !== itemName) : [...prev, itemName],
    )
  }

  const deleteItem = () => {
    setFileSystem((prev) => {
      const newFS = { ...prev }
      const pathParts = currentPath.split("/").filter(Boolean)
      let current = newFS["/"]

      for(const part of pathParts){
        if(current.children && current.children[part]){
          current = current.children[part]
        }
      }

      selectedItems.forEach((itemName) => {
        if(current.children && current.children[itemName]){
            delete current.children[itemName]
        }
      })

      return newFS
    })

    setSelectedItems([])
    console.log(selectedItems)
  }

  const filteredItems = () => {
    const items = getCurrentDirectory()
    if (!searchQuery) return items 

      const filtered = {}
      Object.entries(items).forEach(([name, item]) => {
        if(name.toLowerCase().includes(searchQuery.toLowerCase())){
          filtered[name] = item;
        }
      })
    return filtered;
  }

  const getBreadcrumbs = () => {
    if( currentPath === "/") return ["Home"];
    const parts = currentPath.split("/").filter(Boolean);
    return ["Home", ...parts]
  }



  const currentItems = filteredItems()

  return(
    <div className="w-full h-full flex flex-col bg-blue-100">
      
      <div className="flex items-center gap-2 p-2 border-b bg-blue-200">
        <button
        onClick={goBack}
          disabled={currentPath==="/"}
          className="p-1 rounded hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed" 
          title="Go Back">
          <ArrowLeft size={18}/>
        </button>
        <button onClick={goHome} className="p-1 rounded hover:bg-gray-400" title="Go Home">
          <Home size={18}/>
        </button>
        
        <div className="flex items-center gap-1 flex-1">
          {getBreadcrumbs().map((crumb, index) => (
            <span key={index} className="text-sm text-gray-600">
              {index > 0 && "/"}
              {crumb}
            </span>
          ))}
        </div>

        <div className="relative">
          <Search size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-500"/>
          <input type="text" placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border pl-7 pr-2 py-1 text-sm rounded focus:outline-none focus:ring-1" />
        </div>

      <button
        onClick={() => fileInputRef.current?.click()}
        className="p-1 rounded hover:bg-gray-400" title="Upload Files">
        <Upload size={18}/>
      </button>

      <button onClick={() => setShowCreateFolder(true)} className="p-1 rounded hover:bg-gray-400" title="Add Folder">
        <FolderPlus size={18}/>
      </button>
      <button onClick={() => setShowCreateFile(true)} className="p-1 rounded hover:bg-gray-400" title="Add File">
        <File size={18}/>
      </button>

      {selectedItems.length > 0 && (
      <button onClick={deleteItem}  className="p-1 rounded hover:bg-red-300 text-red-600" title="Delete">
        <Trash2 size={18}/>
      </button>
      )}
      </div>

      {/* file input  */}
      <input 
        type="file"
        ref={fileInputRef}
        multiple
        onChange={handleFileUpload}
        className="hidden"
        accept="image/*,audio/*,video/*,text/*,.pdf,.doc,docx"
      />

      
      <div className="flex-1 overflow-auto">
        {Object.keys(currentItems).length === 0 ? (
          <div className="flex items-center justify-center h-full text-red-400">
            {searchQuery ? "No items match your search" : "This folder is empty"}
          </div>
        ) : (

        <div className="grid grid-cols-1 p-2">
          {Object.entries(currentItems). map(([name, item]) => (
            <div
              key={name}
              className={`
                flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-blue-200
                ${selectedItems.includes(name) ? "bg-blue-300" : ""}
              `}
              onClick={() => toggleSelection(name)}
              onDoubleClick={() => {
                if(item.type === "folder"){
                  navigateToFolder(name);
                }else{
                  previewFileHandler(item);
                }
              }}
            >
              {getIcon(item)}

              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{name}</div>
                {item.type === "file" && (
                  <div className="text-xs text-gray-500">
                    {item.size} • Modified {item.modified}
                    {item.realFile && <span className="ml-2 text-green-600">• Uploaded</span>}
                  </div>
                )}
              </div>


            </div>
          ))}
        </div>
        )}
      </div>

      <div className="flex items-center justify-between bg-gray-100 p-1 border-t text-xs text-gray-600">
        <span>{Object.keys(currentItems).length} Items</span>
        {selectedItems.length > 0 && <span>{selectedItems.length} Selected</span>}
      </div>

      {showPreview && previewFile &&(
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-blue-200 rounded-lg shadow-lg max-w-4xl max-h-full overflow-auto">
           
            <div className="bg-blue-300 flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-medium">{previewFile.name}</h3>
              <button
                onClick={() => setShowPreview(false)} 
                className="p-1 rounded hover:bg-gray-200"
              >
                <X size={16}/>
              </button>
            </div>

            <div className="p-4">
               {previewFile.fileType === "image" && (
                <img
                  src={previewFile.url}
                  alt={previewFile.name}
                  className="max-w-full max-h-96 object-contain mx-auto"
                />
              )}

              {previewFile.fileType === "audio" && (
                <div className="text-center">
                  <div className="mb-4">
                    <Music size={48} className="mx-auto text-purple-500"/>
                  </div>
                  <audio src={previewFile.url} controls className="w-full max-w-md">Your browser does not support audio playback.</audio>
                </div>
              )}

              {previewFile.fileType === "video" && (
                <video controls  src={previewFile.url}
                  className="max-w-full max-h-96 mx-auto"
                >
                  Your browser does not support video playback
                </video>
              )}

              {previewFile.fileType === "text" && (
                <div className="bg-gray-50 p-4 rounded max-h-96 overflow-auto">
                  <pre>{previewFile.content || "No content available"}</pre>
                </div>
              )}

            </div>

              <div className="text-center p-4 border-t bg-blue-300 text-lg text-gray-600">
                Size: {previewFile.size} • Modified: {previewFile.modified}
              </div>
            
          </div>
        </div>

      )}


      {/* Create Folder  */}
      {showCreateFolder && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-blue-200 p-4 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-medium mb-3">Create New Folder</h3>
            <input
              type="text"
              placeholder="Folder name"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              onKeyPress={(e) => e.key === "Enter" && createFolder()}
              autoFocus
            />
            <div className="flex gap-2 mt-4">
              <button
                onClick={createFolder}
                disabled={!newItemName.trim()}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              >
                Create
              </button>
              <button
                onClick={() => {
                  setShowCreateFolder(false)
                  setNewItemName("")
                }}
                className="px-3 py-1 border rounded bg-white hover:bg-blue-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Create File  */}
      {showCreateFile && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-blue-200 p-4 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-medium mb-3">Create New File</h3>
            <input
              type="text"
              placeholder="Folder name"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              onKeyPress={(e) => e.key === "Enter" && createFile()}
              autoFocus
            />
            <div className="flex gap-2 mt-4">
              <button
                onClick={createFile}
                disabled={!newItemName.trim()}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              >
                Create
              </button>
              <button
                onClick={() => {
                  setShowCreateFile(false)
                  setNewItemName("")
                }}
                className="px-3 py-1 border rounded bg-white hover:bg-blue-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}