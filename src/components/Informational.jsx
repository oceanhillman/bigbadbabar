
function Informational(props) {

    return(
        <div className="col-span-1 mx-4 text-dark whitespace-pre-wrap">
            <h2 className="mb-3 font-nav text-center">
                {props.title}
            </h2>
            
            {props.content?.map((paragraph, index) => 
                <p className="font-body tablet:text-lg text-center" key={index}>
                    {paragraph}
                </p>
            )}
        </div>
    );
}

export default Informational;