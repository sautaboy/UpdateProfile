import React from 'react'
import { useContext } from 'react'

// Impoerting Data From UserDataSigUp Using SUeContext
import { UserDataSignUp } from '../App'
import { NavLink } from 'react-router-dom'




export default function About() {
    const { userName, facebookId, instaId, imageAddress, userInformation } = useContext(UserDataSignUp)
    let a = "Url.createObjectURl"
    return (
        <div className='aboutPage' >
            <div className="userProfile">
                <h2>Personal Information</h2>

                <div className="userImage">
                    <img className='imageSize' id='image' src={imageAddress} alt="" />
                </div>

                <div className="userName">
                    <h2>People Call Me : {userName}</h2>
                </div>


                <div className="userInformation">
                    <p>
                        {userInformation}
                    </p>
                </div>

                <div className="h2">My Social Sites</div>

                <div className="userSocialSites">
                    <NavLink to={instaId}><li>instagram</li></NavLink>
                    <NavLink to={facebookId}><li>facebook</li></NavLink>
                    {/* <NavLink to="/"><li>github</li></NavLink> */}
                    {/* <NavLink to="/"><li>snapchat</li></NavLink> */}
                </div>
            </div>
        </div>
    )
}
