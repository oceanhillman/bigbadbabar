
function TestimonialCard(props) {
    return (
        <div className="flex-column w-3/4 md:w-[500px] md:h-[600px] mx-auto my-5 justify-between min-h-full flex border-1 px-3 px-md-5 bg-almost-white/70 border-dark shadow-md">
            <div className="mt-3 mt-md-5 mb-3 mb-md-4">
                <img src={props.imgURL} className="content-start w-20 h-20 sm:w-32 sm:h-32 mx-auto border-2 bg-almost-white rounded-full border-dark" alt="Testimonial profile" />
            </div>
            <p className="h-96 lg:h-full mt-lg-2 text-sm xs:text-base md:text-lg content-center font-nav text-justify whitespace-pre-wrap">
                "{props.statement}"
            </p>
            <div>
                <p className="text-md lg:text-lg font-body font-bold text-center ">
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