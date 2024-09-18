import BtnLink from "../BtnLink/BtnLink.component";

function ChoiceCard({cardTitle, cardContent, imgSrc, routeUrl})
{
    return (
        <div className="card bg-neutral-500 image-full l:w-1/3 m:w-2/4 s:w-full shadow-xl">
            <figure>
                <img
                src={imgSrc}
                alt={`${cardTitle} Image`} />
            </figure>
            <div className="card-body">
                <h2 className="card-title flex justify-center items-center text-center">{cardTitle}</h2>
                <p className="mt-4 text-center">{cardContent}</p>
                <div className="card-actions justify-center">
                    <BtnLink 
                        text="Go"
                        classStr="btn btn-info text-white uppercase"
                        route={routeUrl}
                    />
                </div>
            </div>
        </div>
    );
}

export default ChoiceCard;