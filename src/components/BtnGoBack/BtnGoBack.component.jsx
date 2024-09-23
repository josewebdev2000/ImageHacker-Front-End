import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

function BtnGoBack()
{
    // Import navigator
    const navigate = useNavigate();

    // Always go back to the previous page
    const goBackHandler = () => navigate(-1);

    return (
        <div className="tooltip tooltip-top go-back-btn" data-tip="Go Back">
            <button 
                className="btn btn-circle btn-lg btn-ghost"
                onClick={goBackHandler}
            >
                <ArrowLeftIcon className="text-slate-50"/>
            </button>
        </div>
    );
}

export default BtnGoBack;