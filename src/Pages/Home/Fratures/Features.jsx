import React from 'react';
import FeaturesCard from '../../../Components/Features/FeaturesCard';
import { SiSecurityscorecard } from "react-icons/si";

const Features = () => {
    return (
        <div className='text-5xl text-rose-800'>
           <FeaturesCard title={'Percel Sefty'} 
           icon={
           <SiSecurityscorecard></SiSecurityscorecard>
           }>
            
           </FeaturesCard>
        </div>
    );
};

export default Features;