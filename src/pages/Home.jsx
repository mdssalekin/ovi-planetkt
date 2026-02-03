
import React, { useState } from "react";
import heroVideo from './assets/hero.mp4';
import FlightSearch from "../components/FlightSearch";
import HotelSearch from "../components/HotelSearch";
import VisaSearch from "../components/VisaSearch";
import HolidayPackages from "../components/HolidayPackages";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaHotel } from "react-icons/fa6";
import {
  FaUmbrellaBeach,
  FaPassport,
} from "react-icons/fa";

const tabsData = [
  { label: "Flight",  icon: BiSolidPlaneAlt },
  { label: "Hotel",  icon: FaHotel },
  { label: "Visa",  icon: FaPassport },
  { label: "Holiday", icon: FaUmbrellaBeach },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Flight");

  const renderTabComponent = () => {
      switch (activeTab) {
        case "Flight":
          return <FlightSearch />;
        case "Hotel":
          return <HotelSearch />;
        case "Holiday":
          return <HolidayPackages />;
        case "Visa":
          return <VisaSearch />
        default:
          return null;
      }
    };
  
  return (
    <div className="relative min-h-[308px] flex flex-col items-center justify-center lg:flex">
      <div className="absolute top-0 z-0 mt-0 min-h-[310px] w-full border-t border-gray-300/50 bg-gradient-to-b from-black-100 to-black-700"></div>

      <div className="absolute top-0 md:block h-[308px] w-full -z-1">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <div className="container text-center md:text-left my-12 px-4 md:px-0">
          <h1 className="text-xl md:text-5xl font-bold text-white">
            Travel Smart, Travel Better. Travel with PlaneTkt.com
          </h1>
          <p className="text-sm md:text-md font-semibold text-white mt-2">
          </p>
        </div>

        <div className="relative w-full flex flex-col items-center mt-10">
          <div className="w-full max-w-[960px] rounded-xl bg-white shadow-md p-6 relative z-0">
            {renderTabComponent()}
          </div>

          <div className="absolute -top-10 z-10 flex w-full max-w-[640px] overflow-hidden rounded-lg shadow-md" style={{backgroundColor: "#290961"}}>
            {tabsData.map((tab) => {
              const Icon = tab.icon;
              return (
                <div
                  key={tab.label}
                  className={`flex-1 cursor-pointer text-center py-5 font-bold transition-all duration-200 ${
                    activeTab === tab.label
                      ? "bg-red-500 text-black"
                      : "text-green-700 hover:bg-red-400 hover:text-green-900"
                  }`}
                  onClick={() => setActiveTab(tab.label)}
                >
                  <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-3">
                    <Icon className="text-2xl text-white group-hover:text-brand-1 transition" />
                    <span className="text-lg text-white">{tab.label}</span>
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 w-full justify-center text-center text-red-500 text-2xl font-bold px-4 md:px-0" style={{color: "#EF4444"}}>More Updates are coming soon...</div>
      </div>
    </div>
  );
}
