import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="bgImg text-3xl  font-bold text-emerald-500 ">
                <div className='ml-16'>
                    <span className='p-2'> DELIVERINGEMOTIONS</span> <br />
                    <span className='p-2'>WORLDWIDEANDACROSS</span> <br />
                    <span className='p-2'>64 DISTRICTS</span> <br />
                    <span className='p-2'>DOMESTICALLY</span>
                </div>
                <div className='flex justify-center'>
                    <input className='mt-20 p-3 rounded-lg mx-auto' type="text" placeholder='search' />
                </div>
            </div>

        </div>
    );
};

export default Banner;