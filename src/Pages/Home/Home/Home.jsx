import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import Features from '../Fratures/Features';
import TopDeliveryMan from '../TopDeliveryMan/TopDeliveryMan';
import FeaturesCard from '../../../Components/Features/FeaturesCard';
import Stat from '../Stat/Stat';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <FeaturesCard></FeaturesCard>
            <Stat></Stat>
            
            <TopDeliveryMan></TopDeliveryMan>
        </div>
    );
};

export default Home;