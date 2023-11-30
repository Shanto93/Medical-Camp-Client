import { useLoaderData, useParams } from "react-router-dom";

const PopularCampDetails = () => {
    const popularCamps = useLoaderData();
    // console.log(blog);
    const { _id } = useParams();
    const camp = popularCamps.filter(camp => camp._id === _id);
    console.log(camp._id);
    return (
        <div>
            <p>Show Something</p>

        </div>
    );
};

export default PopularCampDetails;