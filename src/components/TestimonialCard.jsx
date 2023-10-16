
function TestimonialCard(props) {
    return (
        <div className="flex flex-column justify-between w-3/4 min-h-full md:w-[500px] md:h-[600px] mx-auto my-5 px-3 px-md-5 bg-almost-white/50 border-1 border-teal-blue">
            <div className="mt-3 mt-md-5 mb-3 mb-md-4">
                <img src={props.imgURL} className="content-start w-20 h-20 tablet:w-32 tablet:h-32 mx-auto border-2 rounded-full border-dark" alt="Testimonial profile" />
            </div>
            <p className="h-[350px] mobile-m:h-64 mobile-l:h-96 mt-lg-2 text-sm mobile-l:text-lg content-center font-sans text-center text-dark whitespace-pre-wrap">
                "{props.statement}"
            </p>
            <div className="text-sm mobile-l:text-base text-center text-teal-blue font-serif">
                <p className="font-bold">
                    - {props.name}
                </p>
                <p className="-mt-3 mb-2 italic">
                    {props.about}
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard;