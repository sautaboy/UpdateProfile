import React, { useState } from 'react'

import { useContext } from 'react'
import { UserDataSignUp } from '../App'
export default function Update() {


    const { setInstaId, setFacebookId, setImageAddress, setUserName } = useContext(UserDataSignUp)



    const [updateUserName, setUpdateUserName] = useState("Ashok Giri")
    const [updateImageAddress, setUpdateImageAddress] = useState("")
    const [updateFacebookId, setUpdateFacebookId] = useState("")
    const [updateInstaId, setUpdateInstaId] = useState("")




    const updateProfile = () => {
        setInstaId(updateInstaId)
        setFacebookId(updateFacebookId)
        setUserName(updateUserName)
        setImageAddress(updateImageAddress)
    }
    return (
        <div>
            <input type="text" name="" id="" placeholder='Enter Your Name' onChange={(event) => {
                setUpdateUserName(event.target.value)
            }} />
            {/* <input type="file" placeholder='Place Your Image' /> */}
            <input type="text" placeholder='enter insta user name' onChange={(event) => {
                setUpdateInstaId(event.target.value)
            }} />
            <input type="text" placeholder='Enter Your facebook User Name' onChange={(event) => {
                setUpdateFacebookId(event.target.value)
            }} />
            <input type="text" placeholder='Enter The Image Address' onChange={(event) => {
                setUpdateImageAddress(event.target.value)
            }} />
            <button onClick={updateProfile}>Update Profile</button>
        </div>
    )
}
