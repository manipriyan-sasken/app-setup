
import Image from "next/image";
import CustomSwiper from "../shared/Swiper";

import eventCancelation from "../../../public/images/icons/event-cancelation.svg"
import "./overview.scss"
import RecentEvents from "./RecentEvents";

const OverView = () =>
{
    const slides = [
        <div className="swiper_slider_container"><h4 className="swiper_slider_header">Vehicle Signal Lost</h4>
            <p className="swiper_slider_description">Vehicle has some issues on scraping details through the TCU.</p></div>,
        <div className="swiper_slider_container"><h4 className="swiper_slider_header">Vehicle Signal Lost</h4>
            <p className="swiper_slider_description">Vehicle has some issues on scraping details through the TCU.</p></div>,
    ];
    return (
        <section className="overview_container">
            <div className="overview_top_section_container flex">
                <div className="overview_top_section_left_container">
                    <div className="overview_top_overlay_container">
                        <div className="header_overlay">
                            <p className="header_overlay_title">
                                <span>DIAGONISTIC</span>
                            </p>
                        </div>
                        <div className="header_row flex">
                            <div className="header_row_left">
                                <p className="header_title">Overall Score</p>
                                <p className="header_content">76%</p>
                            </div>
                            <div className="header_row_right">
                                <p className="header_title">Avg. Speed</p>
                                <p className="header_content">54 Km / hour</p>
                            </div>
                        </div>
                        <div className="header_row flex">
                            <div className="header_row_left">
                                <p className="header_title">Avg. Mileage</p>
                                <p className="header_content">29 / Liters</p>
                            </div>
                            <div className="header_row_right">
                                <p className="header_title">Avg. Fuel Intake</p>
                                <p className="header_content">48 Liters</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overview_top_section_right_container">
                    <div className="overview_top_overlay_container">
                        <div className="header_overlay">
                            <div className="header_overlay_title">
                                <span>NEEDS ATTENTION ALERTS</span>
                                <section className="vehicle_swiper_container">
                                    <CustomSwiper slides={slides} />
                                </section>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="overview_recent_events_container">
                <div className="recent_events_header_container flex">
                    <div className="recent_events_header_title">RECENT EVENTS</div>
                    <div className="recent_events_header_action">View Events</div>
                </div>
                <div className="recent_events_details_table_container">
                    <RecentEvents />
                </div>
            </div>
        </section>
    )
}

export default OverView