import { Link } from "react-router-dom";

function ActionBanner(props) {
    const body = props.content?.map(paragraph => 
        <p className="font-body text-xl">
            {paragraph}
        </p>
    );

    return(
        <div className="mt-8 py-5 font-outline text-white bg-gradient-to-r from-dark/10 from-10% via-dark/30 to-dark/10 to-90%">
            <div className="text-center">
                <h1 className="pb-3 font-title font-bold">
                    {props.title}
                </h1>
                {body}
                <Link to="/contact">
                    <button className="mt-4 bg-almost-white hover:bg-gray-200 text-dark font-semibold py-2 px-10 border border-dark rounded-full drop-shadow-md shadow-dark">
                        {props.call}
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ActionBanner;