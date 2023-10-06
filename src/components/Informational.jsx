
function Informational(props) {
    const body = props.content?.map((paragraph, index) => 
        <p className="font-body text-xl" key={index}>
            {paragraph}
        </p>
    );

    return(
        <div className={`${"col-span-" + props.maxColumns} lg:col-span-1 mx-4 text-dark whitespace-pre-wrap`}>
            <h2 className="m-0 pb-4 font-title text-center font-bold">
                {props.title}
            </h2>
            {body}
        </div>
    );
}

export default Informational;