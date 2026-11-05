import React from 'react'
import { Outlet } from 'react-router-dom'
import "./MainLayout.css"
import CustomHeader from '../custom-header/CustomHeader'

const MainLayout = () => {
  return (
    <div>
        <div className='customHeader'>
            <CustomHeader/>
        </div>
        <div className='customBody'>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout;