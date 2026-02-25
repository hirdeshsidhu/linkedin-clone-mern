import React from 'react'
import { useContext } from 'react';
import { createContext } from 'react'
import { authDataContext } from './AuthContext';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
export const userDataContext = createContext();


function UserContext({ children }) {
    let [userData,setUserData] = useState(null);
    let {serverUrl} = useContext(authDataContext);
    let [edit,setEdit] = useState(false);
    let [posts,setPosts] = useState([]);
    let getCurrentUser = async () => {
        try {
            let result = await axios.get(serverUrl + "/api/user/currentuser", { withCredentials: true })
            setUserData(result.data)
            console.log(result);
        } catch (error) {
            console.log(error);
            setUserData(null)
        }
    }
    let getPost = async ()=>{
        try {
            let result = await axios.get(serverUrl +"/api/post/getpost",{withCredentials:true})
            // console.log(result)
            setPosts(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getCurrentUser(),
        getPost()
    }, [])
    let value = {
        userData,
        setUserData,
        edit,
        setEdit,
        posts,
        getPost
    };
    return (
        <div>
            <userDataContext.Provider value={value}>
                {children}
            </userDataContext.Provider>
        </div>
    )
}

export default UserContext
