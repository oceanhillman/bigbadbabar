import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function PhotoBanner(props) {

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });

    return (
        <div className="grid grid-cols-2 gap-x-10 gap-y-3 w-full tablet:py-4 laptop:px-20 laptop:bg-moonstone-blue">
            <a className="col-span-2 laptop:col-span-1 place-self-center laptop:place-self-end laptop:mx-0 w-1/2 mobile-l:w-1/3 laptop:h-[300px] laptop:w-[500px] cursor-pointer">
                <img data-fancybox data-caption={props.captions[0]} src={props.images[0]} className="w-full h-full laptop:h-[300px] laptop:w-[500px]" />
            </a>
            <a className="col-span-2 laptop:col-span-1 place-self-center laptop:place-self-start laptop:mx-0 w-1/2 mobile-l:w-1/3 laptop:h-[300px] laptop:w-[500px] cursor-pointer">
                <img data-fancybox data-caption={props.captions[1]} src={props.images[1]} className="w-full h-full laptop:h-[300px] laptop:w-[500px]" />
            </a>
        </div>
    )
}

export default PhotoBanner;