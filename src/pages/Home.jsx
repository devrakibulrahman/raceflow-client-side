import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import { FaCircleCheck } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/effect-fade';
import MarathonCampCard from '../components/MarathonCampCard';
import MarathonEventCard from '../components/MarathonEventCard';
import Marquee from "react-fast-marquee";
import logo1 from '../assets/img/logo1.png';
import logo2 from '../assets/img/logo2.png';
import logo3 from '../assets/img/logo3.png';
import logo4 from '../assets/img/logo4.png';
import axios from 'axios';
import { PuffLoader } from 'react-spinners';
import useMode from '../hooks/useMode';

const Home = () => {

    //? state declare here -------------------------------->
    const [marathon, setMarathon] = useState([]);
    const [loading, setLoading] = useState(true);

    //? hooks declare here -------------------------------->
    const {theme} = useMode();
    
    //? useEffect declare here ---------------------------->
    useEffect(() => {
        fetchMarathonCamp();
    }, []);
    
    //? fetch data function declare here ------------------>
    const fetchMarathonCamp = async () => {
        try{
            const {data} = await axios.get(`${import.meta.env.VITE_HOST}/marathon_camp`);
            setMarathon(data);
            setLoading(false);
        }catch(err){
            console.log(err);
        };
    };

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
            <div className='w-full min-h-[180px] bg-primary-yellow flex items-center justify-center lg:min-h-[180px]'>
                <Marquee gradient={true} gradientWidth={100} gradientColor='#f3e03b' speed={50}>
                    <div className='w-[250px] h-[100px] flex items-center justify-center mr-[180px] lg:mr-[200px] xl:mr-[300px]'>
                        <img src={logo1} alt="marquee" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-[250px] h-[100px] flex items-center justify-center mr-[180px] lg:mr-[200px] xl:mr-[300px]'>
                        <img src={logo2} alt="marquee" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-[250px] h-[100px] flex items-center justify-center mr-[180px] lg:mr-[200px] xl:mr-[300px]'>
                        <img src={logo3} alt="marquee" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-[250px] h-[100px] flex items-center justify-center mr-[180px] lg:mr-[200px] xl:mr-[300px]'>
                        <img src={logo4} alt="marquee" className='w-full h-full object-contain' />
                    </div>
                </Marquee>
            </div>
            <div className='w-full bg-white min-h-[500px] py-16 lg:pt-24 dark:bg-black'>
                <div className='container mx-auto px-4'>
                    <div className='w-full min-h-[500px] flex flex-col items-center gap-4 xl:flex-row xl:gap-14'>
                        <div className='w-full min-h-[450px] bg-about-section bg-cover bg-center bg-no-repeat md:bg-top xl:max-w-[750px] xl:min-h-[750px]'></div>
                        <div className='w-auto min-h-[450px] py-5 xl:min-h-[750px]'>
                            <div className='w-full'>
                                <div className='w-full'>
                                    <h3 className='font-roboto text-sm font-semibold uppercase text-para-gray tracking-widest mb-5 dark:text-dark-gray'>About Raceflow</h3>
                                    <h1 className='font-roboto text-[32px] text-head-charleston-green uppercase font-bold mb-5 md:text-[38px] xl:text-[50px] dark:text-white'>RACE BEYOND <span className='bg-primary-yellow dark:text-black'>LIMITS.</span> <span className='bg-primary-yellow dark:text-black'>FLOW</span> INTO</h1>
                                    <p className='font-roboto text-xl text-para-gray font-normal leading-8 md:text-[22px] dark:text-dark-gray'>RaceFlow is a thrilling event for runners of all levels, inspiring passion and purpose with every step.</p>
                                </div>
                                <div className='w-full min-h-[150px] bg-slate-50 bg-pattern bg-cover bg-center bg-no-repeat mt-5 p-4 flex items-center justify-center flex-col gap-y-4 dark:bg-dark-black dark:bg-dark-pattern'>
                                    <div className='w-full'>
                                        <div className='w-full flex items-center gap-2'>
                                            <FaCircleCheck className='text-lg mb-[3px] text-head-charleston-green dark:text-primary-yellow'></FaCircleCheck>
                                            <h4 className='font-roboto text-base text-head-charleston-green font-bold uppercase dark:text-white'>Challenging Courses</h4>
                                        </div>
                                        <p className='font-roboto text-base text-para-gray font-normal mt-1 dark:text-light-gray'>Take on well-designed tracks that push your limits.</p>
                                    </div>
                                    <div className='w-full'>
                                        <div className='w-full flex items-center gap-2'>
                                            <FaCircleCheck className='text-lg mb-[3px] text-head-charleston-green dark:text-primary-yellow'></FaCircleCheck>
                                            <h4 className='font-roboto text-base text-head-charleston-green font-bold uppercase dark:text-white'>Global Participation</h4>
                                        </div>
                                        <p className='font-roboto text-base text-para-gray font-normal mt-1 dark:text-light-gray'>Join runners from around the world in one thrilling event.</p>
                                    </div>
                                </div>
                                <div className='w-full min-h-[150px] bg-slate-50 bg-pattern bg-cover bg-center bg-no-repeat mt-5 p-4 flex items-center justify-center flex-col gap-y-4 dark:bg-dark-black dark:bg-dark-pattern'>
                                    <div className='w-full'>
                                        <div className='w-full flex items-center gap-2'>
                                            <FaCircleCheck className='text-lg mb-[3px] text-head-charleston-green dark:text-primary-yellow'></FaCircleCheck>
                                            <h4 className='font-roboto text-base text-head-charleston-green font-bold uppercase dark:text-white'>Seamless Registration</h4>
                                        </div>
                                        <p className='font-roboto text-base text-para-gray font-normal mt-1 dark:text-light-gray'>Quick and easy online registration for all participants.</p>
                                    </div>
                                    <div className='w-full'>
                                        <div className='w-full flex items-center gap-2'>
                                            <FaCircleCheck className='text-lg mb-[3px] text-head-charleston-green dark:text-primary-yellow'></FaCircleCheck>
                                            <h4 className='font-roboto text-base text-head-charleston-green font-bold uppercase dark:text-white'>Professional Organization</h4>
                                        </div>
                                        <p className='font-roboto text-base text-para-gray font-normal mt-1 dark:text-light-gray'>Experience an event managed by a skilled and passionate team.</p>
                                    </div>
                                </div>
                                <div className='w-full mt-5'>
                                    <button className="font-roboto text-head-charleston-green font-medium tracking-widest py-3 px-6 uppercase bg-primary-yellow transition ease-linear duration-200 hover:bg-head-charleston-green hover:text-white dark:text-black">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full min-h-[500px] bg-Cultured py-16 dark:bg-dark-black'>
                <div className='w-full'>
                    <div className='container mx-auto px-4'>
                        <div className='w-full text-center'>
                            <div className="w-auto">
                                <div className="w-full mb-5">
                                    <h3 className="font-roboto text-sm font-medium text-para-gray uppercase dark:text-dark-gray">Marathon Camping</h3>
                                </div>
                                <div className="w-full">
                                    <h1 className="font-roboto font-bold text-[32px] text-head-charleston-green transition-all ease-linear duration-200 md:text-[38px] lg:text-[50px] dark:text-white">RUN TOGETHER, WIN <span className="bg-primary-yellow dark:text-black">TOGETHER.</span></h1>
                                    <div className="w-full max-w-[850px] mt-3 mx-auto">
                                        <p className="font-roboto text-xl font-normal text-para-gray leading-relaxed transition-all ease-linear duration-200 md:text-[22px] dark:text-light-gray">Connect with runners, share the journey, and create memories on and off the track.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            loading
                            ?
                            <div className='w-full min-h-[500px] mt-10 flex items-center justify-center'>
                                <PuffLoader color={`${theme ? '#f3e03b' : '#000000'}`} />
                            </div>
                            :
                            <div className='w-full min-h-[500px] mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
                                {
                                    marathon.map((data) => (
                                        <MarathonCampCard key={data?._id} marathon={data}></MarathonCampCard>
                                    ))
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className='w-full min-h-[500px] bg-white py-16 dark:bg-black'>
                <div className='container mx-auto px-4'>
                    <div className='w-full'>
                        <div className="w-auto">
                            <div className="w-full mb-5">
                                <h3 className="font-roboto text-sm font-medium text-para-gray uppercase dark:text-dark-gray">Marathon Gallery</h3>
                            </div>
                            <div className="w-full">
                                <h1 className="font-roboto font-bold text-[32px] text-head-charleston-green transition-all ease-linear duration-200 md:text-[38px] lg:text-[50px] dark:text-white">CAPTURING THE <span className="bg-primary-yellow dark:text-black">SPIRIT</span> OF THE RACE</h1>
                                <div className="w-full max-w-[850px] mt-3">
                                    <p className="font-roboto text-xl font-normal text-para-gray leading-relaxed transition-all ease-linear duration-200 md:text-[22px] dark:text-light-gray">Explore the energy and determination of Race-Flow runners in every photo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full min-h-[500px] mt-10 grid grid-cols-2 gap-6 md:grid-cols-3'>
                        <div className='w-full min-h-[250px] bg-gallery1 bg-cover bg-center bg-no-repeat col-span-2'></div>
                        <div className='w-full min-h-[175px] bg-gallery2 bg-cover bg-center bg-no-repeat md:min-h-[250px] xl:min-h-[300px]'></div>
                        <div className='w-full min-h-[175px] bg-gallery3 bg-cover bg-center bg-no-repeat md:min-h-[250px] xl:min-h-[300px]'></div>
                        <div className='w-full min-h-[175px] bg-gallery4 bg-cover bg-center bg-no-repeat md:min-h-[250px] xl:min-h-[300px]'></div>
                        <div className='w-full min-h-[175px] bg-gallery5 bg-cover bg-center bg-no-repeat md:min-h-[250px] xl:min-h-[300px]'></div>
                        <div className='w-full min-h-[175px] bg-gallery6 bg-cover bg-center bg-no-repeat md:min-h-[250px] xl:min-h-[300px]'></div>
                        <div className='w-full min-h-[175px] bg-gallery7 bg-cover bg-top bg-no-repeat md:min-h-[250px] md:col-span-2 xl:min-h-[300px]'></div>
                    </div>
                </div>
            </div>
            <div className='w-full min-h-[500px] bg-black py-16 dark:bg-dark-black'>
                <div className='container mx-auto px-4'>
                    <div className='w-full'>
                        <div className='w-full text-center'>
                            <div className="w-auto">
                                <div className="w-full mb-5">
                                    <h3 className="font-roboto text-sm font-medium text-dark-gray uppercase">Marathon Access</h3>
                                </div>
                                <div className="w-full">
                                    <h1 className="font-roboto font-bold text-[32px] text-white uppercase transition-all ease-linear duration-200 md:text-[38px] lg:text-[50px]">Get Early <span className="bg-primary-yellow text-black dark:text-black">Access</span> Today!</h1>
                                    <div className="w-full max-w-[850px] mt-3 mx-auto">
                                        <p className="font-roboto text-xl font-normal text-dark-gray leading-relaxed transition-all ease-linear duration-200 md:text-[22px] dark:text-light-gray">Reserve your spot now and unlock exclusive benefits.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full min-h-[250px] mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                        <div className='w-full min-h-[250px] bg-dark-black bg-dark-pattern bg-cover bg-center bg-no-repeat p-5 dark:bg-head-charleston-green'>
                            <div className='w-full pb-5 border-b border-primary-yellow'>
                                <h1 className='font-roboto text-[38px] text-white font-bold uppercase mb-2 md:text-[42px] lg:text-[50px]'>42K</h1>
                                <p className='font-roboto text-xl text-dark-gray font-normal'>Full Marathon Race</p>
                            </div>
                            <div className='w-full pt-5 text-center'>
                                <p className='font-roboto text-sm text-dark-gray font-medium uppercase tracking-widest mb-2 dark:text-light-gray'>Early Morning</p>
                                <h3 className='font-roboto text-[32px] text-white font-bold uppercase md:text-[36px] lg:text-[38px]'>$600</h3>
                            </div>
                            <div className='w-full mt-5'>
                                <button className="font-roboto text-base text-head-charleston-green font-medium tracking-widest py-3 px-6 uppercase bg-primary-yellow transition ease-linear duration-200 hover:bg-black w-full hover:text-white dark:hover:bg-dark-black">Learn More</button>
                            </div>
                        </div>
                        <div className='w-full min-h-[250px] bg-dark-black bg-dark-pattern bg-cover bg-center bg-no-repeat p-5 dark:bg-head-charleston-green'>
                            <div className='w-full pb-5 border-b border-primary-yellow'>
                                <h1 className='font-roboto text-[38px] text-white font-bold uppercase mb-2 md:text-[42px] lg:text-[50px]'>21K</h1>
                                <p className='font-roboto text-xl text-dark-gray font-normal'>Half Marathon Race</p>
                            </div>
                            <div className='w-full pt-5 text-center'>
                                <p className='font-roboto text-sm text-dark-gray font-medium uppercase tracking-widest mb-2 dark:text-light-gray'>Early Morning</p>
                                <h3 className='font-roboto text-[32px] text-white font-bold uppercase md:text-[36px] lg:text-[38px]'>$300</h3>
                            </div>
                            <div className='w-full mt-5'>
                                <button className="font-roboto text-base text-head-charleston-green font-medium tracking-widest py-3 px-6 uppercase bg-primary-yellow transition ease-linear duration-200 hover:bg-black w-full hover:text-white dark:hover:bg-dark-black">Learn More</button>
                            </div>
                        </div>
                        <div className='w-full min-h-[250px] bg-dark-black bg-dark-pattern bg-cover bg-center bg-no-repeat p-5 dark:bg-head-charleston-green'>
                            <div className='w-full pb-5 border-b border-primary-yellow'>
                                <h1 className='font-roboto text-[38px] text-white font-bold uppercase mb-2 md:text-[42px] lg:text-[50px]'>10K</h1>
                                <p className='font-roboto text-xl text-dark-gray font-normal'>Quarter Marathon Race</p>
                            </div>
                            <div className='w-full pt-5 text-center'>
                                <p className='font-roboto text-sm text-dark-gray font-medium uppercase tracking-widest mb-2 dark:text-light-gray'>Early Morning</p>
                                <h3 className='font-roboto text-[32px] text-white font-bold uppercase md:text-[36px] lg:text-[38px]'>$200</h3>
                            </div>
                            <div className='w-full mt-5'>
                                <button className="font-roboto text-base text-head-charleston-green font-medium tracking-widest py-3 px-6 uppercase bg-primary-yellow transition ease-linear duration-200 hover:bg-black w-full hover:text-white dark:hover:bg-dark-black">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full min-h-[500px] bg-white py-16 dark:bg-black'>
                <div className='container mx-auto px-4'>
                    <div className='w-full'>
                        <div className='w-full'>
                            <div className="w-auto">
                                <div className="w-full mb-5">
                                    <h3 className="font-roboto text-sm font-medium text-para-gray uppercase dark:text-dark-gray">Marathon Event</h3>
                                </div>
                                <div className="w-full">
                                    <h1 className="font-roboto font-bold text-[32px] text-head-charleston-green uppercase transition-all ease-linear duration-200 md:text-[38px] lg:text-[50px] dark:text-white">Experience the <span className="bg-primary-yellow dark:text-black">Thrill</span> of the Run.</h1>
                                    <div className="w-full max-w-[850px] mt-3">
                                        <p className="font-roboto text-xl font-normal text-para-gray leading-relaxed transition-all ease-linear duration-200 md:text-[22px] dark:text-light-gray">Challenge yourself and enjoy the excitement of race day. Sign up now and be part of the action!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full min-h-[300px] mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        <MarathonEventCard></MarathonEventCard>
                        <MarathonEventCard></MarathonEventCard>
                        <MarathonEventCard></MarathonEventCard>
                        <MarathonEventCard></MarathonEventCard>
                        <MarathonEventCard></MarathonEventCard>
                        <MarathonEventCard></MarathonEventCard>
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
                            <button className="font-roboto text-head-charleston-green font-medium tracking-widest py-3 px-6 uppercase bg-primary-yellow transition ease-linear duration-200 hover:bg-head-charleston-green hover:text-white">Register Now!</button>
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
                                <button className="font-roboto text-head-charleston-green font-medium tracking-widest py-3 px-6 uppercase bg-white transition ease-linear duration-200 hover:bg-head-charleston-green hover:text-white">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;