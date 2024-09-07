import { useNavigate } from "react-router-dom";

function BtnLink({text, route, classStr})
{
    // Import navigator
    const navigate = useNavigate();

    const goToChosenRoute = () => navigate(route);

    return (
    <button onClick={goToChosenRoute} className={classStr}>{text}</button>
);
}

export default BtnLink;