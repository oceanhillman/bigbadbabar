
function Informational(props) {
    const body = props.content?.map(paragraph => 
        <p className="font-body text-xl">
            {paragraph}
        </p>
    );

    return(
        <div className="col-span-2 lg:col-span-1 container mt-4 px-lg-5 text-dark whitespace-pre-wrap">
                <h2 className="pb-4 font-title text-center font-bold">
                    {props.title}
                </h2>
                {body}
        </div>
    );
}

export default Informational;