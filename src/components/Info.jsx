import happy from "../images/happy-client.png";
import totalClients from "../images/total-clients.png";
import gymEquipment from "../images/gym-equipment.png";
import Coffee from "../images/cup-of-coffee.png";
import Trainers from "./Trainers";

function Info() {

    return (<div className='info-trainers' >
        <div className='info  bg-orange'>
            <div className='info-container'>
                <div className="-rotate-90">874</div>
                <div className="img-text-container">
                    <img className='info-img' src={happy} alt="" />
                    <h3 className='white'>Happy Clients</h3>
                </div>
            </div>
            <div className='info-container'>
                <div className="-rotate-90">1002</div>
                <div className="img-text-container">
                    <img className='info-img' src={totalClients} alt="" />
                    <h3 className='white'>Total Clients</h3>
                </div>
            </div>
            <div className='info-container'>
                <div className="-rotate-90">587</div>
                <div className="img-text-container">
                    <img className='info-img' src={gymEquipment} alt="" />
                    <h3 className='white'>Equipment</h3>
                </div>
            </div>
            <div className='info-container'>
                <div className="-rotate-90">933</div>
                <div className="img-text-container">
                    <img className='info-img' src={Coffee} alt="" />
                    <h3 className='white'>Cup Of Coffee</h3>
                </div>
            </div>
        </div>
        <Trainers />
    </div >);
}

export default Info;
