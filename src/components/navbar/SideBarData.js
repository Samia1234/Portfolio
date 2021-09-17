import React  from 'react'
import {AiFillHome,AiOutlinePaperClip,AiOutlineContacts,AiOutlineFundProjectionScreen,AiOutlineUser} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {GiSkills} from 'react-icons/gi'
export const SideBarData=[ 
    {
        title:'Home',
        path:'/Portfolio',
        icon:<AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'About Me',
        path:'/about',
        icon:<AiOutlineUser/>,
        cName:'nav-text'
    },
    {
        title:'Skills',
        path:'/skills',
        icon:<GiSkills/>,
        cName:'nav-text'
    },
    {
        title:'Works',
        path:'/works',
        icon:<AiOutlineFundProjectionScreen/>,
        cName:'nav-text'
    },
    {
        title:'Contact',
        path:'/contact',
        icon:<AiOutlineContacts/>,
        cName:'nav-text'
    }
]