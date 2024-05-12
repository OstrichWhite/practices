import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="p-4 min-h-screen">
      <Header />
      <Outlet />
      <div>Footer</div>
    </div>
  );
};

export default Layout;
