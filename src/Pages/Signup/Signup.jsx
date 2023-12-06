import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import useAuth from '../../Hooks/useAuth';
import { IoLogoGoogleplus } from 'react-icons/io';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';

const Signup = () => {
    const { createUser, googleSignin } = useAuth()
    const { register, handleSubmit,
        formState: { errors } } = useForm()
    const navigate = useNavigate()
    const axiosURL = useAxios()
    // const [currentDate, setCurrentDate] = useState(new Date());
   

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setCurrentDate(new Date());
    //     }, 1000);
    
    //     return () => clearInterval(interval);
    //   }, []);

     

    const handleGoogleSingin = () => {
        googleSignin()
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(error => console.log(error))
    }

    

    const onSubmit = data => {

        createUser(data.email, data.password)
        
            .then(res => {
                console.log(res.data)
                const userInfo = {
                    name : data.name,
                    email : data.email,
                    role : 'user'
                }
                axiosURL.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('user added to the database')
                            // reset();
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/login');
                        }
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
        console.log(data)
    }




    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered"
                                {...register('name')}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"
                                {...register('email')} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" {...register('password')} />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Signup</button>
                        </div>
                        <p>Allready have an account <Link to='/login'>Login</Link></p>
                        <div className="divider">OR</div>
                        <button

                            onClick={handleGoogleSingin}

                            className="btn btn-ghost">
                            <IoLogoGoogleplus className="text-5xl "></IoLogoGoogleplus>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;


