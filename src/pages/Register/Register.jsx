import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const camp_name = form.camp_name.value;
        console.log(name, password, photo, email, camp_name);

        // if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Z\d@$!%*#?&]{8,}$/.test(password)) {
        //     return Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'Minimum six characters, at least one capital letter and one special character',
        //         footer: '<a href="">Why do I have this issue?</a>'
        //     })
        // }

        createUser(email, password)
            .then(result => {
                result.user;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your account has been registered Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        const userInfo = {
                            name: name,
                            photo: photo,
                            email: email,
                            camp_name: camp_name
                        }

                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("User addeded to database.")
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Your account has been registered Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    form.reset();
                                    navigate('/');
                                }
                            })
                    })
                    .catch()

            })
            .catch(error => {
                console.error(error);

                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'auth/email-already-in-use',
                })

            })

    }
    return (
        <div>
            <Helmet>
                <title>MediCamp Care | Sign Up</title>
            </Helmet>
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
                                <button className="btn bg-[#11e4a5] text-white hover:bg-[#77eac7] border-0 mt-2">Register</button>
                            </div>
                            <p className='text-center'>Already have account?Please <Link to='/login' className='underline text-red-700'>Login</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;