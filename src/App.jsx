import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaBitcoin } from "react-icons/fa";
import { SiExpertsexchange } from "react-icons/si";
import { GiErmine } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { PiCoinsBold } from "react-icons/pi";
import { TbCoinFilled } from "react-icons/tb";

const App = () => {
  return (
    <div className="min-h-screen bg-[#2C2F35] text-white flex flex-col">
      <h1 className='text-center pt-2 font-blod text-2xl'>Hamster Kombat</h1>
      <div className="flex justify-center items-center gap-2 mt-6 px-3 w-full max-w-xl mx-auto">
        <div className="flex-1 py-2 rounded-2xl bg-[#32363C] text-center text-xs sm:text-base">
          <h5 className="text-red-600 text-center pt-2 ">Earn per tap</h5>
          <div className="flex justify-center items-center ">
          <FaBitcoin className='text-yellow-400' />
          <p className='text-white'>+12</p>
          </div>
        </div>
        <div className="flex-1 py-2 rounded-2xl bg-[#32363C] text-center text-xs sm:text-base">
          <h5 className="text-blue-600 text-center pt-2">Coins to level up</h5>
          <p className='text-white'>10M</p>
        </div>
        <div className="flex-1 py-2 rounded-2xl bg-[#32363C] text-center text-xs sm:text-base">
          <h5 className="text-green-600 text-center pt-2 ">Profit per hour</h5>
          <div className="flex justify-center items-center ">
          <FaBitcoin className='text-yellow-400' />
          <p className='text-white'>+123</p>
          </div>
        </div>


      </div>

      <main className="flex-1 mb-0">
        <Outlet />
      </main>

      <footer className='w-[95%] max-w-md mx-auto mb-4 bg-[#32363C] rounded-xl flex justify-around items-center py-1'>
        <Link to='/home' className='hover:bg-gray-800 p-3 rounded-xl text-center'>
        <SiExpertsexchange  className='hover:text-yellow-600 flex flex-col items-center'/>

          <p>Exchange</p>
        </Link>
        <Link to='/main' className='hover:bg-gray-800 p-3 rounded-xl'>
        <GiErmine className='hover:text-yellow-600 flex flex-col items-center' />

          <p>Main</p>
        </Link>
        <div className="hover:bg-gray-800 p-3 rounded-xl">
          <FaUserFriends className='hover:text-yellow-600 flex flex-col items-center' />

          <p>Friends</p>
        </div>
         <div className="hover:bg-gray-800 p-3 rounded-xl">
          <PiCoinsBold className='hover:text-yellow-600 flex flex-col items-center'/>

          <p>Earn</p>
        </div>
         <div className="hover:bg-gray-800 p-3 rounded-xl">
          <TbCoinFilled className='hover:text-yellow-600 flex flex-col items-center'/>

          <p>Airdrop</p>
        </div>
         
      </footer>

    </div>
  )
}

export default App
