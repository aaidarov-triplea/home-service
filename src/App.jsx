import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import { LoadingPage } from "./page/LoadingPage"
import { HomePage } from "./page/HomePage"
import { ToEnterPage } from "./page/ToEnterPage"
import { LoginPage } from "./page/LoginPage"
import { RegisterPage } from "./page/RegisterPage"
import { NotfoundPage } from "./page/NotfoundPage"
import { AboutPage } from "./page/AboutPage"
import { ServicesPage } from "./page/ServicesPage"
import { ContactPage } from "./page/ContactPage"

import { Clean } from "./components/specialists/Clean"
import { Electric } from "./components/specialists/Electric"
import { Plumbing } from "./components/specialists/Plumbing"
import { Office } from "./components/office"

function App() {
  const [isRoutesReady, setIsRoutesReady] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsRoutesReady(true)
    }, 1000)
  }, [])

  return (
    <BrowserRouter>
      {isRoutesReady ? (
        <div className="container xl m-auto bg-mainbg h-full">
          <Routes>
            <Route path="/" element={<ToEnterPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/*" element={<NotfoundPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/clean" element={<Clean />} />
            <Route path="/electric" element={<Electric />} />
            <Route path="/plumbing" element={<Plumbing />} />
            <Route path="/office" element={<Office />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      ) : (
        <div className="container xl m-auto bg-mainbg px-5">
          <LoadingPage />
        </div>
      )}
    </BrowserRouter>
  )
}

export default App
