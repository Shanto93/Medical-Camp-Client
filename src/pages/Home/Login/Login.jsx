import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";


const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    
    }
    return (
        <div className="hero min-h-screen bg-base-200" style={{backgroundImage: 'url("https://i.postimg.cc/W4NVHJ3x/medical-camp-banner.jpg")'}}>
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center">
                </div>
                <div className="card flex-shrink-0 md:w-96 max-w-sm shadow-2xl bg-opacity-30 bg-[#11e4a5]">
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-2xl md:text-4xl font-bold text-center text-white">Login now!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <button className="btn bg-[#11e4a5] text-white hover:bg-[#77eac7] border-0 mt-2">Login</button>
                        </div>
                        <p className='text-center'>Do not have account?Please <Link to='/register' className='underline text-red-700'>register</Link> </p>
                    </form>
                    <button className="btn bg-[#11e4a5] text-white border-0 hover:bg-[#77eac7] mx-8 mb-5">
                        <FcGoogle className='text-3xl'></FcGoogle>Google Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;