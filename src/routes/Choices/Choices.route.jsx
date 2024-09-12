import Hero from "../../components/Hero/Hero.component";
import ChoicesGrid from "../../components/ChoicesGrid/ChoicesGrid.component";
import options from "../../assets/pics/options.png";

function Choices()
{
    return (
        <div className="bg-base-200 w-screen h-screen grid-rows-2" data-theme="dark">
            <Hero 
                title="Options"
                imgSrc={options}
                content="Choose an option"
            />
            <ChoicesGrid />
        </div>
    );
}

export default Choices;