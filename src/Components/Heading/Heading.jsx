import React from 'react';

const Heading = ({heading, subheading}) => {
    return (
        <div className='text-center'>
            <h2 className='text-4xl text-teal-700 font-bold my-10 '>{heading}</h2>
            <h2 className='text-3xl text-teal-600 font-bold my-5 '>{subheading}</h2>
        </div>
    );
};

export default Heading;