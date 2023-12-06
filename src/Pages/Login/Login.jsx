import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { IoLogoGoogleplus } from "react-icons/io";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
    const { googleSignin, login, user} = useAuth()
    const navigate = useNavigate()
   
    const { register, handleSubmit, 
        formState: { errors } } = useForm()

    const onSubmit = data => {
        console.log(data)
        login(data.email, data.password)
        .then(res =>{
            console.log(res.user)
            navigate('/')
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Logged in successfully",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(err =>{
            console.log(err.message)
        })
    }
    
   const handleGoogleSingin = ()=>{
    googleSignin()
    .then(res => {
        console.log(res)
        navigate('/')
    })
    .catch(error => console.log(error))
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
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register('email')} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register('password')} placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Don't have an account <Link to='/signup'>Signup</Link></p>
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

export default Login;