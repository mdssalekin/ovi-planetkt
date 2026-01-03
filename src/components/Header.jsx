import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  FaPlane,
  FaHotel,
  FaUmbrellaBeach,
  FaPassport,
  FaSimCard,
  FaTags,
  FaUsers,
} from "react-icons/fa";

const menuItems = [
  { label: "Flight", path: "/flight", icon: FaPlane },
  { label: "Hotel", path: "/hotel", icon: FaHotel },
  { label: "Holiday", path: "/holiday", icon: FaUmbrellaBeach },
  { label: "Visa", path: "/visa", icon: FaPassport },
  { label: "eSIM", path: "/esim", icon: FaSimCard },
  { label: "Promotions", path: "/promotions", icon: FaTags },
  { label: "About", path: "/about", icon: FaUsers },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="sticky top-0 z-50 shadow-md" style={{backgroundColor: "#290961"}}>
        <div className="h-14 md:h-20 w-full">
          <div className="container mx-auto h-full px-4">
            <div className="flex h-full items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  className="md:hidden p-2 text-gray-700"
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open menu"
                >
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                <img
                  src={logo}
                  style={{ height: 200, width: 150}}
                  alt="logo"
                  onClick={() => navigate("/")}
                  className="h-10 md:h-12 object-contain cursor-pointer"
                />
              </div>
              <div className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                            key={item.label}
                            to={item.path}
                            end
                            className="group flex flex-col items-center gap-1"
                            >
                            {({ isActive }) => (
                                <>
                                <Icon className="text-xl text-white group-hover:text-white transition" />

                                <span className="text-sm font-medium text-white group-hover:text-white transition">
                                    {item.label}
                                </span>

                                <div
                                    className={`
                                    h-[2px] bg-red-500 transition-all duration-300
                                    w-0 group-hover:w-full
                                    ${isActive ? "w-full" : ""}
                                    `}
                                />
                                </>
                            )}
                            </NavLink>
                        );
                    })}
                    
              </div>
              <div className="flex items-center gap-2">
                <Link to="/signin">
                    <button
                    className="
                        h-10 w-20 md:w-24 rounded-full 
                        bg-red-500 text-white font-semibold
                        focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
                        active:scale-95 transition
                    "
                    >
                    Sign In
                    </button>
                </Link>

                <Link to="/signup">
                    <button
                    className="
                        h-10 w-20 md:w-24 rounded-full 
                        border border-red-500 text-red-500 font-semibold
                        focus:outline-none focus:ring-2 focus:ring-brand-1 focus:ring-offset-2
                        active:scale-95 transition
                    "
                    >
                    Sign Up
                    </button>
                </Link>
                </div>
            </div>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <img src={logo} alt="logo" className="h-10 object-contain" />
            <button
              onClick={() => setMobileOpen(false)}
              className="text-red-600 text-xl font-bold"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2">
            {[
              "Flight",
              "Hotel",
              "Holiday",
              "Visa",
              "eSIM",
              "Promotions",
              "Business Class",
              "FT Club",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg p-2 text-sm font-medium cursor-pointer hover:bg-gray-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
