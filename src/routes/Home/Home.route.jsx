import { useContext } from "react";

import Hero from "../../components/Hero/Hero.component";
import logo from "../../assets/pics/logo.png";

// Import errors
import MobileError from "../../errors/MobileError/MobileError.error";

// Import context to detect mobile screens
import { SmallScreenDetectorContext } from "../../contexts/SmallScreenDetectorContext/SmallScreenDetectorContext.context";

function Home()
{
    // Grab the context value
    const { isSmallScreen } = useContext(SmallScreenDetectorContext);
    return (
        isSmallScreen
        ?
        (
            <MobileError />
        )
        :
        (
            <div className="bg-base-200 w-screen h-screen" data-theme="dark">
                <Hero 
                    title="Image Hacker" 
                    imgSrc={logo}
                    content="Have you got any images to edit?"
                    routeUrl="/choices"
                    fullHeight={true}
                />
            </div>
        )
    );
}

export default Home;