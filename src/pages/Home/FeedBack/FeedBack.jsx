import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm, } from "react-hook-form"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useReviews from "../../../hooks/useReviews";
// import './Feedback.css';

const FeedBack = () => {
    const axiosSecure = useAxiosSecure();
    const [,refetch] = useReviews();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // console.log(data)
        axiosSecure.post('/reviews',data)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your feedback has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
                  reset();
            }
        })
    }
    
    return (
        <div className="flex flex-col justify-center bg-blue-400 bg-opacity-30 items-center my-20 p-10 style={{backgroundImage: 'url(https://i.ibb.co/cQr9JfD/vaccination.jpg)'}}">
            <SectionTitle
                heading={"Feedback"}
                subHeading={"Please rate our services..."}
            ></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Select Camp Name */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Selecet a camp</span>
                    </div>
                    <select className="select select-bordered" {...register("camp_name", { required: true })}>
                        <option selected>Something</option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                    </select>
                    {errors.camp_name && <span className="text-red-800">Camp field is required</span>}
                </label>

                {/* Date */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Date</span>
                    </div>
                    <input type="date" placeholder="Date" className="input input-bordered w-full max-w-xs" {...register("time", { required: true })} />
                    {errors.time && <span className="text-red-800">This field is required</span>}
                </label>

                {/* Rating */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Selecet a Rating</span>
                    </div>
                    <select className="select select-bordered" {...register("rating", { required: true })}>
                        <option selected>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                    </select>
                    {errors.rating && <span className="text-red-800">This field is required</span>}
                </label>

                {/* Details */}
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Your bio</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24 w-80" {...register("details", { required: true })} placeholder="Say something"></textarea>
                    {errors.details && <span className="text-red-800">Details field is required</span>}
                </label>
                {/* errors will return when field validation fails  */}
                <input type="submit" className="btn mt-5 w-full font-bold" />
            </form>
        </div>
    );
};

export default FeedBack;