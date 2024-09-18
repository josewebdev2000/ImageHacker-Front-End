import ChoiceCard from "../ChoiceCard/ChoiceCard.component";

function ChoicesGrid()
{
    return (
        <div className="my-0 bg-base-200 flex justify-center align-center pb-8">
            <div className="bg-base-200 w-6/12 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                <ChoiceCard />
                <ChoiceCard />
                <ChoiceCard />
                <ChoiceCard />
                <ChoiceCard />
                <ChoiceCard />
            </div>
        </div>
    );
}

export default ChoicesGrid;