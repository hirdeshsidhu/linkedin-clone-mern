import React, { useContext, useState } from 'react'
import Nav from '../Pages/Nav'
import { userDataContext } from '../Context/UserContext'
import EditProfile from '../Pages/EditProfile'
import { IoPencil } from "react-icons/io5";

function Home() {
    let { userData,edit,setEdit } = useContext(userDataContext)
    
    return (

        <div className="w-full min-h-screen bg-[#F4F2EE] relative">
            {edit && <EditProfile />}
            <Nav />

            <div className='w-full px-6 lg:px-40 flex gap-[20px]'>
                <div className='fixed  h-[230px] w-[200px] mt-16  overflow-hidden rounded-lg shadow-2xl top-10  bg-white'>
                   
                    <div className='h-[25%] w-full bg-red-900 cursor-pointer overflow-hidden'>
                        <img src={userData?.coverImage || null} alt="" />
                    </div>
                     <IoPencil className='absolute top-[10px] right-[10px] cursor-pointer hover:text-white' onClick={()=>setEdit(true)} />
                    <div className='w-[70px] h-[70px] cursor-pointer bg-red-200 rounded-full overflow-hidden absolute top-[25px] left-[20px]'>
                        <img src={userData?.profileImage || null} alt="" />
                    </div>

                    <h1 className='pt-10 ml-5 text-xl truncate font-semibold cursor-pointer'>{userData?.firstName} {userData?.lastName}</h1>
                    <p className='ml-5 text-gray-800 cursor-pointer  line-clamp-2 text-xs pr-4 mt-2'>{userData?.headline}</p>
                    <p className='ml-5 text-gray-600 cursor-pointer line-clamp-2 text-xs mt-2'>{userData?.location}</p>
                    <p className='ml-5 cursor-pointer  text-sm'>{userData?.education?.[0]?.college}</p>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div className='h-screen'></div>
        </div>
    )
}

export default Home
