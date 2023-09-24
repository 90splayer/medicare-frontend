import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
        <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                <img src={aboutImg} alt=''/>
                <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] 
                right-[-30%] md:right-[-7%] lg:right-[22%]'>
                <Link to='/'>
                    <img src={aboutCardImg} alt=''/>
                </Link>
                </div>
            </div>

            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className='heading'>Proud to be one of the nations best</h2>
                <p className='text__para'>For 30 years in a row, African News & World Report has 
                recognized us as one of the best publics hospitals in the Nation and #1 in Nigeria
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                <p className='text__para'>Our best is what we strive for each day, caring for our patients-not
                looking back at what we accomplished but towards what we can do tomorrow. Providing the best.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Link to='/'>
                    <button className='btn'>Learn More</button>
                </Link>
            </div>
        </div>
        </div>
    </section>
  )
}

export default About