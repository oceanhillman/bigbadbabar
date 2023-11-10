
function PhotoBanner(props) {

    return (
        <div className="grid grid-cols-2 gap-x-10 gap-y-3 w-full tablet:py-4 laptop:px-20 laptop:bg-moonstone-blue">
            <img src={props.images[0]} className="col-span-2 laptop:col-span-1 place-self-center laptop:place-self-end laptop:mx-0 w-1/2 mobile-l:w-1/3 laptop:h-[300px] laptop:w-[500px]" />
            <img src={props.images[1]} className="col-span-2 laptop:col-span-1 place-self-center laptop:place-self-start laptop:mx-0 w-1/2 mobile-l:w-1/3 laptop:h-[300px] laptop:w-[500px]" />
        </div>
    )
}

export default PhotoBanner;