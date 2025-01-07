import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import MarathonEventCard from '../components/MarathonEventCard';

const Home = () => {
    return (
        <>
            <div className='w-full min-h-screen'>
                <Swiper effect={'fade'} modules={[Autoplay, EffectFade]} allowTouchMove={false} autoplay={{ delay: 5000, disableOnInteraction: false }} loop={true} className="mySwiper">
                    <div className='w-full min-h-screen'>
                        <SwiperSlide>
                            <div className='w-full min-h-screen bg-slider1 bg-cover bg-no-repeat bg-center flex items-center justify-center'>
                                <div className='w-full'>
                                    <div className='container mx-auto px-4 text-center space-y-6 md:text-left'>
                                        <div className='w-full'>
                                            <h3 className='font-roboto text-white font-bold uppercase text-sm'>MILETRACK MARATHON 2025</h3>
                                        </div>
                                        <div className='w-full max-w-[550px] xl:max-w-[800px]'>
                                            <h1 className='font-roboto text-white text-[40px] font-bold uppercase leading-snug transition-all ease-linear duration-200 md:text-[50px] xl:text-[70px]'>CHALLENGE <span className='bg-primary-yellow text-head-charleston-green'>YOURSELF,</span> EMBRACE THE <span className='bg-primary-yellow text-head-charleston-green'>JOURNEY.</span></h1>
                                        </div>
                                        <div className='w-full max-w-[550px]'>
                                            <p className='font-roboto text-white text-xl font-normal uppercase leading-relaxed transition-all ease-linear duration-200 md:text-[22px]'>Miletrack Marathon 2025 is your moment to shine. Join the challenge and be unstoppable!</p>
                                        </div>
                                        <div className='w-full'>
                                            <button className='font-roboto text-head-charleston-green text-base font-medium tracking-widest bg-primary-yellow py-4 px-5'>SIGN UP TODAY!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                    <div className='w-full min-h-screen'>
                        <SwiperSlide>
                            <div className='w-full min-h-screen bg-slider2 bg-cover bg-no-repeat bg-center flex items-center justify-center'>
                                <div className='w-full'>
                                    <div className='container mx-auto px-4 text-center space-y-6 md:text-left'>
                                        <div className='w-full'>
                                            <h3 className='font-roboto text-white font-bold uppercase text-sm'>RACE TO INSPIRE, RUN TO ACHIEVE.</h3>
                                        </div>
                                        <div className='w-full max-w-[550px] xl:max-w-[700px]'>
                                            <h1 className='font-roboto text-white text-[40px] font-bold uppercase leading-snug transition-all ease-linear duration-200 md:text-[50px] xl:text-[70px]'>BREAK <span className='bg-primary-yellow text-head-charleston-green'>YOUR</span> ONE MILE AT A LIMITS, <span className='bg-primary-yellow text-head-charleston-green'>TIME.</span></h1>
                                        </div>
                                        <div className='w-full max-w-[550px]'>
                                            <p className='font-roboto text-white text-xl font-normal uppercase leading-relaxed transition-all ease-linear duration-200 md:text-[22px]'>Stride Marathon 2025 is where determination meets victory. Take the first step today!</p>
                                        </div>
                                        <div className='w-full'>
                                            <button className='font-roboto text-head-charleston-green text-base font-medium tracking-widest bg-primary-yellow py-4 px-5'>REGISTER NOW!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                    <div className='w-full min-h-screen'>
                        <SwiperSlide>
                            <div className='w-full min-h-screen bg-slider3 bg-cover bg-no-repeat bg-center flex items-center justify-center'>
                                <div className='w-full'>
                                    <div className='container mx-auto px-4 text-center space-y-6 md:text-left'>
                                        <div className='w-full'>
                                            <h3 className='font-roboto text-white font-bold uppercase text-sm'>RUN THE EXTRA MILE. MAKE HISTORY.</h3>
                                        </div>
                                        <div className='w-full max-w-[550px] xl:max-w-[700px]'>
                                            <h1 className='font-roboto text-white text-[40px] font-bold uppercase leading-snug transition-all ease-linear duration-200 md:text-[50px] xl:text-[70px]'>STEP UP <span className='bg-primary-yellow text-head-charleston-green'>FOR</span> THE JOURNEY OF A <span className='bg-primary-yellow text-head-charleston-green'>LIFETIME.</span></h1>
                                        </div>
                                        <div className='w-full max-w-[550px]'>
                                            <p className='font-roboto text-white text-xl font-normal uppercase leading-relaxed transition-all ease-linear duration-200 md:text-[22px]'>Trailblaze Marathon 2025 is your chance to achieve greatness. The race starts with you!</p>
                                        </div>
                                        <div className='w-full'>
                                            <button className='font-roboto text-head-charleston-green text-base font-medium tracking-widest bg-primary-yellow py-4 px-5'>JOIN THE RACE!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
            <div className='w-full min-h-[500px] bg-white py-16 lg:py-24'>
                <div className='w-full'>
                    <div className='container mx-auto px-4'>
                        <div className='w-full'>
                            <div className="w-auto text-left">
                                <div className="w-full mb-5">
                                    <h3 className="font-roboto text-sm font-medium text-para-gray uppercase">Marathon Event</h3>
                                </div>
                                <div className="w-full justify-start flex-col">
                                    <h1 className="font-roboto font-bold text-[32px] text-head-charleston-green transition-all ease-linear duration-200 md:text-[38px] lg:text-[50px]">RUN TOGETHER, WIN <span className="bg-primary-yellow">TOGETHER.</span></h1>
                                    <div className="w-full max-w-[850px] mt-5">
                                        <p className="font-roboto text-xl font-normal text-para-gray leading-relaxed transition-all ease-linear duration-200 md:text-[22px]">Connect with runners, share the journey, and create memories on and off the track.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full min-h-[500px] mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
                            <MarathonEventCard></MarathonEventCard>
                            <MarathonEventCard></MarathonEventCard>
                            <MarathonEventCard></MarathonEventCard>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;