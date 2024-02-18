import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const url = "https://snilax-gym-api.onrender.com/trainers";

function Trainers() {
    const [trainers, setTrainers] = useState(() => {
        return JSON.parse(window.localStorage.getItem(url)) || [];
    });
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const coaches = await response.json();
            setTrainers(coaches);
        }
        fetchData();
    }, []);
    const TrainerElements = trainers.map((coach) => (
        <div className="col-3 col-md-6 col-sm-12 md:flex md:justify-center" key={coach.key}>
            <div className='coach-prof md:max-w-xs' >
                <Link to={`/Trainers/${coach.name}`}>
                    <img className="photo" src={coach.src} alt="" />
                </Link>
                <div className="coach-desc">
                    <Link to={`/Trainers/${coach.name}`}>
                        <h3 className='coach-name'>
                            {coach.name}
                        </h3>
                    </Link>
                    <h1 className='white coach-'>{coach.position}</h1>
                    <div className="social-links">
                        <a href={coach.links.IgLink}><img src="https://img.icons8.com/material-outlined/50/FFFFFF/instagram-new--v1.png" /></a>
                        <a href={coach.links.FbLink}><img src="https://img.icons8.com/ios/50/FFFFFF/facebook-new.png" /></a>
                        <a href={coach.links.TtLink}><img src="https://img.icons8.com/ios-filled/50/FFFFFF/tiktok--v1.png" /></a>
                    </div>
                </div>
            </div>
        </div >
    ));

    return (
        <div className="coach" id="Info">
            <div className="coach-text">
                <h2 className='coach-title text-6xl md:text-4xl xs:text-2xl'>Our Professional Trainers</h2>
                <h3 className='coach-sub text-right text-orange font-bold text-4xl md:text-xl xs:text-base'>The Best</h3>
            </div>
            <div className='container coach-list md:flex-col md:items-center'>
                <div className="row">
                    {TrainerElements}
                </div>
            </div>
        </div>
    );
}
export default Trainers;
