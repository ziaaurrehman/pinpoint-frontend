import React from 'react'

const Features = () => {
  return (
    <div className='mt-12 px-11'>
        <div className='text-center pb-9 montserrat_medium text-3xl md:text-5xl'>Features for Users</div>
        {/* <img className='ml-auto mr-auto w-[100%] md:w-[66%]' src='/images1/Group 1282.svg' alt=''></img> */}
        <div className='d-flex justify-center items-center md:pl-[90px] mpl'>
        <div className=''>
        <div style={{border:"2px solid #175594"}} className='h-[195px] w-[204px] mobile_view_div rounded-full pt-10'>
          <img className='mr-auto ml-auto' src='/images1/cuate.svg' alt=''/>
          <div className='montserrat_semibold text-[7px] md:text-base text-current text-center pt-2'>Seamless<br></br>Navigation</div>
        </div>
        <div style={{border:"2px solid #EC2226"}} className='h-[195px] w-[204px] mobile_view_div rounded-full pt-10 ml-[-140px]'>
          <img className='mr-auto ml-auto' src='/images1/bro.svg' alt=''/>
          <div className='montserrat_semibold text-[7px] md:text-base text-current text-center pt-2'> Open<br></br>Locations Only</div>
        </div>
        <div style={{border:"2px solid #175594"}} className='h-[195px] mobile_view_div w-[204px] rounded-full pt-10'>
          <img className='mr-auto ml-auto' src='/images1/pana.svg' alt=''/>
          <div className='montserrat_semibold text-[8px] md:text-base text-current text-center pt-2'>Review Your<br></br> Visits</div>
        </div>
        <div style={{border:"2px solid #EC2226"}} className='h-[195px] w-[204px] rounded-full pt-10 ml-[-140px] mobile_view_div'>
          <img className='mr-auto ml-auto' src='/images1/bro1.svg' alt=''/>
          <div className='montserrat_semibold text-[8px] md:text-base text-current text-center pt-2'>Socialize with<br></br> Friends</div>
        </div>
        </div>
        <img className='mbl_h' src='/images1/phon.svg' alt=''/>
        <div className=''>
        <div style={{border:"2px solid #EC2226"}} className='h-[195px] w-[204px] rounded-full pt-10 mobile_view_div'>
          <img className='mr-auto ml-auto' src='/images1/rafiki.svg' alt=''/>
          <div className='montserrat_semibold text-[8px] md:text-base text-current text-center pt-2'> FREE to Use!</div>
        </div>
        <div style={{border:"2px solid #175594"}} className='h-[195px] w-[204px] rounded-full pt-10 ml-[140px] mobile_view_div'>
          <img className='mr-auto ml-auto' src='/images1/Van.svg' alt=''/>
          <div className='montserrat_semibold text-[8px] md:text-base text-current text-center pt-2'>Book Food<br></br> Trucks for Your<br></br> Event</div>
        </div>
        <div style={{border:"2px solid #EC2226"}} className='h-[195px] w-[204px] rounded-full pt-10 mobile_view_div'>
          <img className='mr-auto ml-auto' src='/images1/rafiki1.svg' alt=''/>
          <div className='montserrat_semibold text-[8px] md:text-base text-current text-center pt-2'> Social Link<br></br> Sharing</div>
        </div>
        <div style={{border:"2px solid #175594"}} className='h-[195px] w-[204px] rounded-full pt-10 ml-[140px] mobile_view_div'>
          <img className='mr-auto ml-auto' src='/images1/pana1.svg' alt=''/>
          <div className='montserrat_semibold text-[8px] md:text-base text-current text-center pt-2'> Post and View<br></br> Photos</div>
        </div>
        </div>
      </div>
     
        </div>
  )
}

export default Features