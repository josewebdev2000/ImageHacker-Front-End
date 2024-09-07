
import BtnLink from "../BtnLink/BtnLink.component";
import logo from "../../assets/pics/logo.png";


function Hero({title, content})
{
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <img
                        className="imageHacker-logo"
                        src={logo}
                        alt="ImageHacker Hero Image"
                    />
                    <h1 className="my-10 text-5xl font-bold">{title}</h1>
                    <p className="py-6">{content}</p>
                    <BtnLink
                        text="Get Started"
                        classStr="btn btn-info text-white uppercase"
                        route="/choices"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;