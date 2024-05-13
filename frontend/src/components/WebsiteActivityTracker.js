import React, { useState, useEffect } from 'react';
import { trackWebsiteActivity } from '../utils/chromeAPI';

const WebsiteActivityTracker = () => {
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        const handleTabChange = (tab) => {
            setActiveTab(tab.url);
            trackWebsiteActivity(tab.url); // Call function to track website activity
        };

        // Listen for tab changes
        chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
            if (changeInfo.status === 'complete' && tab.active) {
                handleTabChange(tab);
            }
        });

        // Get initial active tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            if (activeTab) {
                handleTabChange(activeTab);
            }
        });
    }, []);

    return (
        <div>
            <p>Active Tab: {activeTab}</p>
            {/* Add additional UI elements for tracking activity */}
        </div>
    );
};

export default WebsiteActivityTracker;
