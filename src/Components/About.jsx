import React from 'react'

const About = () => {
  return (
    <div className='flex flex-wrap justify-between fix-padding md:pt-10'>
        <div className='lg:w-3/6'>
            <div className='text_3 text-3xl md:text-5xl pb-4 pt-8'>About <span className='primary2'>PIN</span><span className='primary1'>POINT</span></div>
           <div className=' md:text-[36px] pb-3 montserrat_semibold'>Discover the <span className='text-[#165593]'>FUTURE of<br></br> SOCIALIZING</span> ABOUT <span className='primary1'>FOOD!</span> </div>
           <div className='content w-[90%] text-base md:text-2xl text-current font-medium montserrat_regular'>Pinpoint is bringing local business to the communities fingertips. Whether you're craving some tacos or looking for your morning coffee fix, let Pinpoint swiftly guide you! With ease, our Interactive Map will locate the hidden gems you never knew existed. After your visit, don't forget to post about your experience to make your friends jealous!</div>
        </div>
        <div className='img_section'>
            <img className='card_img' src='/images1/about_img.svg' alt=''/>
        </div>
    </div>
  )
}

export default About