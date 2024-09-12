import BtnLink from "../BtnLink/BtnLink.component";


function Hero({title, content, imgSrc = null, routeUrl = null})
{
    return (
        <div className="hero bg-base-200 min-h-full">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    {
                        imgSrc !== null
                        ?
                            (
                                <img
                                    className="imageHacker-logo"
                                    src={imgSrc}
                                    alt="ImageHacker Logo"
                                />
                            )
                        :
                            null
                    }
                    <h1 className="my-10 text-5xl font-bold">{title}</h1>
                    <p className="py-6">{content}</p>
                    {
                        routeUrl !== null
                        ?
                            (
                                <BtnLink
                                    text="Get Started"
                                    classStr="btn btn-info text-white uppercase"
                                    route={routeUrl}
                                />
                            )
                        :
                            null
                    }
                </div>
            </div>
        </div>
    );
}

export default Hero;