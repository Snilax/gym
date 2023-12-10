import Tick from '../images/tick.svg';
import { useState, useEffect } from 'react';

function Price() {

    const url = "http://localhost:8080/plans";
    const [plans, setPlans] = useState(() => {
        return JSON.parse(window.localStorage.getItem(url)) || [];
    });
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const images = await response.json();
            setPlans(images);
        }
        fetchData();
    }, []);

    const plansList = plans.map((plan) =>
        <div className={plan.class} key={plan.key}>
            <div className={plan.color}>
                <p>{plan.name}</p>
                <p><b className='plan-price'>{plan.price}</b> /month</p>
            </div>
            <div className="features text-black font-black">
                <div className="feature ">
                    <img src={Tick} alt="Tick" /><h5 className="Comfortaa">{plan.feature1}</h5>
                </div>
                <div className="feature  ">
                    <img src={Tick} alt="Tick" /><h5 className="Comfortaa">{plan.feature2}</h5>
                </div>
                <div className="feature ">
                    <img src={Tick} alt="Tick" /><h5 className="Comfortaa">{plan.feature3}</h5>
                </div>
            </div>
        </div >
    );
    return (
        <div className='price ' id="Price">
            <div className='about-btn w-64 h-24'> Pricing Table</div>
            <h2 className='text-dark-gray text-7xl font-bold md:text-4xl text-center'>Choose Your Pricing Plan</h2>
            <div className="container plans lg:flex-col">
                {plansList}
            </div>
        </div>
    );
}

export default Price;
