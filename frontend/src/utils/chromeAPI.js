// chromeAPI.js

// Function to track website activity
export const trackWebsiteActivity = (url) => {
    // Check if website data exists
    chrome.storage.local.get('websiteData', (result) => {
        const websiteData = result.websiteData || {};
        
        // Check if the URL is already tracked
        if (websiteData[url]) {
            // Increment total time spent on the website
            websiteData[url].totalTime += 1; // Increment by 1 (in seconds)
            // Update last visited time
            websiteData[url].lastVisited = new Date().toISOString();
        } else {
            // If URL is not tracked, initialize new entry
            websiteData[url] = {
                totalTime: 1, // Initialize total time to 1 second
                lastVisited: new Date().toISOString()
            };
        }

        // Save updated data to storage
        chrome.storage.local.set({ websiteData });
    });
};

// Function to set time limit for a website
export const setTimeLimitForWebsite = (url, timeLimit) => {
    // Check if website data exists
    chrome.storage.local.get('websiteData', (result) => {
        const websiteData = result.websiteData || {};
        
        // Update time limit for the website
        if (websiteData[url]) {
            websiteData[url].timeLimit = timeLimit;
            // Save updated data to storage
            chrome.storage.local.set({ websiteData });
        }
    });
};

// Function to get website data from storage
export const getWebsiteData = (callback) => {
    // Get website data from storage
    chrome.storage.local.get('websiteData', (result) => {
        const websiteData = result.websiteData || {};
        callback(websiteData);
    });
};
