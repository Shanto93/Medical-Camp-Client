import useAdmin from "../../../../../hooks/useAdmin";

const PopularCampDetailsLayout = ({ cam }) => {
    const { camp_name, photo, camp_fees, scheduled_date, scheduled_time, venue, specialized_service, target_audience, healthcare_professionals, details } = cam;
    const [isAdmin] = useAdmin();
    return (
        <div>
            <div className="md:flex justify-center items-center gap-7">
                <div className="md:flex-1">
                    <img src={photo} alt="" />
                </div>
                <div className="md:flex-1">
                    <p className="text-3xl font-bold">{camp_name}</p>
                    <p><span className="font-semibold text-xl">Venue:</span> {venue}</p>
                    <p><span className="font-semibold text-xl">Specialized Service:</span> {specialized_service}</p>
                    <p><span className="font-semibold text-xl">Time:</span>{scheduled_date}, {scheduled_time} </p>
                    <p><span className="font-semibold text-xl">Fees:</span> {camp_fees} </p>
                    <p><span className="font-semibold text-xl">Target Audience: </span>{target_audience} </p>
                    <p><span className="font-semibold text-xl">Healthcare Professionals: </span>{healthcare_professionals} </p>
                    <p>{details} </p>
                </div>
            </div>
            {
                isAdmin ?
                    <>
                        <button className="btn bg-[#11e4a5] mt-5" disabled>Join Camp</button>

                    </>
                    :
                    <>
                        <button className="btn bg-[#11e4a5] mt-5 text-red-800">Join Camp</button>

                    </>
            }
        </div>
    );
};

export default PopularCampDetailsLayout;



