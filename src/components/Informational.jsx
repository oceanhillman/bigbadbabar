
function Informational(props) {
    const body = props.content?.map(paragraph => 
        <p className="font-body text-xl">
            {paragraph}
        </p>
    );

    return(
        <div className="container px-5 text-dark">
                <h1 className="pb-3 font-title text-center font-bold">
                    {props.title}
                </h1>
                {body}
        </div>
    );
}

export default Informational;