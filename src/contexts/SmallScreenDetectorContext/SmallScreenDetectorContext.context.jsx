import { createContext, useState, useEffect } from "react";

// Get Boolean for true or false
const SmallScreenDetectorContext = createContext(null);

// Create the context provider
const SmallScreenDetectorContextProvider = ({ children }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Function to handle resizing
    const handleResizing = () => {
        setIsSmallScreen(window.innerWidth < 780)
    };

    // Every time there is a re-render, check if it's a mobile device
    useEffect(() => {
        // Small screen is tailwind breakpoint
        handleResizing();

        // Use an event listener to add the resize method
        window.addEventListener("resize", handleResizing);

        // Remove event listener on unmount
        return () => window.removeEventListener("resize", handleResizing());

    }, []);

    // Return the value that's meaningful
    return (
        <SmallScreenDetectorContext.Provider value={{isSmallScreen}}>
            {children}
        </SmallScreenDetectorContext.Provider>
    );
};

export {
    SmallScreenDetectorContext,
    SmallScreenDetectorContextProvider
};


