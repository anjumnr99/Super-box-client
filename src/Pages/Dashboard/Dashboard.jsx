
import { Link, NavLink, Outlet } from "react-router-dom";
import { MdAddBusiness } from "react-icons/md";
import { TbLogs } from "react-icons/tb";
import { GrAtm } from "react-icons/gr";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { GrResources } from "react-icons/gr";
import Navbar from "../../Components/Navbar";
import { AiOutlineProduct } from "react-icons/ai";
const Dashboard = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className=" grid grid-cols-1 md:grid-cols-12  gap-2">
                {/* dashboard side bar */}
                <div className="w-full md:col-span-4  lg:col-span-3 min-h-screen bg-blue-200">
                    <Link to="/dashboard/welcome-page" className="text-2xl font-semibold py-2 bg-gray-300 hover:bg-gray-500 hover:text-white flex items-center justify-center ">Dashboard</Link>
                    <div className="menu p-1 md:p-4 ">
                        {

                            <ul className="flex md:flex-col">
                                <li>
                                    <NavLink to="/dashboard/create-shop" className={`p-2 text-lg rounded-sm`}>
                                        <MdAddBusiness className="text-3xl" />
                                        Create a website</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/product-management" className={`p-2 text-lg rounded-sm`}>
                                        <AiOutlineProduct className="text-3xl"/>
                                        Product Management</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/blogs" className={`p-2 text-lg rounded-sm`}>
                                        <TbLogs className="text-3xl"/>
                                        Blogs
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/pos" className={`p-2 text-lg rounded-sm`}>
                                        <GrAtm className="text-3xl"/>
                                        POS
                                    </NavLink>
                                </li>
                             
                                <li>
                                    <NavLink to="/dashboard/chat-us" className={`p-2 text-lg rounded-sm`}>
                                        <HiChatBubbleLeftRight className="text-3xl"/>
                                        Chat with us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bm-resources" className={`p-2 text-lg rounded-sm`}>
                                        <GrResources className="text-3xl"/>
                                        Business and Marketing Resources
                                    </NavLink>
                                </li>

                            </ul>

                        }

                    </div>
                </div>
                {/* dashboard content */}
                <div className="w-full md:col-span-8 lg:col-span-9 ">
                   
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;