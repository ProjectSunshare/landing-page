import React, { useEffect } from 'react'

import marketPlace from '../../assets/img/about/marketplace.png'
import acquisition from '../../assets/img/about/analysis.png'
import demand from '../../assets/img/about/demand.png'

    const AboutUs = () =>{

        return(
        <div>
                <div className='flex flex-col justify-between md:items-start w-full h-full m-a px-2 p-a' data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
                    
                    {/*--Title--*/}
                        <h1 className='mt-32  sm:mt-[30px] font-Space-Grotesk font-black text-[30px] text-center sm:text-left sm:text-[50px] mr-0 md:mr-3 lg:mr-4 xl:mr-8 2xl:mr-10'>
                            Meet the people behind Sunshare
                        </h1>
                        <p className='mt-[10px] sm:mt-[30px] pr-[10rem] font-Poppins font-normal text-left sm:text-[20px] drop-shadow-xl'>
                            A renewable energy marketplace through a blockchain application to manage, secure and improve the buy-and-sell solar energy experience among users. The main objective of this application is to promote renewable energy with the use of emerging blockchain technology. Enabling users to generate their own source of sustainable energy and trade it off with their neighbors.
                        ​</p>
                    {/*--Title End--*/}
                    <div className='m-[100px] justify-items-center align-items-center max-w-[1920px] '>  
                        <div className=' m-[5rem] grid grid-cols-2 flex flex-col justify-items-center align-items-center'>
                            
                            <div className='flex flex-col justify-center content-center'>
                                {/*--Marketplace--*/}
                                <h1 className='font-Space-Grotesk font-black text-left xl:text-[30px]'>
                                    Blockchain Marketplace Feature  
                                </h1>
                                <p className='pr-5 pb-5 pt-5  flex flex-col justify-items-center w-full xl:h-[60] font-Poppins font-normal text-[15px] sm:text-left sm:text-[13px] drop-shadow-xl '>
                                    Showing nearby and newest listings of those who want to sell electricity along wit relevant information that support decision-making. Transactions are stored securely and verified with smart contracts.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique. Sed felis eget velit aliquet. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Non consectetur a erat nam at lectus urna duis. Pellentesque id nibh tortor id aliquet lectus proin. Ultricies tristique nulla aliquet enim tortor. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. 
                                    <br></br>
                                    <br></br>
                                    Facilisis magna etiam tempor orci eu lobortis elementum. Sagittis orci a scelerisque purus semper eget duis. Ligula ullamcorper malesuada proin libero nunc. Facilisis volutpat est velit egestas dui id ornare arcu. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Eu augue ut lectus arcu bibendum at varius. Ut morbi tincidunt augue interdum velit euismod in pellentesque.
                                    Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Vel pretium lectus quam id leo in vitae turpis massa. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Nunc sed id semper risus in.
                                </p>
                                {/*--End Marketplace--*/}
                            </div>
                            <div className='m-[5rem]'>
                                <img src={marketPlace} className='w-auto h-auto' alt="marketplace"/> 
                            </div>
                        </div>
                        <div className='m-[5rem] grid grid-cols-2 flex flex-col justify-items-center align-items-center'>
                            <div className='flex flex-col justify-center content-center'>
                                {/*--Acquisition--*/}
                                <h1 className='font-Space-Grotesk font-black text-left xl:text-[30px]'>
                                    Daily Forecast on Energy Acquisition
                                </h1>   
                                <p className='pr-5 pb-5 pt-5  flex flex-col justify-items-center w-full h-auto font-Poppins font-normal text-[15px] sm:text-left sm:text-[13px] drop-shadow-xl '>
                                    Prediciting how much energy can be acquired throughout the day. This helps manage the electricity consumed daily through reports that include the total energy consumed by every household device --providing an efficient method for monitoring and budgeting the resource wisely.
                                    <br></br>
                                    <br></br>
                                    Facilisis magna etiam tempor orci eu lobortis elementum. Sagittis orci a scelerisque purus semper eget duis. Ligula ullamcorper malesuada proin libero nunc. Facilisis volutpat est velit egestas dui id ornare arcu. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Eu augue ut lectus arcu bibendum at varius. Ut morbi tincidunt augue interdum velit euismod in pellentesque.
                                    Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Vel pretium lectus quam id leo in vitae turpis massa. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Nunc sed id semper risus in.
                                ​</p>
                                {/*--End Acquisition--*/}
                            </div>
                            <div className=' m-[5rem]'>
                                <img src={acquisition} className='object-scale-down w-[350px] h-[350px]' alt="acquisition"/>  
                            </div>
                        </div>
                        <div className=' m-[5rem] grid grid-cols-2 flex flex-col justify-items-center align-items-center'>
                            <div className='flex flex-col justify-center content-center'>
                            {/*--Demand--*/}
                                <h1 className='font-Space-Grotesk font-black text-left xl:text-[30px]'>
                                    Future Forecast on Energy Demands
                                </h1>    
                                <p className='pr-5 pb-5 pt-5  flex flex-col justify-items-center w-full h-auto font-Poppins font-normal text-[15px] sm:text-left sm:text-[13px] drop-shadow-xl '>
                                    Forecasting of the energy demands in both energy production and consumption. Reports include which time period produces or consumes more. This gives the user a better view of which time-period has better production or greater consumption for guided decision-making.
                                    <br></br>
                                    <br></br>
                                    Facilisis magna etiam tempor orci eu lobortis elementum. Sagittis orci a scelerisque purus semper eget duis. Ligula ullamcorper malesuada proin libero nunc. Facilisis volutpat est velit egestas dui id ornare arcu. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Eu augue ut lectus arcu bibendum at varius. Ut morbi tincidunt augue interdum velit euismod in pellentesque.
                                    Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Vel pretium lectus quam id leo in vitae turpis massa. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Nunc sed id semper risus in.
                                ​</p>
                                {/*--End Demand--*/}
                            </div>        
                            <div>
                                <img src={demand} className='object-scale-down w-[500px] h-[500px]' alt="demand"/>   
                            </div>
                        </div>
                        <div className=' m-[5rem] grid grid-cols-2 flex flex-col justify-items-center align-items-center'>
                            <div className='flex flex-col justify-center content-center'>
                                <img src={demand} className='w-auto h-auto' alt="demand"/>   
                            </div>
                            <div>
                                <h1 className='font-Space-Grotesk font-black text-left xl:text-[30px]'>
                                        Sunshare Token
                                </h1>    
                                <p className='pr-5 pb-5 pt-5 flex flex-col justify-items-center w-full h-auto font-Poppins font-normal text-[15px] sm:text-left sm:text-[13px] drop-shadow-xl '>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique. Sed felis eget velit aliquet. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Non consectetur a erat nam at lectus urna duis. Pellentesque id nibh tortor id aliquet lectus proin. Ultricies tristique nulla aliquet enim tortor. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. 
                                    Facilisis magna etiam tempor orci eu lobortis elementum. Sagittis orci a scelerisque purus semper eget duis. Ligula ullamcorper malesuada proin libero nunc. Facilisis volutpat est velit egestas dui id ornare arcu. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Eu augue ut lectus arcu bibendum at varius. Ut morbi tincidunt augue interdum velit euismod in pellentesque.
                                    Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Vel pretium lectus quam id leo in vitae turpis massa. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Nunc sed id semper risus in.
                                </p>
                            </div>
                        </div>
                    {/*--Content--*/}
                    </div>
                        
            </div>
            
        </div>
        )
    }

export default AboutUs;



