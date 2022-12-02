import React from 'react'
import partner from "../../assets/img/partners/metamask.svg";

const Partner = () => {
  return (
    <div className='text-white py-32 lg:px-32 2xl:px-52'>
        <div className="introPartner text-center text-[38px]">
            <h3 className='font-bold'>Meet our partners</h3>
        </div>
        <div className="content-container grid lg:grid-cols-2 2xl:mx-52 2xl:pt-20">
            <div className="partner-img col-span-2 lg:col-span-1 2xl:pl-48">
                <img className='mx-auto' src={partner} alt="" />
            </div>
            <div className="partner-content px-10 pt-5 col-span-2 lg:col-span-1 2xl:px-20 2xl:pl-20 lg:border-l-2 ">
                <h4 className='text-[32px] font-semibold'>MetaMask</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
        </div>
    </div>
  )
}

export default Partner