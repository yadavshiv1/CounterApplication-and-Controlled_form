import { Outlet,Link } from "react-router-dom";
// import { Parent } from './component/Parent';

const Layout = () => {
  return (
    <>
 <Link to='/parent' ></Link>
 <Link to='/controll' ></Link>
<Outlet/>
    </>
  )
};

export default Layout;