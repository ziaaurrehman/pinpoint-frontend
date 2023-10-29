import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Clients = () => {
    const data = [
        {
            image: "/images1/slide1.svg",
         description: "Pinpoint has resolved our ,What's for dinner?  conversation! It's so convenient! ",
        text2:"-Hayden Keeney",
        img: "/images1/client1.svg",
        },
        {
            image: "/images1/slide1.svg",
         description: "I love supporting local coffee carts and Pinpoint has made them so much easier to locate! It's so easy to use I love it!",
        text2:"-Marissa Rambo",
        img: "/images1/client2.svg",
        },
        {
            image: "/images1/slide1.svg",
         description: "I love me some seafood and Pinpoints helped me find it all I love it!",
        text2:"-Marissa Rambo",
        img: "/images1/client3.svg",
        },
        {
            image: "/images1/slide1.svg",
         description: "Pinpoint has resolved our ,What's for dinner?  conversation! It's so convenient! ",
        text2:"-Cosmo",
        img: "/images1/client2.svg",
        },
        {
            image: "/images1/slide1.svg",
         description: "Pinpoint has resolved our ,What's for dinner?  conversation! It's so convenient! ",
        text2:"-Hayden Keeney",
        img: "/images1/client1.svg",
        },
        {
            image: "/images1/slide1.svg",
         description: "I love supporting local coffee carts and Pinpoint has made them so much easier to locate! It's so easy to use I love it!",
        text2:"-Marissa Rambo",
        img: "/images1/client2.svg",
        },
       
      ];
      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 2,
          slidesToSlide: 1,
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      };
  return (
    <div>
            <div className="feature fansbg pb-5 md:pb-[115px]">
            <div className=' text-center montserrat_medium font-semibold py-14 mt-[70px]'><span className=' text_3 text-3xl md:text-5xl pb-4 pt-8 primary2'>PIN</span><span className='text_3 text-3xl md:text-5xl pb-4 pt-8 primary1'>POINT</span><span className='text_3 text-3xl md:text-5xl'> Fans</span>
        </div>
        <Carousel
          //  swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
    //   infinite={true}
    //   autoPlay={true}
      autoPlaySpeed={2000}
      // keyBoardControl={true}
    //   customTransition="all .5"
    //   draggable={true}
      transitionDuration={300}
      containerClass="main_card d-flex"
      // customLeftArrow={<CustomLeftArrow />}
      // customRightArrow={<CustomRightArrow />}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
    //   deviceType={props.deviceType}
      // dotListClass="custom-dot-list-style"
      
        >
              
            
          {data.map((el) => {
            return (
                <div className='mb-11'>
                      <div className="slide bg-white rounded-[25px] pt-4 w-[85%] h-[430px] text-center px-4">
                <img class="mr-auto ml-auto pb-6" alt="" src={el.image}></img>
                <div class="montserrat_medium text-xl pb-4">{el.description}</div>
                <div className='text-[#165593] text-xl montserrat_semibold pb-4'>{el.text2}</div>
                <img class="mr-auto ml-auto " alt="" src={el.img}></img>
                </div>
                </div>
            
           
            );
          })}
        </Carousel>
      </div>
    </div>
  )
}

export default Clients