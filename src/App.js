import Navbar from "./components/Navbar"
import Front from "./components/Front"
import Playlist from "./components/Playlist"
import Footer from "./components/Footer"
import React from "react"
export default function App() {
// website was coded from this figma draft
// https://www.figma.com/file/4snzM0rYzukos5eJWBAK2F/Design?t=zACpWMr8bsiYgqm9-6

  console.log("website was coded from this figma draft:")
  console.log("https://www.figma.com/file/4snzM0rYzukos5eJWBAK2F/Design?t=zACpWMr8bsiYgqm9-6")
  
  return (
    <>
      <Navbar/>
      <main>
        <Front/>
        <Playlist/>
      </main>
      <Footer/>
    </>
  )
}


