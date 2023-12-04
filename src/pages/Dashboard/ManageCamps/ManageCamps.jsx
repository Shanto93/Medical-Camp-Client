import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCamps from "../../../hooks/useCamps";
import { FaRegTrashAlt } from "react-icons/fa";

const ManageCamps = () => {
    const [popularcamp] = useCamps();
    return (
        <div>
            <SectionTitle
                heading={"Popular Camps"}
                subHeading={"--Hurry Up--"}
            ></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Camp Name</th>
                            <th>Scheduled Date and Time</th>
                            <th>Location</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            popularcamp.map((camp, index) => <tr key={camp._id}>
                                <th>{index + 1}</th>
                                <td>{camp.camp_name} </td>
                                <td>{camp.scheduled_date}, {camp.scheduled_time} </td>
                                <td>{camp.venue} </td>
                                <td>
                                <button
                                        className="btn btn-ghost text-white bg-[#11e4a5]"
                                    >Update</button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-ghost bg-[#11e4a5]"
                                    ><FaRegTrashAlt className="text-red-600 text-xl" /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageCamps;