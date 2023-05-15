import React, { useState } from 'react'

import { useContext } from 'react'
import { UserDataSignUp } from '../App'
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { NavLink } from 'react-router-dom';
export default function Update() {


    const schema = yup.object().shape(
        {
            userName: yup.string().required("Name Sholud Be Full NAme").max(20),
            facebookId: yup.string().max(20).required("Facebook ID or Link is Required"),
            instaId: yup.string().max(20).required("Insta ID or Link is Required"),



            // i dont know how to validate image using yup help me 
        }
    );


    const { handleSubmit, register } = useForm({
        resolver: yupResolver(schema)

    });
    // this is for grabing file
    const [image, setImage] = useState("");
    const handleOnChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const imageUrl = reader.result;
                setImage(imageUrl);
            };
            reader.readAsDataURL(file);
        }

    }


    const onSubmit = (data) => {
        console.log(data)
        setInstaId(`https://instagram.com/${data.instaId}/`)
        setFacebookId(`https://facebook.com/${data.facebookId}/`)
        setUserName(data.userName)
        setImageAddress(image)

    }






    const { setInstaId, setFacebookId, setImageAddress, setUserName } = useContext(UserDataSignUp)




    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='updateProfileForm'>
                    <label htmlFor="">
                        <span>Name:</span>
                        <input type="text" name="" id="" placeholder='Enter Your Name' {...register("userName")} />
                    </label>

                    <label htmlFor="">
                        <span>Place Your Photo</span>
                        <input type="file"   {...register("userPhoto")} onChange={handleOnChange} required />
                    </label>

                    <label htmlFor="">
                        <span>Insta Id:</span>
                        <input type="text" placeholder='Place Your Instan Id Or Url/Link' {...register("instaId")} />
                    </label>

                    <label htmlFor="">
                        <span>Facebook Id:</span>
                        <input type="text" placeholder='Place Your Facebook Id Or Url/Link'  {...register("facebookId")} target="_blank" />
                    </label>
                        <input type="submit" name="" id="" />
                </div>
            </form >


        </div >

    )
}



// const schema = yup.object().shape(
//     {
//         userName: yup.string().required("Name Sholud Be Full NAme").max(20),
//         facebookId: yup.string().max(20).required("Facebook ID or Link is Required"),
//         instaId: yup.string().max(20).required("Insta ID or Link is Required"),
//         // userPhoto: yup.required("Photo is Required"),


//     }
// )

// const { register, handleSubmit } = useForm({
//     resolver: yupResolver(schema)

// });

// const onSubmit = (data) => {
//     console.log(data)
// }