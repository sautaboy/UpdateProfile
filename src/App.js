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
  const [userName, setUserName] = useState("yourName")
  const [instaId, setInstaId] = useState("https://www.instagram.com/sautaboy/")
  const [facebookId, setFacebookId] = useState("https://www.facebook.com/profile.php?id=100034241062853")
  // const [userEmail, setUserEmail] = useState("yourEmail@gmail.com")
  const [userInformation, setUserInformation] = useState(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non unde, dolorem numquam quaerat corporis voluptatum minima quod dignissimos. Quo quos fugiat officia suscipit maiores eveniet? Dolore ab quisquam odit ipsam, quos eius in blanditiis accusamus beatae, porro praesentium. Doloremque repellat quae itaque aperiam architecto eius? Nemo deserunt porro fuga non?")
  const [imageAddress, setImageAddress] = useState("https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/272911069_243867517906237_3548297477901327458_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=19026a&_nc_ohc=0iDnBX2JTJAAX8GJQrk&_nc_ht=scontent.fktm16-1.fna&oh=00_AfAFxFr16KVZSjQQQL345dnsNpZSZCeHWdD5CRxe9kOvXw&oe=646590F0")
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
