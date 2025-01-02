import '../styles/custom.css';
import light from '../assets/raceflow-light.png';

const Navbar = () => {
    return (
        <>
            <header className='w-full py-6'>
                <div className='w-full'>
                    <div className='container mx-auto px-4'>
                        {/* desktop navbar design */}
                        <div className='w-full flex items-center justify-between'>
                            <div className='w-auto'>
                                <img src={light} alt="logo" className='w-[200px] h-full object-cover' />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;