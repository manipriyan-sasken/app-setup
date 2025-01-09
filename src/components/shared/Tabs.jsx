"use client"

import React, { useState } from 'react';
import "./tabs.scss"
import OverView from '../views/OverView';
import Gpstracking from '../views/GpsTracking';

const Tabs = ({
    tabs = [
        { id: 0, title: "Overview", content: <OverView /> },
        { id: 1, title: 'GPS Tracking', content: <Gpstracking /> },
        { id: 2, title: 'Diagnostic Report', content: 'Content for Tab 3' },
    ]
}) =>
{
    // State to track the active tab index
    const [activeTab, setActiveTab] = useState(0);

    // Tab data for dynamic content

    return (
        <div className=" tabs_container">
            <div className='tabs_title_container'>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`tab_title py-2 px-4 text-lg font-semibold transition-colors duration-300 ease-in-out ${activeTab === tab.id
                            ? ' border-blue-500 active_tab'
                            : ' border-transparent hover:text-gray-600 inactive_tab'
                            }`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* Tabs Content */}
            <div className="tab_content_container mt-7 border border-gray-300 rounded-lg">
                <div className="tab_content text-xl font-medium">{tabs[activeTab].content}</div>
            </div>
        </div>
    );
};

export default Tabs;
