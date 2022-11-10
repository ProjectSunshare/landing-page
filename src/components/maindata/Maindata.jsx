import React from 'react'

function Maindata() {
  return (
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="rounded-2xl drop-shadow-lg bg-[#FFFFFF] bg-opacity-25 grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-4">

        <div className="py-8">
          <div className="p-4 border-[#6e6e6e] lg:border-b-0 sm:border-r">
            <div className="max-w-md text-center">
              <h6 className="mb-2 font-bold leading-5">999,999,999</h6>
              <p className="text-white text-sm">
                Total Number of Users
              </p>
            </div>
          </div>
        </div>

        <div className="py-8">
          <div className="p-4 border-[#6e6e6e]  lg:border-b-0 lg:border-r">
            <div className="max-w-md text-center">
              <h6 className="mb-2 font-bold leading-5">999,999,999</h6>
              <p className="text-white text-sm">
                Total Active of Listing
              </p>
            </div>
          </div>
        </div>

        <div className="py-8">
          <div className="p-4 border-[#6e6e6e] sm:border-b-0 lg:border-b-0 sm:border-r">
            <div className="max-w-md text-center">
              <h6 className="mb-2 font-bold leading-5">999,999,999</h6>
              <p className="text-white text-sm">
                Block Height
              </p>
            </div>
          </div>
        </div>
        
        <div className="py-8">
          <div className="p-4">
            <div className="max-w-md text-center">
              <h6 className="mb-2 font-bold leading-5">Php 999,999,999</h6>
              <p className="text-white text-sm">
                Transfer Amount of Tokens
              </p>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Maindata