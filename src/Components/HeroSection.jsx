import React from 'react'

const HeroSection = () => {
  return (
    <div className='hero fix-padding bg md:pt-40 mb-10 md:flex justify-between bg-cover bg-no-repeat' >
      <div className='hero_section_1 grid-cols-1'>
        <div className=''>
        <span className='md:pb-3 text_1 text-2xl md:text-4xl'>Finding your favourite</span>
        <br></br><span className='text-4xl md:text-[56px]  primary2'>Business </span><span className='text_1 text-4xl'>on</span>
         <span className='text_2 text-4xl md:text-6xl primary1'>Wheels</span><br></br>
         <span className='text-3xl md:text-4xl'> has never been <strong>easier!</strong></span></div>
        <div className=' text-sm md:text-xl pb-0 md:pb-5 pt-3 montserrat_light'>Skip Google Search - Pinpoint Brings Your<br></br> Favourites to You!
</div>
<div className='mb-11 md:mb-0'>
  <img className='h-200px md:h-[auto] d_none' src='/images1/hero_1.svg' alt=''/>
</div>
      </div>
      <div className='text-center sm:pt-6'>
        <div className='sm:pt-5  mb-4 flex justify-center'>
          <input className=' search_input border-2 border-[#8D1A1C] outline-none h-[56px] text-[#8D1A1C] lg:w-3/5 text-xl pl-7 rounded-full' type='text' placeholder=' FIND NEARBY FOOD TRUCKS'></input>
          <img className=' mt-[-3px] md:mt-0' src='/images1/Group 1269.svg' alt=''/>
        </div>
      <img className='mt-5 md:mt-0' src='/images1/hero_2.svg' alt=''/>   
      </div>
    </div>
  )
}

export default HeroSection