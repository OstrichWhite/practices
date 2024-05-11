import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="p-4 min-h-screen">
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
};

export default Layout;
