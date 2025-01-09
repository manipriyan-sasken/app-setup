import "./vehicle-dashboard.scss"
import Tabs from "../shared/Tabs"
import VehicleDashboardContent from "./VehicleDashboardContent"

const VehicleDashboard = ({ setShowSideBar, showSideBar }) =>
{

    const tabs = [
        { id: 0, title: 'ICE Vehicles', content: <VehicleDashboardContent showSideBar={showSideBar} setShowSideBar={setShowSideBar} /> },
        { id: 1, title: 'EV Vehicles', content: 'Content for Tab 2' },
    ]
    return (
        <>
            <section className="vehicle_dashboard_container">
                <div className="vehicle_dashboard_header flex items-center">
                    <section className="vehilce_dashboard_header_left">
                        <h1>Vehicle Dashboard</h1>
                    </section>
                    <section className="vehilce_dashboard_header_right flex">
                        <div className="region_container"></div>
                        <div className="country_container"></div>
                        <div className="language_switcher_container"></div>
                    </section>

                </div>
                <div className="vehicle_dashboard_tabs_container">
                    <div className="dashboard_tabs_left">
                        <Tabs tabs={tabs} />
                    </div>
                    <div className="dashboard_tabs_right text-black"></div>
                </div>
            </section></>
    )
}

export default VehicleDashboard