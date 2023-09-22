
function TestimonialCard(props) {
    return (
        <div className="flex-column justify-between min-h-full flex border-1 px-4 bg-cyan-200/20 border-dark shadow-md">
            <div className="w-32 h-32 my-4 mx-auto">
                <img src={props.imgURL} className="content-start w-32 h-32 mx-auto border-2 rounded-full border-dark" alt="Testimonial profile" />
            </div>
            <p className="h-64 mt-4 content-center font-body text-justify">
                "{props.statement}"
            </p>
            <div>
                <p className="mb-0 font-body font-bold text-center ">
                    - {props.name}
                </p>
                <p className="mt-0 font-body text-sm text-center italic">
                    {props.about}
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard;