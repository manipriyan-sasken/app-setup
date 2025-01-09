"use client"

import { useState, useEffect } from "react";

import VehicleDashboard from "@/components/views/VehicleDashboard";
import Image from "next/image";
import Sidebar from "@/components/shared/Sidebar";

export default function Home()
{
  const [showSideBar, setShowSideBar] = useState(false)
  const [theme, setTheme] = useState('light');

  useEffect(() =>
  {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() =>
  {
    // Apply theme class to the body
    if (theme === 'dark') {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);


  return (
    <div>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 bg-gray-300 rounded"
      >
        Toggle Theme
      </button>
      <VehicleDashboard setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <Sidebar isOpen={showSideBar} setShowSideBar={setShowSideBar} />

    </div>
  );
}
