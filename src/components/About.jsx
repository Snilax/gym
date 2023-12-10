import useWindowDimensions from '../hooks/useWindowDimensions';

import coachAvatar from "../images/coach-avatar.png";

import aboutImg from "../images/about-image.png";

function About() {
    const { width } = useWindowDimensions();
    function cols(width) {
        if (width < 767) {
            return ("col-10");
        }
        else {
            return ("col-7");
        }
    }
    return (
        <div className='About py-10' id="About">
            <div className='container'>
                <div className="row  md:min-w-full md:items-center md:flex md:justify-center ">
                    <div className="md:hidden col-5">
                        <img src={aboutImg} alt="aboutImg" />
                    </div>
                    <div className={`${cols(width)}  md:flex-col md:flex md:items-center`}>
                        <div className='about-btn w-64 h-24'>About us</div>
                        <h2 className=' text-black font-bold md:text-4xl text-6xl my-6 max-w-xl'>Welcome To Our
                            Fitness Gym</h2>
                        <p className='text-black font-light md:text-base'>
                            Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.</p>
                        <p className='text-black font-light mt-5 md:text-base' >
                            Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra
                            vestibulum ante ipsum primis.
                        </p>
                        <div className=" trainer text-black mt-10">
                            <div className="flex flex-wrap">
                                <img className=" w-24 h-24" src={coachAvatar} alt="" />
                                <div className="coach__info flex flex-col justify-center">
                                    <h4 className="coach__title font-bold text-4xl">Denis Robinson</h4>
                                    <p>Our Coach</p>
                                </div>
                                <a href="#Classes" className='start-btn md:my-12 md:w-48 md:text-base bg-orange text-white rounded-xl p-6 w-96 text-center font-semibold text-4xl'>Explore More </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
