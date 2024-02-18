import heart from "../images/heart.png";
import frm from "../images/frm1.png";

function Hero() {

    return (
        <div className="hero mt-16" id="Home">
            <div className="container">
                <div className="row ">
                    <div className="col-8 xs:w-64 xs:min-w-full ">
                        <div className="xs:ml-2 md:ml-10 md:mt-20 ml-20 mt-52 content">
                            <div className="rect">
                                <span className='rect__tp rounded-3xl border-8'>
                                    <span className='rect__orange md:text-lg text-2xl text-white rounded-lg border-8 '>
                                        The Best
                                    </span>
                                    Fitness Club
                                </span>
                            </div>
                            <h1 className="md:text-4xl text-6xl my-6 max-w-xl ">Work Hard To Get Better Life </h1>
                            <p className="md:text-base title-desc max-w-xl"> Duis mollis felis quis libero dictum vehicula. Duis dictum lorem mi, a
                                faucibus nisi eleifend eu.</p>
                            <a className="start-btn md:my-12 md:w-48 md:text-base my-24 rounded-xl p-6 w-96 text-center font-semibold text-4xl" href="#About"> Get Started</a>
                        </div>
                    </div>
                    <div className=" xs:hidden col-4 flex flex-col justify-between ">
                        <div className=" p-2 rounded-lg md:w-28 w-40 rect__tp">
                            <img src={heart} alt="heart" />
                            <p className="title-desc text-center md:text-xs text-sm">Heart Rate</p>
                            <p className="text-white text-center md:text-base text-lg">100 bpm</p>
                        </div>
                        <div className="xs:w-24 items-center ml-2 p-2 rounded-lg md:w-36 w-52 rect__tp-row">
                            <img className="items-center xs:h-10 h-16" src={frm} alt="heart" />
                            <div className="flex flex-col justify-center md:ml-2 ml-8 align-middle">
                                <p className="title-desc text-center xs:text md:text-xs text-sm">Calories burned</p>
                                <p className="text-white text-center md:text-base text-lg">200 Cal</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Hero;
