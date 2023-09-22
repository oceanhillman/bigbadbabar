
function PageBanner(props) {
    const body = props.content?.map(paragraph => 
        <p className="font-body text-xl">
            {paragraph}
        </p>
    );

    return(
        <div className="mt-8 py-5 text-white border-y border-dark/10 bg-gradient-to-r from-dark/10 from-10% via-dark/30 to-dark/10 to-90%">
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