import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const camp_name = form.camp_name.value;
        console.log(name, password, photo, email, camp_name);

        // Create User

    }
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: 'url("https://i.postimg.cc/W4NVHJ3x/medical-camp-banner.jpg")' }}>
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center">
                </div>
                <div className="card flex-shrink-0 md:w-96 max-w-sm shadow-2xl bg-opacity-30 bg-[#11e4a5]">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-2xl md:text-4xl font-bold text-center text-white">Register Now</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Image URL" className="input input-bordered" required />
                        </div>
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

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Pick a camp</span>
                            </label>
                            <select className="select select-bordered" name="camp_name">
                                <option disabled selected>Pick one</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
                            </select>
                        </div>


                        <div className="form-control">
                            <button className="btn bg-[#11e4a5] text-white hover:bg-[#77eac7] border-0 mt-2">Login</button>
                        </div>
                        <p className='text-center'>Already have account?Please <Link to='/login' className='underline text-red-700'>Login</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;