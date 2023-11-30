import React from 'react';
import { SiSecurityscorecard } from "react-icons/si";
import { FaShippingFast } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import './button.css'

const FeaturesCard = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5'>
            <div className="card w-full bg-slate-500 shadow-xl">
                <figure className="px-10 pt-10">
                    
                    <SiSecurityscorecard className='text-6xl'></SiSecurityscorecard>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Persel Sefty</h2>
                    <p>sefty is allways our headunder</p>
                    <div className="card-actions">
                    <input className='cardBtn' type="submit" value={'Click'}/>
                    </div>
                </div>
            </div>

            <div className="card w-full bg-slate-500 shadow-xl">
                <figure className="px-10 pt-10">
                    
                <FaShippingFast  className='text-6xl'></FaShippingFast>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Super Fast</h2>
                    <p>Super Fast our delivery. chack the Reviews</p>
                    <div className="card-actions">
                    <input className='cardBtn' type="submit" value={'Click'}/>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-slate-500 shadow-xl">
                <figure className="px-10 pt-10">
                    
                <TbTruckDelivery 
                 className='text-6xl'></TbTruckDelivery>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Delivery</h2>
                    <p> our delivery is  very very cool!!</p>
                    <div className="card-actions">
                    <input className='cardBtn' type="submit" value='Click'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesCard;