import React from 'react';
import {Pagination} from 'swiper/modules'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from "../../assets/images/patient-avatar.png";
import {HiStar} from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}}
        breakpoints={{
            640:{
                slidesPerView:1,
                spaceBetween:0,
            },
            768:{
                slidesPerView:2,
                spaceBetween:20,
            },
            1024:{
                slidesPerView:3,
                spaceBetween:30,
            },
        }}
        >
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div><h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Dr. HansRaj Hathi</h4>
                        
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>

                        </div>

                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"Excellent medical services! The doctors are very knowledgeable and caring. They provided me with the best treatment and made sure I was comfortable throughout. Highly recommended!"</p>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div><h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>JethaLal Gada</h4>
                        
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>

                        </div>

                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"Had a great experience! The staff is very polite, and the doctors give proper attention to every patient. The treatment was smooth, and I am extremely satisfied with their service."</p>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div><h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Babita Iyer</h4>
                        
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>

                        </div>

                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"One of the best healthcare services I have received! The team is very professional and ensures quality treatment. I truly appreciate their dedication to patient care."</p>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt="" />
                        <div><h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Tarak Mehta</h4>
                        
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>
                            <HiStar className='text-yellowColor w-[18px] h-5'/>

                        </div>

                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"One of the best healthcare services I have received! The team is very professional and ensures quality treatment. I truly appreciate their dedication to patient care."</p>

                </div>
            </SwiperSlide>

        </Swiper>

    </div>
  )
}

export default Testimonial