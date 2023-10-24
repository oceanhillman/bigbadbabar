
function Informational(props) {

    return(
        <div className={`${"col-span-" + props.maxColumns} lg:col-span-1 mx-4 text-dark whitespace-pre-wrap`}>
            <h2 className="mb-3 font-serif text-center">
                {props.title}
            </h2>
            
            {props.content?.map((paragraph, index) => 
                <p className="font-sans text-xl text-center" key={index}>
                    {paragraph}
                </p>
            )}
        </div>
    );
}

export default Informational;