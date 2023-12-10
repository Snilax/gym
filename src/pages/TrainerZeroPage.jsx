import { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import StarEmp from "../images/star-border.png";
import StarFull from "../images/star-full.png";
import Dumbell from "../images/dumbell.png";
import Tick from "../images/tick.png";

let trainer1;
let trainer2;
let trainer3;
let trainer4;
let coachName1;
let coachName2;
let coachName3;
let coachName4;

function TrainerZeroPage(count) {
    const url = "http://localhost:8080/trainers";

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
    const Name = trainers.map((name) => (name.name

    ));
    const Trainer = trainers.map((coach) => (
        <div className="container" key={coach.key}>
            <div className="row">
                <div className="col-7 col-md-12">
                    <div className="coach-page-photo w-72">
                        <img className="photo" src={coach.src} alt="" />
                    </div>

                </div>
                <div className="col-5">
                    <div className="coach-page-desc text-black">
                        <h3 className='coach-page-name font-bold'>{coach.name}</h3>
                        <p className=' text-lg'>{coach.position}</p>
                        <p> With {coach.exp} of experience</p>
                        <div className="rating -ml-2 flex w-48"><img src={StarFull} alt="" className="star w-16 h-16" /><img src={StarFull} alt="" className="star w-16 h-16" /><img src={StarFull} alt="" className="star w-16 h-16" /><img src={StarFull} alt="" className="star w-16 h-16" /><img src={StarEmp} alt="" className="star w-16 h-16" /></div>
                        <p>{coach.rating} Stars from our clients</p>
                        <p>Conducted <b> {coach.clients} </b>personal training sessions</p>
                    </div>
                </div>
                <div className="col-7 text-black flex gap-3 flex-col">
                    <p>
                        Bringing three years of specialized experience in yoga and stretching, I`ve conducted 3,888 personalized training sessions. Through a fusion of traditional yoga principles and contemporary stretching techniques, my tailored programs prioritize holistic wellness, aiming to harmonize physical flexibility with mental serenity. Achieving a four-star rating reflects my commitment to empowering clients on their fitness journey, fostering balance, strength, and inner peace through personalized fitness regimens and mindful practices.
                    </p>

                </div>
                <div className="stats col-5 col-md-7 text-black flex flex-col gap-5">
                    <h4><img src={Dumbell} alt="" /> Gym Stats:</h4>
                    <ul>
                        <li><img src={Tick} width={20} alt="" />Squat <b className='font-bold'>{coach.squat}</b></li>
                        <li><img src={Tick} width={20} alt="" />Bench Press <b className='font-bold'>{coach.bench}</b></li>
                        <li><img src={Tick} width={20} alt="" />Incline Bench Press <b className='font-bold'>{coach.incBench}</b></li>
                        <li><img src={Tick} width={20} alt="" />Shoulder Press <b className='font-bold'>{coach.shoulder}</b></li>
                        <li><img src={Tick} width={20} alt="" />Deadlift <b className='font-bold'>{coach.deadlift}</b></li>
                        <li><img src={Tick} width={20} alt="" />Row <b className='font-bold'>{coach.row}</b></li>
                        <li><img src={Tick} width={20} alt="" />Pullover <b className='font-bold'>{coach.pullover}</b></li>
                        <li><img src={Tick} width={20} alt="" />Pull up <b className='font-bold'>{coach.pullup}</b></li>
                        <li><img src={Tick} width={20} alt="" />Push up <b className='font-bold'>{coach.pushup}</b></li>
                    </ul>
                </div>
            </div>
        </div>
    ));
    trainer1 = Trainer[0];
    trainer2 = Trainer[1];
    trainer3 = Trainer[2];
    trainer4 = Trainer[3];
    coachName1 = Name[0];
    coachName2 = Name[1];
    coachName3 = Name[2];
    coachName4 = Name[3];
    return (<>
        <div className="coach-page" id="CoachPage">
            {(count == "0") ? trainer1 :
                (count == 1) ? trainer2 :
                    (count == 2) ? trainer3 :
                        trainer4
            }
        </div>
        <Footer></Footer>
    </>);
}
export { TrainerZeroPage, trainer1, trainer2, trainer3, trainer4, coachName1, coachName2, coachName3, coachName4 };

