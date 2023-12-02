const AvailableCampsLayout = ({camp}) => {
    const { _id,camp_name, photo, camp_fees, scheduled_date, scheduled_time, venue, specialized_service, target_audience, healthcare_professionals } = camp;
    return (
        <div>
            <h2>{camp_name}</h2>
        </div>
    );
};

export default AvailableCampsLayout;