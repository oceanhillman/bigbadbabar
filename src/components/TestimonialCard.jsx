
function TestimonialCard(props) {
    return (
        <div className="flex flex-column justify-between w-3/4 h-[600px] mobile-m:h-[475px] mobile-l:h-[630px] laptop:w-[500px] laptop:h-[600px] mx-auto my-5 bg-almost-white/80 shadow">
            <div className="">
                <img src={props.imgURL} className="w-24 h-24 tablet:w-32 tablet:h-32 mt-[20px] tablet:mt-[60px] mx-auto border-2 rounded-full border-dark" alt="Testimonial profile" />
            </div>
            <p className="-mt-[0px] mobile-m:mt-[10px] tablet:-mt-[50px] laptop:mt-0 px-[15px] mobile-m:px-[20px] tablet:px-[55px] text-center whitespace-pre-wrap tablet:text-lg font-body text-dark ">
                "{props.statement}"
            </p>
            <div className="text-center text-sm mobile-l:text-base font-serif text-teal-blue">
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