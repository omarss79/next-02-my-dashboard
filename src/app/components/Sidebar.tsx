import Image from 'next/image'
import React from 'react'
import { IoBrowsersOutline, IoLogoReact } from 'react-icons/io5'
import { SideMenuItem } from './SideMenuItem'

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40} />,
        title: 'Dashboard',
        subTitle: 'Visualización'
    },
    {
        path: '/dashboard/counter',
        icon: <IoBrowsersOutline size={40} />,
        title: 'Counter',
        subTitle: 'Contador Client Side'
    }
]

export const Sidebar = () => {
  return (
    <div id="menu" style={{ width: '300px' }} className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll">
        <div id="logo" className="my-4 px-6">
            <h1 className="flex text-lg md:text-2xl font-bold text-white">
                <IoLogoReact className='mr-2' /> Dash
                <span className="text-blue-500">8</span>.
            </h1>
            <p className="text-slate-500 text-sm">Manage your actions and activities</p>
        </div>
        <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
            <span>
                <Image 
                    className="rounded-full w-8 h-8" 
                    src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1tv6lh.img" 
                    width={50}
                    height={50}
                    alt="" />
            </span>
            <span className="text-sm md:text-base font-bold">
                Omar Soto
            </span>
            </a>
        </div>
        <div id="nav" className="w-full px-6">

            {
                menuItems.map ( item => (
                    <SideMenuItem key={item.path} {...item} /> 
                ))
            }
        </div>
    </div>
  )
}
