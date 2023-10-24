import { Link } from "react-router-dom";

function CtaBanner(props) {
    
    return(
        <div className="m-4 text-dark">
            <div className="text-center">
                <h1 className="font-serif">
                    {props.title}
                </h1>

                {props.bodyText?.map((paragraph, index) => 
                    <p className="my-[10px] font-sans tablet:text-xl" key={index}>
                        {paragraph}
                    </p>
                )}
                
                <Link to={props.buttonUrl}>
                    <button className="mt-2 bg-teal-blue hover:bg-moonstone-blue text-white font-semibold py-2 px-10 rounded-3xl">
                        {props.buttonText}
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default CtaBanner;