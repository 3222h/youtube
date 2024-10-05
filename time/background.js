(() => {
    "use strict";
    
    const setEmulations = (tabId) => {
        // Define your custom values
        const customSettings = {
            timezone: "America/New_York", // Change to desired timezone
            latitude: 40.7128, // Change to desired latitude
            longitude: -74.0060, // Change to desired longitude
            locale: "en-US" // Change to desired locale
        };

        // Attach the debugger to the tab
        chrome.debugger.attach({ tabId: tabId }, "1.3", () => {
            chrome.debugger.sendCommand({ tabId: tabId }, "Emulation.setTimezoneOverride", {
                timezoneId: customSettings.timezone
            });

            chrome.debugger.sendCommand({ tabId: tabId }, "Emulation.setGeolocationOverride", {
                latitude: customSettings.latitude,
                longitude: customSettings.longitude,
                accuracy: 1
            });

            chrome.debugger.sendCommand({ tabId: tabId }, "Emulation.setLocaleOverride", {
                locale: customSettings.locale
            });
        });
    };

    const checkAndSetEmulations = (tabId) => {
        chrome.debugger.getTargets((targets) => {
            const target = targets.find(t => t.tabId === tabId);
            if (!target || !target.attached) {
                setEmulations(tabId);
            }
        });
    };

    chrome.tabs.onCreated.addListener((tab) => {
        checkAndSetEmulations(tab.id);
    });

    chrome.tabs.onActivated.addListener((activeInfo) => {
        checkAndSetEmulations(activeInfo.tabId);
    });

    chrome.tabs.onUpdated.addListener((tabId) => {
        checkAndSetEmulations(tabId);
    });
})();
