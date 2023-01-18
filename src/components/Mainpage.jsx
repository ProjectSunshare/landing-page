import React from 'react'
import Navbar from './navbar/Navbar'
import Navpage from './navbar/Navpage'

const Mainpage = () => {
  return (
    <React.Fragment>
      <section className="overflow-x-hidden">
        <div className='h-[100px] w-full'>
          <Navbar />
        </div>
        <div className='w-full'>
          <Navpage />
        </div>
      </section>
    </React.Fragment>
  )
}

export default Mainpage