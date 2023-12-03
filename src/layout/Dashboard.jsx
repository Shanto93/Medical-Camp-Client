import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TbRegistered } from "react-icons/tb";
import { MdOutlinePayments, MdOutlineRateReview } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#a9e1d1]">
                <ul className="menu p-4">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to='/dashboard/adminHome' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>
                                        <CgProfile />
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allUsers' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>
                                        <CgProfile />
                                        All Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addCamps' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>
                                        <TbRegistered />
                                            Add Camps
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageCamps' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>
                                        <MdOutlineRateReview />
                                        Manage Camps
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageRegisteredCamps' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>
                                        <MdOutlinePayments />
                                        Manage Registered Camps
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
                            </>
                    }


                    {/* Shared Navlinks */}

                    <div className="divider"></div>

                    <li><NavLink to='/' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>Home</NavLink></li>
                    <li><NavLink to='/availableCamps' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>Available Camps</NavLink></li>
                    <li><NavLink to='/contactUs' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>Contact Us</NavLink></li>
                    <li><NavLink to='/dashboard' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>Dashboard</NavLink></li>
                    <li><NavLink to='/login' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>Login</NavLink></li>

                </ul>
            </div>
            {/* dashboard contant */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;