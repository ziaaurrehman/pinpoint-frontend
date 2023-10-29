import React,{useState} from 'react'
import { Radio } from 'antd';
const ContactUs = () => {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      };
  return (
    <div style={{alignItems:"center"}} className='d-flex flex-wrap justify-center md:px-14 px-3 pb-20'>
        <div className='md:mr-9'>
        <div className='text_3 tect_center font-semibold text-3xl md:text-5xl pb-4 pt-8 montserrat_medium'>Contact <span className='primary2 font-semibold'>PIN</span><span className='font-semibold primary1'>POINT</span></div>
        <div className='montserrat_regular text-base md:text-2xl'>Have any questions or concerns? Feel free<br></br> to reach out to the team at Pinpoint for<br></br> assistance! When logged in, you can chat<br></br> with the admin directly through our<br></br> messaging centre. <strong>@ThePinpointSocial.</strong></div>
        <img className='ml-auto w-[41%]' src='/images1/Group 1268.svg' alt=''/>
        </div>
        <div style={{boxShadow:"rgb(227, 224, 224) 1px 47px 54px"}} className='px-8 py-8 rounded-xl'>
            <div className='d-flex flex-wrap mb-4'>
            <input className='input_field pl-3 mb-3 w-[100%] montserrat_regular mr-0 md:mr-3' type='text' placeholder='First Name'></input>
          <input className='input_field pl-3 w-[100%] montserrat_regular' type='text' placeholder='Last Name'></input>
            </div>
            <input className='input_field pl-3 mb-2 montserrat_regular w-[100%]' type='Email' placeholder='Email'></input>
            <div className='d-flex mt-2'>
            <div className='mr-4 radio-group'>
            <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>User</Radio>
      <Radio value={2}>Partner</Radio>
    </Radio.Group>
         </div>

            </div>
            <div className='mt-2'>
<textarea className=' area_plceholder pl-3 pt-2 text-black h-[250px] border_line w-[100%] mt-2' placeholder='Message'></textarea>
</div>

<button className='submit_btn bg-[#175594] text-base montserrat_regular h-[50px] w-[157px] rounded-xl mt-4 font-semibold text-white'>Submit</button>
        </div>
    </div>
  )
}

export default ContactUs