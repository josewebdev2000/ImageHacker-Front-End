import ChoiceCard from "../ChoiceCard/ChoiceCard.component";

// Import pics to use
import bgRemove from "../../assets/pics/bg_remove.png";
import colorFilter from "../../assets/pics/color_filter.png";
import crop from "../../assets/pics/crop.png";
import conversion from "../../assets/pics/conversion.png";
import resizing from "../../assets/pics/resizing.png";
import rotate from "../../assets/pics/rotate.png";

function ChoicesGrid()
{
    return (
        <div className="my-0 bg-base-200 flex justify-center align-center pb-8">
            <div className="bg-base-200 w-9/12 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                <ChoiceCard
                    cardTitle="Image Bg Removal"
                    cardContent="For any pics that would look great without that nasty background"
                    imgSrc={bgRemove}
                    routeUrl=""
                />
                <ChoiceCard
                    cardTitle="Image Color Filtering"
                    cardContent="Wanna create your own Instagram filters?"
                    imgSrc={colorFilter}
                    routeUrl=""
                />
                <ChoiceCard
                    cardTitle="Image Cropping"
                    cardContent="Catch a small section out of your favorite pics"
                    imgSrc={crop}
                    routeUrl=""
                />
                <ChoiceCard
                    cardTitle="Image Conversion"
                    cardContent="Need to change a PNG to a JPG or vice versa or another format?"
                    imgSrc={conversion}
                    routeUrl=""
                />
                <ChoiceCard
                    cardTitle="Image Resizing"
                    cardContent="Make your pics bigger or smaller as you wish"
                    imgSrc={resizing}
                />
                <ChoiceCard
                    cardTitle="Image Rotation"
                    cardContent="Wanna get a new viewpoint flipping your cards upside down?"
                    imgSrc={rotate}
                />
            </div>
        </div>
    );
}

export default ChoicesGrid;