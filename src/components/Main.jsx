import React from 'react'
import cool from '../assets/cool.png'
import x10 from '../assets/x10.png'
const Main = () => {
  return (
    <div className='bg-[#2C2F35] '>
        <div className="mx-auto w-[92%] max-w-[340px] rounded-3xl bg-[#2C2F35] p-4 sm:p-6 shadow-2xl shadow-gray-800">
         <div className="flex flex-col gap-3">
     <div className="rounded-2xl bg-[#32363C]">
          <div className="flex items-center gap-4 p-4">
            <img src={x10} alt="" className="h-8 w-14" />
            <div>
              <p className="text-sm text-white">Top 10 cmc pairs</p>
              <p className="text-[11px] text-gray-400">Profit per hour</p>
              <p className="text-xs text-white">🪙 120</p>
            </div>
          </div>
          <div className="flex items-center border-t border-white/10 px-4 py-3 text-white">
            <span className="w-14 text-center text-xs">lvl 1</span>
            <span className="mx-4 h-6 w-px bg-white/10"></span>
            <span className="text-sm font-semibold">🪙 192</span>
          </div>
        </div>
        <div className="rounded-2xl bg-[#32363C]">
          <div className="flex items-center gap-4 p-4">
            <img src={cool} alt="" className="h-14 w-14" />
            <div>
              <p className="text-sm text-white">Top 10 cmc pairs</p>
              <p className="text-[11px] text-gray-400">Profit per hour</p>
              <p className="text-xs text-white">🪙 120</p>
            </div>
          </div>
          <div className="flex items-center border-t border-white/10 px-4 py-3 text-white">
            <span className="w-14 text-center text-xs">lvl 1</span>
            <span className="mx-4 h-6 w-px bg-white/10"></span>
            <span className="text-sm font-semibold">🪙 192</span>
          </div>
        </div>
        <div className="rounded-2xl bg-[#32363C]">
          <div className="flex items-center gap-4 p-4">
            <img src={x10} alt="" className="h-8 w-14" />
            <div>
              <p className="text-sm text-white">Top 10 cmc pairs</p>
              <p className="text-[11px] text-gray-400">Profit per hour</p>
              <p className="text-xs text-white">🪙 120</p>
            </div>
          </div>
          <div className="flex items-center border-t border-white/10 px-4 py-3 text-white">
            <span className="w-14 text-center text-xs">lvl 1</span>
            <span className="mx-4 h-6 w-px bg-white/10"></span>
            <span className="text-sm font-semibold">🪙 192</span>
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Main
