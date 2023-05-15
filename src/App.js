import React, { createContext, useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


// Importing Css
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Update from './components/Update';
import Navbar from './components/Navbar';
import Error from './components/Error';



// exporting SigUp Data
export const UserDataSignUp = createContext();
function App() {

  const image = "https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000"


  const [userName, setUserName] = useState("Madarchod")
  const [instaId, setInstaId] = useState("https://instagram.com/sautaboy/")
  const [facebookId, setFacebookId] = useState("https://www.facebook.com/sautaboy")
  const [userInformation, setUserInformation] = useState("Ma bhat Khaxu rati vayesi ")
  const [imageAddress, setImageAddress] = useState(image)
  return (
    <div>
      <UserDataSignUp.Provider value={{ userName, imageAddress, facebookId, setFacebookId, instaId, setInstaId, setImageAddress, setUserName, userInformation, setUserInformation }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='*' element={<Error />} />
            <Route path='update_your_profile' element={<Update />} />
          </Routes>
        </BrowserRouter>
      </UserDataSignUp.Provider>
    </div>
  )
}

export default App
