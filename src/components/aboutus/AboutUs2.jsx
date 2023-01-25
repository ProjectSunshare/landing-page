import sunshareteam from '../../assets/img/about/sunshare_team.JPG'
import project_lead from '../../assets/img/about/coreteam/project_lead.png'
import programmer from '../../assets/img/about/coreteam/programmer.png'
import proj_devt_offr from '../../assets/img/about/coreteam/proj_devt_offr.png'
import proj_devt from '../../assets/img/about/coreteam/proj_devt.png'
import project_engr from '../../assets/img/about/coreteam/project_engr.png'
import React, { useState } from "react";

    const AboutUs2 = () => {

        const [image, setImage] = useState({
            });

        const initialPerson = {
            proj_devt_offr :false,  
            proj_devt:false,
            project_lead:false,
            programmer:false,
            project_engr:false,  
        }

        const [person, setPerson] = useState(initialPerson);

        const initialValues = {
            name: "",
            title: "",
            contact: "",
            email: ""
        }

        const [text, setText] = useState(initialValues);

        const teamInfo = [
            ["Rodney A. Doyaoen", "Project Development Officer","+639433490231","radoyaoen@uc-bcf.edu.ph"],
            ["Sophia Marie F. Arellano","Project Development Officer","+639245470231","sfarellano@uc-bcf.edu.ph"],
            ["Dr. Thelma D. Palaoag","Project Leader","+639456712357","tdpalaoag@uc-bcf.edu.ph"],
            ["Earl P. Siachongco","Project Computer Programmer","+639754231562","epsiachongco@uc-bcf.edu.ph"],
            ["Michael James Deus","Project Staff","+639798542345","mjdeus@uc-bcf.edu.ph"]
        ]

        function getText(){
            let counter = 0
            for (let key in initialPerson ) {
                if (initialPerson[key] == true){                    
                    break
                }
                counter+=1
            }
            let newText = {
                name: teamInfo[counter][0],
                title: teamInfo[counter][1],
                contact: teamInfo[counter][2],
                email: teamInfo[counter][3],
            }
            setText(newText)
        }

        function handleChange(picture, who){
            initialPerson[who] = !initialPerson[who]
            setImage(picture)
            setPerson(initialPerson)
            getText()
            console.log(initialPerson)
        }
    
        return(
            
            <div className='w-full flex flex-col justify-items-center align-items-center'>
                <div className='mt-[10rem]'>
                    <h4 className='font-Space-Grotesk font-black text-amber-500 text-center xl:text-[20px]'>
                        — Team —
                    </h4>
                    <h1 className='w-full h-[5rem] font-Space-Grotesk font-black text-center xl:text-[30px]'>
                        The Sunshare Team
                    </h1> 
                </div>
            
                <div className='mx-auto relative'>
                    
                    <div className='w-full h-full absolute flex flex-row place-content-evenly z-10' >
                            
                        <div className=''>
                            <button class="w-5 h-full z-10" onClick={(() => handleChange(proj_devt_offr, "proj_devt_offr"))} alt="proj_devt_offr">
                                <svg id='proj_dev_one' className="bg-red-400 pb-[5.8rem] w-full h-full z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FBE126" >
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div className=''>
                            <button class="w-5 h-full ml-[20rem] z-10" onClick={(() => handleChange(proj_devt, "proj_devt"))} alt="proj_devt">
                                <svg id='proj_dev_two' className="bg-blue-400 pb-[5rem] w-full h-full z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FBE126" >
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div className=''>
                            <button class="w-5 h-full ml-[20rem] items-center z-10" onClick={(() => handleChange(project_lead,"project_lead"))} alt="project_lead">
                                <svg id='proj_lead' className="bg-green-400 pb-[3rem] relative w-full h-full z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FBE126" >
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div className=''>
                            <button class="w-5 h-full ml-[20rem] items-center z-10" onClick={() => handleChange(programmer, "programmer")} alt="programmer">
                                <svg id='programmer' className="bg-blue-400 relative w-full h-full z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FBE126" >
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div className=''>
                            <button class="w-5 h-full ml-[20rem] items-center z-10" onClick={() => handleChange(project_engr, "project_engr")} alt="project_engr">
                                <svg id='proj_ece' className="bg-red-400 relative w-full h-full z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FBE126" >
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                </svg>
                            </button>
                       </div>
                    </div>
                    <div className='relative drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]'>
                        <img src={sunshareteam} className='max-w-full h-full' alt="acquisition"/> 
                    </div>
                </div>
                <div className="bg-[#ffffff] mx-auto grid grid-cols-3 flex flex-col justify-items-center align-items-center">
                    <div className="scale-75 col-span-2 mx-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                        <div className='w-full h-full'>
                            <div className="rounded m-auto ">
                                {<img src={image} alt=""/>}           
                            </div>
                        </div>
                    </div>
                    <div className="pb-[20%] pt-[40%] w-full h-full">
                        <h1 className='font-Space-Grotesk font-black text-left xl:text-[50px]' alt="">{text.name}</h1>
                        <h4 className='text-[#FEA803] font-Space-Grotesk font-black text-left xl:text-[30px]' alt="">{text.title}</h4>
                        <h5 className='xl:text-[30px]'>{text.contact}</h5>
                        <h5 className='xl:text-[30px]'>{text.email}</h5>
                    </div>
                </div>
            </div>
        )
    }    
    
export default AboutUs2;