
function TestimonialCard(props) {
    return (
        <div className="flex-column flex justify-between border-1 px-4 border-dark bg-dark/5">
            <div className="w-32 h-32 my-4 mx-auto">
                <img src={props.imgURL} className="content-start w-32 h-32 mx-auto border-2 rounded-full border-dark" alt="Testimonial profile" />
            </div>
            <div className="flex-2  ">
                <p className="content-center font-body text-justify">
                    "{props.statement}"
                </p>
                <div className="flex-1">
                    <p className="mb-0 font-body font-bold text-center ">
                        - {props.name}
                    </p>
                    <p className="mt-0 font-body text-sm text-center italic">
                        {props.about}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;