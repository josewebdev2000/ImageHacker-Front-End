import { useContext } from "react";

import Hero from "../../components/Hero/Hero.component";
import ChoicesGrid from "../../components/ChoicesGrid/ChoicesGrid.component";
import options from "../../assets/pics/options.png";

import { SmallScreenDetectorContext } from "../../contexts/SmallScreenDetectorContext/SmallScreenDetectorContext.context";
import MobileError from "../../errors/MobileError/MobileError.error";

function Choices()
{
    // Grab if it's a mobile device or not
    const { isSmallScreen } = useContext(SmallScreenDetectorContext);

    return (
        isSmallScreen
        ?
        <MobileError />
        :
        (
            <div className="bg-base-200 w-screen h-screen grid-rows-2" data-theme="dark">
                <Hero 
                    title="Options"
                    imgSrc={options}
                    extraClasses="my-0"
                />
                <ChoicesGrid />
            </div>
        )
    );
}

export default Choices;