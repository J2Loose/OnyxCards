import React, { useState } from 'react'
import { ProSidebar, MenuItem, Menu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css';
import { FaHome, FaBars } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { AiOutlinePlus, AiOutlinePlayCircle, AiOutlineUpload, AiOutlineUser, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { VscGraph } from 'react-icons/vsc'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'


export default function Sidebar() {
    const [ error, setError ] = useState('')
    const { logout } = useAuth()
    const history = useHistory()
    const [menuCollapse, setMenuCollapse] = useState(true)
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
    }

    //function to log the user out
    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/home')
        } catch {
            setError('Failed to log out')
        }
    }




    return (
        // sidebar creation using the pro sidebar library
        <ProSidebar collapsed={menuCollapse} style={{ height: '100vh', position: 'fixed' }}>
            <SidebarHeader>
                <Menu iconShape='circle'>
                    <MenuItem onClick={menuIconClick} icon={<FaBars />}>
                    </MenuItem>
                </Menu>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape='circle'>
                    <MenuItem icon={<FaHome />}>
                        Home
                        <Link to='/dashboard' />
                    </MenuItem>
                </Menu>
                <div>
                <Menu iconShape='circle'>
                    <MenuItem icon={<AiOutlinePlus />}>
                        Create
                        <Link to='/create' />
                    </MenuItem>
                    <MenuItem icon={<AiOutlinePlayCircle />}>
                        Play
                        <Link to='/play' />
                    </MenuItem>
                    <MenuItem icon={<VscGraph />}>
                        Stats
                        <Link to='/stats' />
                    </MenuItem>
                </Menu>
                </div>
            </SidebarContent> 
            <SidebarFooter>
                <Menu iconShape='circle' style={{position: 'sticky', bottom: '0'}}>
                    <MenuItem icon={<AiOutlineUser />}>
                        Profile
                        <Link to='/profile' />
                    </MenuItem>
                    <MenuItem icon={<FiLogOut />} onClick={handleLogout}>
                        Log Out
                    </MenuItem>
                </Menu>
            </SidebarFooter>
        </ProSidebar>
    )
}
