
function TestimonialCard(props) {
    return (
        <div className="flex-column justify-between min-h-full flex border-1 px-4 bg-cyan-100/50 border-dark shadow-md">
            <div className="w-32 h-32 mt-5 mb-4 mx-auto">
                <img src={props.imgURL} className="content-start w-32 h-32 mx-auto border-2 bg-almost-white rounded-full border-dark" alt="Testimonial profile" />
            </div>
            <p className="h-80 mt-2 text-lg content-center font-nav text-center">
                "{props.statement}"
            </p>
            <div>
                <p className="mb-0 text-lg font-body font-bold text-center ">
                    - {props.name}
                </p>
                <p className="mb-2 font-body text-md text-center italic">
                    {props.about}
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard;