import { NavLink } from "react-router-dom";

const Navbar = () => {

  return(
    <div className=" bg-orange-500" >
      <nav className="  flex h-14 items-center justify-center border-b-[1px] border-b-slate-200">
        {/* <NavLink to="/"> */}
          <div className=" ml-5">
            <img src="../logo.png" alt="" className="h-20 " />
          </div>
        {/* </NavLink> */}
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
        {/* <NavLink to="/"> */}
        <p className=" hover:text-green-600">Home</p>
        {/* </NavLink> */}
        {/* <NavLink to="/"> */}
        <p className=" hover:text-green-600">Chat</p>
        {/* </NavLink> */}
        {/* <NavLink to="/"> */}
        <p className=" hover:text-green-600">Data</p>
        {/* </NavLink> */}
          
        </div>

      </nav>
    </div>
  )
};

export default Navbar;
