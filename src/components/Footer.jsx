import Logo from "../images/logo.svg";
import Clock from "../images/clock.svg";
import Geo from "../images/geo.svg";
import Phone from "../images/phone.svg";
import mail from "../images/mail.svg";
import { useState } from 'react';

function Footer() {
    const [footerMail, setFooterMail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form", { footerMail });
    };

    return (
        <footer className="footer" id="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-3 col-md-6 col-sm-12">
                        <img className='logo-ft' src={Logo} alt="" />
                        <p className='text-white text-base mt-5'> Etiam suscipit fringilla ullamcorper sed malesuada urna nec odio.</p>
                        <div className="hours flex items-start justify-between mt-14">
                            <img src={Clock} alt="" />
                            <div className="schedule">
                                <span className='white'>
                                    <b>Monday - Friday</b>
                                    <p className='text-gray-font'>7:00 am - 10:00 pm</p>
                                </span>
                                <span className='white'>
                                    <b>Saturday - Sunday </b>
                                    <p className='text-gray-font'>7:00 am - 2:00 pm</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-md-6 col-sm-12">
                        <h4 className="h4" >Our Links
                            <div className="hr"></div>
                        </h4>
                        <ul className="data-list flex flex-col gap-5">
                            <li className="data-item"><a href="">Home</a></li>
                            <li className="data-item"><a href="">About us</a></li>
                            <li className="data-item"><a href="">Classes</a></li>
                            <li className="data-item"><a href="">Blog</a></li>
                            <li className="data-item"><a href="">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="col-3 col-md-6 col-sm-12">
                        <h4 className="h4" >Contact Us
                            <div className="hr"></div>
                        </h4>
                        <ul className="data-list flex flex-col gap-5">
                            <li className="data-item"><img src={Geo} alt="" /><p className='white'>1247/Plot No.15th Phase,Colony, Kukatpally, Hyderaba</p></li>
                            <li className="data-item"><img src={Phone} alt="" /><p className='white'>1800-121-3637 <br />
                                +91 555 234-8765</p></li>
                            <li className="data-item"><img src={mail} alt="" /><p className='white'>info@gmail.com <br />
                                services@gmail.com</p></li>
                        </ul>
                    </div>
                    <div className="col-3 col-md-6 col-sm-12">
                        <h4 className="h4">Our NewsLetter
                            <div className="hr"></div>
                        </h4>
                        <div className="subscribe-form mb-14">
                            <form onSubmit={handleSubmit}>
                                <input type="email" placeholder="Email Address" value={footerMail} onChange={(e) => setFooterMail(e.target.value)} />
                                <button></button>
                            </form>
                        </div>
                        <div className="social flex justify-between items-center">
                            <img src="https://img.icons8.com/material-outlined/50/FFFFFF/instagram-new--v1.png" />
                            <img src="https://img.icons8.com/ios/50/FFFFFF/facebook-new.png" />
                            <img src="https://img.icons8.com/ios-filled/50/FFFFFF/tiktok--v1.png" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
