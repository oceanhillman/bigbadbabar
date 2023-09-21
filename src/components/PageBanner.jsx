
function PageBanner(props) {
    const body = props.content?.map(paragraph => 
        <p className="font-body text-xl">
            {paragraph}
        </p>
    );

    return(
        <div className="my-5 py-5 text-almost-white bg-dark bg-opacity-50">
            <div className="text-center">
                <h1 className="pb-3 font-title font-bold">
                    {props.title}
                </h1>
                {body}
            </div>
        </div>
    );
}

export default PageBanner;