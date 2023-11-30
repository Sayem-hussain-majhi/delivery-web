import React from 'react';

const SubmitButton = ({clikingFunction}) => {
    return (
        <div>
             <div className='flex justify-center'>
                    <input onClick={clikingFunction} className='p-2 text-lg font-semibold text-teal-600 hover:bg-teal-500 hover:text-white duration-200 w-1/3 border-4 border-teal-400 rounded-lg my-4' type="submit" />
                </div>
        </div>
    );
};

export default SubmitButton;