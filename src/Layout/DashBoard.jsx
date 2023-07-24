import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet, FaUtensils, FaUsers, FaBook } from 'react-icons/fa';
import { AiOutlineMenu } from "react-icons/ai";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
// import useAdmin from "../Hooks/useAdmin";


const DashBoard = () => {
    const [cart] = useCart();
    // TODO: load data from the server to have dynamic isAdmin based on data.
    // const isAdmin = true;
    const [isAdmin] = useAdmin();


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054] w-full">
                <label htmlFor=" my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem" ><FaUtensils></FaUtensils> Add Items </NavLink></li>
                            <li><NavLink to="/dashboard/manageItems"> <AiOutlineMenu></AiOutlineMenu> Manage Items</NavLink></li>
                            <li><NavLink to="/bookings"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allUsers"> <FaUsers></FaUsers> All Users</NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                            <li><NavLink to="/menu"> <AiOutlineMenu></AiOutlineMenu> Our Menu</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/myCart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <div className="badge badge-secondary ms-3">+{cart?.length || 0}</div>
                                </NavLink>

                            </li>
                            <li><NavLink to="/order"> Our Food</NavLink></li>
                        </> : <>
                            <li><NavLink to="/"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/history" ><FaWallet></FaWallet> Payment History </NavLink></li>
                            <li>
                                <NavLink to="/dashboard/myCart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <div className="badge badge-secondary ms-3">+{cart?.length || 0}</div>
                                </NavLink>

                            </li>
                            <li><NavLink to="/dashboard/reservations"> <FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                            <li><NavLink to="/menu"> <AiOutlineMenu></AiOutlineMenu> Our Menu</NavLink></li>
                            <li><NavLink to="/order"> Our Food</NavLink></li>
                        </>
                    }


                </ul>

            </div>
        </div>
    );
};

export default DashBoard;