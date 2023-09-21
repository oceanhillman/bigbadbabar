
function PageBanner(props) {
    const body = props.content?.map(paragraph => 
        <p className="font-body text-xl">
            {paragraph}
        </p>
    );

    return(
        <div className="container mx-auto my-5 py-6 text-dark">
            <div class="columns-lg" className="mx-40 text-center">
                <h1 className="pb-3 font-title font-bold">
                    {props.title}
                </h1>
                {body}
            </div>
        </div>
    );
}

export default PageBanner;