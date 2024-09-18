// Screen to render when the screen width is too small
import Hero from "../../components/Hero/Hero.component";
import noPhone from "../../assets/pics/no-phone.png";

function MobileError()
{
    return (
        <div className="bg-base-200 w-screen h-screen" data-theme="dark">
            <Hero 
                title="No Mobile Devices" 
                imgSrc={noPhone}
                content="Image Hacker is not suited for mobile screens"
                fullHeight={true}
            />
        </div>
    );
}

export default MobileError;