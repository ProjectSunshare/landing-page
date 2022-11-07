import React from 'react'
import Navbar from './navbar/Navbar'
import Navpage from './navbar/Navpage'

const Mainpage = () => {
  return (
    <React.Fragment>
      <section>
        <div className='h-[110px] w-full'>
          <Navbar />
        </div>
        <div className='container m-auto'>
          <Navpage />
        </div>
      </section>
    </React.Fragment>
  )
}

export default Mainpage