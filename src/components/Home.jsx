import React, { useState } from 'react'
import hamster from '../assets/hamster.png'
import { FaBitcoin } from "react-icons/fa";
const Home = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='bg-[#2C2F35] h-100'>
     
     <div className="flex justify-center items-center">
        <FaBitcoin className='text-yellow-400 text-4xl sm:text-6xll' />
        <h1 className='text-4xl sm:text-6xl font-bold text-center mt-6 text-white mb-8 '>{count}</h1>
    </div>
      <button className="mx-auto flex h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] items-center justify-center rounded-full border-[12px] border-[#3d3aa8] bg-[radial-gradient(circle_at_50%_45%,#5b5ff2_0%,#3b3fc4_45%,#23246b_100%)]" onClick={() => setCount(count + 1)}>
              <img src={hamster} alt="Hamster" className="w-[85%] object-contain translate-y-2" />
      </button>

      

      

     
    </div>
  )
}

export default Home
