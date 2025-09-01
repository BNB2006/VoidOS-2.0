import React from "react"
import { Calculator } from './Claculator/Calculator'
import { Terminal } from "./Terminal/Terminal"
import { FileExplorer } from "./FileExplorer/FileExplorer"
import {  Google } from "./Iframe_Apps/Google"
import { VSCode } from "./Iframe_Apps/VSCode"
import { NoteBook } from "./NoteBook/NoteBook"
import { Map } from "./Iframe_Apps/Map"
import { Browser } from "./Browser/Browser"

 
export const apps = [
  {
    id: "tor",
    title: "Tor",
    icon: React.createElement("img", {
      src: "/Logo/tor.png",
      alt: "Calculos",
      width: 34,
    }),
    component: React.createElement(Browser),
    defaultSize: { width: 600, height: 400 },
  },
  {
    id: "fileExplorer",
    title: "File Explorer",
    icon: React.createElement("img", {
      src: "/Logo/file.png",
      alt: "File Explorer",
      width: 34,
    }),
    component: React.createElement(FileExplorer),
    defaultSize: { width: 500, height: 350 },
  },
  {
    id: "noteBook",
    title: "NoteBook",
    icon: React.createElement("img", {
      src: "/Logo/book.png",
      alt: "Calculos",
      width: 34,
    }),
    component: React.createElement(NoteBook),
    defaultSize: { width: 300, height: 400 },
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: React.createElement("img", {
      src: "/Logo/terminal.png",
      alt: "Terminal logo",
      width: 34,
    }),
    component: React.createElement(Terminal),
    defaultSize: { width: 400, height: 300 },
  },
  {
    id: "calculator",
    title: "Calculus",
    icon: React.createElement("img", {
      src: "/Logo/calculator.png",
      alt: "Calculos",
      width: 34,
    }),
    component: React.createElement(Calculator),
    defaultSize: { width: 300, height: 400 },
  },
  {
    id: "vsCode",
    title: "VS Code",
    icon: React.createElement("img", {
      src: "/Logo/vs-code.svg",
      alt: "VS code",
      width: 34,
    }),
    component: React.createElement(VSCode),
    defaultSize: { width: 600, height: 400 },
  },
  {
    id: "Google",
    title: "Google",
    icon: React.createElement("img", {
      src: "/Logo/google.png",
      alt: "Goggle",
      width: 34,
    }),
    component: React.createElement(Google),
    defaultSize: { width: 700, height: 400 },
  },
  {
    id: "map",
    title: "Map",
    icon: React.createElement("img", {
      src: "/Logo/location.png",
      alt: "Calculos",
      width: 34,
    }),
    component: React.createElement(Map),
    defaultSize: { width: 500, height: 400 },
  },
  
  
]

 
export const getAppById = (id) => apps.find((app) => app.id === id)
