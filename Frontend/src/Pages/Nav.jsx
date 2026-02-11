import React, { useContext } from 'react'
import logo1 from "../assets/linkedin.png"
import { FaHome, FaSearch } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsChatLeftDots } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { useState } from 'react';
import UserContext, { userDataContext } from '../Context/UserContext';
import { authDataContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function Nav() {
    const [active, setActive] = useState("home");
    let [search, setSearch] = useState(false);
    let { userData,setUserData } = useContext(userDataContext);
    let { serverUrl } = useContext(authDataContext);
    let navigate = useNavigate()
    let [showMenu, setShowMenu] = useState(false);
    const handleLogOut = async () => {
        try {
            let result = await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true })
            // console.log(result)
            setUserData(null)
            navigate("/login")
        } catch (error) {

        }
    }
    const navItemClass = (name) => {
        return `flex w-[42px] lg:w-[80px] flex-col  items-center justify-center pb-1 cursor-pointer hover:text-black transition-all duration-200  ${active === name ? "border-b-2 border-b-black text-black " : "border-b-2 border-transparent text-gray-600"}`
    }
    return (
        <div className='w-full bg-white h-[65px] fixed top-0 flex justify-between items-center gap-[3px] px-6 lg:px-40'>
            <div className='flex  lg:gap-[14px]'>
                <div className='mr-[20px] lg:mr-0'>
                    <img className='w-[35px]' src={logo1} alt="" />
                </div>
                <div className='text-sm  mt-2 lg:hidden' onClick={() => setSearch(prev => !prev)}><FaSearch /></div>
                <form action="" className={`${!search ? "hidden" : ""} lg:flex h-[35px] w-[100px] lg:w-[250px] transition-all focus-within:border-[1.5px] focus-within:border-black lg:focus-within:w-[400px] border-[1px] border-gray-400 rounded-2xl px-3 `}>
                    <span className='hidden lg:block font-medium     mr-3 mt-2'><FaSearch /></span>
                    <input type="text" className='flex-1 h-full w-[80%] outline-none' placeholder='Search' name="" id="" />
                </form>
            </div>
            <div className='flex gap-[7px] lg:gap-[20px] relative'>
                {
                    showMenu && (
                        <div className='w-[300px] h-[300px] top-[65px] flex flex-col items-center justify-center rounded-xl right-[0px] bg-white shadow-lg absolute p-[20px] gap-[20px]'>
                            <div>
                                <img className='h-[60px] rounded-full overflow-hidden' src={userData?.profileImage || null} alt="" />
                            </div>
                            <div>
                                <h1 className='text-[18px] font-semibold text-gray-700 '>{userData.firstName} {userData.lastName}</h1>
                            </div>
                            <button className='px-3 py-1 border-[#004182] text-[#004182] active:scale-95 hover:bg-[#004182] hover:text-white w-full border-[1px] cursor-pointer rounded-full '>View Profile</button>
                            <span className='w-full h-[1px] bg-gray-400'></span>
                            <button onClick={() => handleLogOut()} className='px-3 py-2 border-red-600 border-[1px] text-red-600 hover:bg-red-600 hover:text-white active:scale-95 cursor-pointer rounded-full w-full'>Sign Out</button>
                        </div>
                    )
                }

                <div className={`${navItemClass("home")} hidden lg:flex flex-col`} onClick={() => setActive("home")}>
                    <FaHome className='text-xl' />
                    <div className='text-xs font-medium'>Home</div>
                </div>
                <div className={`${navItemClass("network")} hidden lg:flex`} onClick={() => setActive("network")}>
                    <MdGroups2 className='text-xl' />
                    <div className='text-xs font-medium'>My Network</div>
                </div>
                <div className={`${navItemClass("jobs")} hidden lg:flex`} onClick={() => setActive("jobs")}>
                    <BsBriefcaseFill className='text-xl' />
                    <div className='text-xs font-medium'>Jobs</div>
                </div>
                <div className={`${navItemClass("messaging")}`} onClick={() => setActive("messaging")}>
                    <BsChatLeftDots className='text-xl' />
                    <div className=' hidden md:block text-xs font-medium'>Messaging</div>
                </div>
                <div className={`${navItemClass("notifications")}`} onClick={() => setActive("notifications")}>
                    <IoIosNotifications className='text-xl' />
                    <div className='text-xs font-medium hidden md:block'>Notifications</div>
                </div>
                <div>
                    <img onClick={() => setShowMenu(!showMenu)} className=' cursor-pointer h-[43px] rounded-full overflow-hidden' src={userData?.profileImage} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Nav
