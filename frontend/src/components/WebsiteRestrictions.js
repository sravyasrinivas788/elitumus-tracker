import React from 'react';
import { addRestrictedWebsite, removeRestrictedWebsite } from '../utils/chromeAPI';

const WebsiteRestrictions = () => {
    const handleAddRestriction = (website) => {
        addRestrictedWebsite(website); // Call function to add website to restricted list
    };

    const handleRemoveRestriction = (website) => {
        removeRestrictedWebsite(website); // Call function to remove website from restricted list
    };

    return (
        <div>
            <h2>Website Restrictions</h2>
            <button onClick={() => handleAddRestriction('example.com')}>Add Website</button>
            <button onClick={() => handleRemoveRestriction('example.com')}>Remove Website</button>
            {/* Add additional UI elements for managing website restrictions */}
        </div>
    );
};

export default WebsiteRestrictions;
