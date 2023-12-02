import { useLoaderData } from "react-router-dom";
import AvailableCampsLayout from "./AvailableCampsLayout/AvailableCampsLayout";

const AvailableCamps = () => {
    const camps = useLoaderData();
    console.log(camps);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {
                camps.map(camp => <AvailableCampsLayout key={camp._id} camp={camp}></AvailableCampsLayout>)
            }
        </div>
    );
};

export default AvailableCamps;