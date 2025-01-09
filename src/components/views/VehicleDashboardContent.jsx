"use client"

import { useState, useEffect } from "react";
import Search from "../shared/SearchComponent";
import VehicleStatus from "./VehicleStatus"
import Customtabel from "../shared/SortingTable";

const VehicleDashboardContent = ({ setShowSideBar, showSideBar }) =>
{
    const [filteredResults, setFilteredResults] = useState([]);

    const items = ['React', 'TailwindCSS', 'JavaScript', 'CSS', 'Node.js', 'GraphQL'];
    const handleSearch = (query) =>
    {
        const results = items.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredResults(results);
    };

    const getSelectedVehicle = (data) =>
    {
        setShowSideBar(true)
        return data
    }

    useEffect(() =>
    {
        if (showSideBar) {
            // Add class to body when sidebar is open
            document.body.classList.add("sidebar-active");
        } else {
            // Remove class from body when sidebar is closed
            document.body.classList.remove("sidebar-active");
        }

        return () =>
        {
            // Clean up when the component is unmounted
            document.body.classList.remove("sidebar-active");
        };
    }, [showSideBar]);
    return (<>
        <section className="vehicle_dashboard_content_container">
            <div className="vehicle_dashboard_status_main_container flex">
                <div className="vehicle_count_container">
                    <p className="header_title vehicle_status_container ">VEHICLES</p>
                    <div className="border_right">
                        <VehicleStatus size={2000} title={"#Records"} />
                    </div>
                </div>
                <div className="vehicle_dashboard_status_container">
                    <p className="header_title vehicle_status_section">STATUS</p>
                    <section className="flex justify-between">
                        <div className="vehicle_status_container">
                            <VehicleStatus status="running" size={2000} title={"Running"} />
                        </div>
                        <div className="vehicle_status_container">
                            <VehicleStatus status="Idle" size={2000} title={"Idle"} />
                        </div>
                        <div className="vehicle_status_container">
                            <VehicleStatus status="Halt" size={2000} title={"Halt"} />
                        </div>
                        <div className="vehicle_status_container">
                            <VehicleStatus status="no-gps" size={2000} title={"No Gps"} />
                        </div>
                        <div className="vehicle_status_container">
                            <VehicleStatus status="Offline" size={2000} title={"Offline"} />
                        </div>
                        <div className="vehicle_status_container">
                            <VehicleStatus status="Inactive" size={2000} title={"Inactive"} />
                        </div>
                        <div className="vehicle_status_container border_right">
                            <VehicleStatus status="Dead" size={2000} title={"Dead"} />
                        </div>
                    </section>
                </div>
                <div className="vehicle_dashboard_alerts_container">
                    <p className="header_title vehicle_status_section">ALERTS</p>
                    <section className="flex justify-between">
                        <div className="vehicle_status_container">
                            <VehicleStatus status="running" size={2000} title={"Running"} />
                        </div>
                        <div className="vehicle_status_container">
                            <VehicleStatus status="Idle" size={2000} title={"Idle"} />
                        </div>
                        <div className="vehicle_status_container">
                            <VehicleStatus status="Halt" size={2000} title={"Halt"} />
                        </div>
                        <div className="vehicle_status_container">
                            <VehicleStatus status="Halt" size={2000} title={"Halt"} />
                        </div>
                    </section>
                </div>
            </div>
            <div className="vehicle_dashboard_map_main_container flex">
                <div className="vehicle_dashboard_map_container">
                    Map section
                </div>
                <section className="vehicle_dashboard_map_details_container">
                    <div className="flex">
                        <div className="alert_type_container">All Records</div>
                        <div className="alert_group-container">All Groups</div>
                        <div className="alert_search_container">
                            <Search onSearch={handleSearch} />
                        </div>
                    </div>
                    <div className="vechicle__details_container">
                        <Customtabel getSelectedVehicle={getSelectedVehicle} />
                    </div>
                </section>
                {/* <Sidebar isOpen={showSideBar} setShowSideBar={setShowSideBar} /> */}
            </div>
        </section>
    </>)
}

export default VehicleDashboardContent