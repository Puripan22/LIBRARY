import React from "react";
import Navbar from "../components/Navbar";
import CardItem from "../components/CardItem";
import Chart1 from "../components/Chart1";
function Dashboard() {
  return (
    <div className="flex h-screen w-screen">
      <Navbar />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 w-full">
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <Chart1/>
        <div className="col-span-12 xl:col-span-8">
          
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
