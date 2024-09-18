import BtnLink from "../BtnLink/BtnLink.component";


function Hero({title, content, imgSrc = null, routeUrl = null, fullHeight = false, extraClasses = ""})
{
    let heroClassNameStr = "hero";
    if (fullHeight)
    {
        heroClassNameStr += " min-h-full";
        heroClassNameStr += extraClasses;
    }

    return (
        <div className={heroClassNameStr}>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    {
                        imgSrc !== null
                        ?
                            (
                                <img
                                    className="imageHacker-hero-pic"
                                    src={imgSrc}
                                    alt="ImageHacker Hero Pic"
                                />
                            )
                        :
                            null
                    }
                    <h1 className="my-10 text-5xl font-bold">{title}</h1>
                    {
                        content
                        ? 
                        (<p className="py-6">{content}</p>)
                        :
                        null
                    } 
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