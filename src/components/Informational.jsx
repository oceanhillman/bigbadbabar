
function Informational(props) {
    const body = props.content?.map(paragraph => 
        <p className="font-body text-xl">
            {paragraph}
        </p>
    );

    return(
        <div className="container px-5 text-dark">
                <h2 className="pb-4 font-title text-center font-bold">
                    {props.title}
                </h2>
                {body}
        </div>
    );
}

export default Informational;