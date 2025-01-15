"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import VehicleDashboard from "@/components/views/VehicleDashboard";
import Image from "next/image";
import Sidebar from "@/components/shared/Sidebar";
import Line_Graph from "@/components/shared/Line-Graph";

export default function Home() {
  let path = usePathname();
  let router = useRouter();
  console.log("path", path);
  const [showSideBar, setShowSideBar] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply theme class to the body
    if (theme === "dark") {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    if (path === "/") {
      router.replace("/vehicle-dashboard");
    }
  }, [path]);

  const changeTheme = () => {
    if (document.querySelector("body").getAttribute("data-theme") === "dark") {
      document.querySelector("body").setAttribute("data-theme", "light");
    } else {
      document.querySelector("body").setAttribute("data-theme", "dark");
    }
  };
  const data1=[10, 15, 30, 25, 20,25,55,45,64,53,78,32];
  const data2=[20, 25, 40, 35, 30, 45,32,76,34,62,86,12];
  const data3=[5, 45, 10, 85, 20, 95,5,9,30,90,20,45,55];
  const label1="D0";
  const label2="D1";
  const label3="D2";
  return (
    <div>
      <button
        // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        onClick={changeTheme}
        className="p-2 bg-gray-300 rounded absolute"
      >
        Toggle Theme
      </button>
      <div style={{width:"800px"}}>
      {/* <Line_Graph data1={data1} data2={data2} data3={data3} label1={label1} label2={label2} label3={label3}  /> */}
      </div>
      
      <VehicleDashboard
        setShowSideBar={setShowSideBar}
        showSideBar={showSideBar}
      />
      <Sidebar isOpen={showSideBar} setShowSideBar={setShowSideBar} />
    </div>
  );
}
