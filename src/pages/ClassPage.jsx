import { useState, useEffect } from 'react';

import StarEmp from "../images/star-border.png";
import StarFull from "../images/star-full.png";

let class1;
let class2;
let class3;
let class4;
let className1;
let className2;
let className3;
let className4;

function ClassPage(count) {
    const url = "http://localhost:8080/carousel";

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
                    <div className="class-page-photo">
                        <img className="photo" src={coach.src} alt="" />
                    </div>
                </div>
                <div className="col-5 col-md-12 class-desc items-start ">
                    <div className="class-page-desc text-black">
                        <h3 className='font-black text-3xl'>{coach.title}</h3>
                        <p className='font-bold text-xl'>{coach.leading} - is the leader of today session</p>
                        <p>Today theme will be {coach.name}</p>
                        <p>Currently this Class was given more than {coach.clients}</p>
                        <div className="rating -ml-2 flex w-48"><img src={StarFull} alt="" className="star w-16 h-16" /><img src={StarFull} alt="" className="star w-16 h-16" /><img src={StarFull} alt="" className="star w-16 h-16" /><img src={StarFull} alt="" className="star w-16 h-16" /><img src={StarEmp} alt="" className="star w-16 h-16" /></div>
                        <p>{coach.rating} Stars from our clients</p>
                    </div>
                </div>
                <div className="col-5 col-md-0 text-black flex gap-3 flex-col">
                </div>

                <div className="col-8 col-md-12 text-black flex gap-3 flex-col">
                    <p>
                        Bringing three years of specialized experience in yoga and stretching, I`ve conducted 3,888 personalized training sessions. Through a fusion of traditional yoga principles and contemporary stretching techniques, my tailored programs prioritize holistic wellness, aiming to harmonize physical flexibility with mental serenity. Achieving a four-star rating reflects my commitment to empowering clients on their fitness journey, fostering balance, strength, and inner peace through personalized fitness regimens and mindful practices.
                    </p>
                </div>
            </div>
        </div>
    ));
    class1 = Trainer[0];
    class2 = Trainer[1];
    class3 = Trainer[2];
    class4 = Trainer[3];
    className1 = Name[0];
    className2 = Name[1];
    className3 = Name[2];
    className4 = Name[3];
    return (<>
        <div className="class-page" id="classPage">
            {(count == "0") ? class1 :
                (count == 1) ? class2 :
                    (count == 2) ? class3 :
                        class4

            }
        </div>
    </>);
}
export { ClassPage, class1, class2, class3, class4, className1, className2, className3, className4 };

