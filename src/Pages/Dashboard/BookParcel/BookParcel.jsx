import { useState } from 'react';
import { useForm } from "react-hook-form"
import useAuth from '../../../Hooks/useAuth';
import Heading from '../../../Components/Heading/Heading';
import SubmitButton from '../../../Components/SubmitButton/SubmitButton';
import useAxios from '../../../Hooks/useAxios';




const BookParcel = () => {
    
    const axiosURL = useAxios()
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors } }
        = useForm()
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLognitude] = useState(null)
    const [price, setPrice] = useState('')

    


    const onSubmit = (data) => {
          const { name, email, phone, parcelType, parcelWigth, receiversName, receiversNumber, parcelDeliveryAddress, requestedDeliveryDate, latitude, longitude, bookingDate } = data;

        
        const bookInfo = {
             name, email, phone, status: 'panding',
             parcelType,
             parcelWigth : parseInt(parcelWigth) * 50, receiversName,
             receiversNumber, parcelDeliveryAddress, requestedDeliveryDate, latitude, longitude, bookingDate  };

             
        

        // const bPrice = bookInfo.parcelWigth
        // setPrice(bPrice)

        axiosURL.post('/bookings', bookInfo)
            .then(res => {
                console.log(res)
            })


        console.log(data)
    }

    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (success) => {
                    const latitude = success.coords.latitude
                    const longitude = success.coords.longitude
                    setLatitude(latitude)
                    setLognitude(longitude)
                }
            )
        } else {
            console.log('Geolation Not Supported!')
        }

    }


    const handleInputValue = (event)=>{
        const p = event.target.value
        setPrice(p)
    }



    return (
        <div>
            <div>
                <Heading heading='Book Parcel'></Heading>
            </div>

            <form onSubmit={ handleSubmit(onSubmit) }>
                <Heading subheading={'User Details'}></Heading>
                <div className='w-full flex '>
                    <input className='p-2 mr-2 w-full border-4 rounded-md' readOnly defaultValue={user?.displayName} {...register("name")} />

                    <input className='p-2 w-full border-4 rounded-md' readOnly
                        defaultValue={user?.email} {...register("email", { required: true })} />
                </div>

                {/* number & parcel type */}

                <div className='w-full flex mt-5'>
                    <input className='p-2 mr-2 w-full border-4 rounded-md' placeholder='Your Nunber'  {...register("phone")} />

                    <input className='p-2 w-full border-4 rounded-md' placeholder='Parcel Type' {...register("parcelType", { required: true })} />

                </div>

                <div className='w-full flex mt-5'>
                   
                    <input 
                    min={0} 
                    // value={price}
                    onChange={handleInputValue} 
                    
                    type='number' className='p-2 mr-2 w-full border-4 rounded-md' placeholder='Parcel Wigth' 
                    {...register("parcelWigth", { required: true })} />
                    
                    <input  className='p-2 w-full border-4 rounded-md' placeholder='Booking Date' {...register("bookingDate", { required: true })} />

                </div>



                {/* Receiver’s Name */}

                <Heading subheading='Receivers Details'></Heading>
                <div className='w-full flex mt-5'>
                    <input className='p-2 mr-2 w-full border-4 rounded-md' placeholder='Receivers Name'  {...register("receiversName")} />

                    <input className='p-2 w-full border-4 rounded-md' placeholder='Receivers Number' {...register("receiversNumber", { required: true })} />
                </div>

                <textarea className='p-2 w-full mt-5 border-4 rounded-md'
                    placeholder='Parcel Delivery Address'
                    {...register("parcelDeliveryAddress", { required: true })} />

                <div className='w-full flex mt-5'>
                    <input className='p-2 mr-2 w-full border-4 rounded-md' placeholder='Requested Delivery Date'  {...register("requestedDeliveryDate")} />

                    <input className='p-2 w-full border-4 rounded-md' readOnly
                        defaultValue={latitude}
                        placeholder='Delivery Address Latitude' {...register("deliveryAddressLatitude", )} />
                    <input className='p-2 w-full border-4 rounded-md' placeholder='Delivery Address Longitude' readOnly
                        defaultValue={longitude}
                        {...register("deliveryAddressLongitude", )} />
                </div>

                <button type='button' className='p-2 text-lg font-semibold text-teal-600 hover:bg-teal-500 hover:text-white duration-200 w-1/5 border-4 border-teal-400 rounded-lg my-4' 
                onClick={handleLocation}>Add Location</button>

                <div className='border bg-green-300 text-red-700 font-bold '>
                    <p>Price: {price}</p>
                </div>



                <button type='submit' className='p-2 text-lg font-semibold text-teal-600 hover:bg-teal-500 hover:text-white duration-200 w-1/5 border-4 border-teal-400 rounded-lg my-4' >Submit</button>
            </form>
            
        </div>
    );
};

export default BookParcel;


