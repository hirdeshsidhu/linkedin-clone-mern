import React, { useContext } from 'react'
import Nav from '../Pages/Nav'
import { userDataContext } from '../Context/UserContext'

function Home() {
    let { userData } = useContext(userDataContext)
    return (

        <div className="w-full min-h-screen bg-[#F4F2EE] relative">
            <Nav />

            <div className='w-full px-6 lg:px-40 flex gap-[20px]'>
                <div className='fixed  h-[230px] w-[200px] mt-16  overflow-hidden rounded-lg shadow-2xl top-10  bg-white'>
                    <div className='h-[25%] w-full bg-red-900 cursor-pointer'></div>
                    <div className='w-[70px] h-[70px] cursor-pointer bg-red-200 rounded-full overflow-hidden absolute top-[25px] left-[20px]'></div>

                    <h1 className='pt-10 ml-5 text-xl truncate font-semibold cursor-pointer'>{userData?.firstName} {userData?.lastName}</h1>
                    <p className='ml-5 text-gray-800 cursor-pointer  line-clamp-2 text-xs'>{userData?.headline}</p>
                    <p className='ml-5 text-gray-600 cursor-pointer line-clamp-2 text-xs'>{userData?.location}</p>
                    

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
