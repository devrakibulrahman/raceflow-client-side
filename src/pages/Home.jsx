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
            <div className='w-full min-h-[500px] bg-[#F4F4F5] py-16 lg:py-24'>
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="w-full text-center">
                            <div className="w-full mb-5">
                                <h3 className="font-roboto text-sm font-medium text-para-gray uppercase">Upcoming Event</h3>
                            </div>
                            <div className="w-full flex items-center justify-center flex-col">
                                <h1 className="font-roboto font-bold text-[32px] text-head-charleston-green transition-all ease-linear duration-200 md:text-[38px] lg:text-[50px]">EXPLORE EXCITING. <span className="bg-primary-yellow">MARATHON</span> OPPORTUNITIES</h1>
                                <div className="w-full max-w-[700px] mt-5">
                                    <p className="font-roboto text-xl font-normal text-para-gray leading-relaxed transition-all ease-linear duration-200 md:text-[22px]">Explore upcoming marathon events, choose your favorite, and dive into all the details. Your next challenge awaits start your journey today!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='container mx-auto px-4'>
                            <div className='w-full min-h-[500px] mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
                                <MarathonEventCard></MarathonEventCard>
                                <MarathonEventCard></MarathonEventCard>
                                <MarathonEventCard></MarathonEventCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[500px] bg-registration bg-cover bg-center bg-no-repeat py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="w-full min-h-[500px] text-center flex flex-col items-center justify-center gap-5">
                        <div className="w-full">
                            <p className="font-roboto text-white text-sm font-bold uppercase tracking-widest">Get Started</p>
                        </div>
                        <div className="w-full max-w-[1000px]">
                            <h1 className="font-roboto text-[40px] font-bold text-white uppercase transition-all ease-linear duration-200 leading-tight md:text-[50px] xl:text-[70px]">Register Now Secure Your Spot in the <span className="text-head-charleston-green bg-primary-yellow">Marathon!</span></h1>
                        </div>
                        <div className="w-full max-w-[800px]">
                            <p className="font-roboto text-xl font-normal text-white transition-all ease-linear duration-200 leading-relaxed md:text-[22px]">Register today for a seamless marathon experience. Choose your race category, receive important details, and join us for an unforgettable race day!</p>
                        </div>
                        <div className="w-full flex items-center justify-center mt-3">
                            <button className="font-roboto text-head-charleston-green font-medium tracking-widest py-3 px-6 uppercase bg-primary-yellow transition ease-linear duration-200 hover:bg-head-charleston-green hover:text-primary-yellow">Register Now!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[250px] bg-gradient-to-r from-primary-yellow to-secondary-orange/80">
                <div className="w-full min-h-[250px] bg-sub-pattern bg-center bg-cover bg-no-repeat py-10 flex items-center justify-center">
                    <div className="container mx-auto px-4">
                        <div className="w-full flex items-center flex-col gap-5 xl:flex-row xl:justify-between">
                            <div className="w-auto max-w-[500px] xl:max-w-full">
                                <h1 className="font-roboto text-head-charleston-green text-[32px] font-black uppercase text-center transition-all ease-linear duration-200 xl:text-[38px] xl:text-left">Subscribe To Our <span className="text-primary-yellow bg-head-charleston-green py-2">Marathon</span> Newsletter!</h1>
                            </div>
                            <div className="w-auto">
                                <button className="font-roboto text-head-charleston-green font-medium tracking-widest py-3 px-6 uppercase bg-white transition ease-linear duration-200 hover:bg-head-charleston-green hover:text-primary-yellow">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;