import React from "react";
import { useAuthenticationStore } from "../../state";

const Navbar: React.FC = () => {
  const { logout } = useAuthenticationStore();  
  return (
    <>
      <nav className="flex items-center justify-between w-full h-14 bg-slate-600">
        <div className="p-2 m-2">
          <h3>This is a navbar</h3>
        </div>
        <div className="p-3 m-1 ">
          <ul className="flex items-center justify-start">
            <li className="inline-block p-2">Home</li>
            <li className="inline-block p-2">About</li>
            <li className="inline-block p-2" onClick={logout}>Contact Us</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
