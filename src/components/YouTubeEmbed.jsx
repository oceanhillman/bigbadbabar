
function YoutubeEmbed(props) {
    return (
            <iframe
                className="mb-5 shadow w-full h-[250px] sm:h-[300px] lg:h-[320px]"
                src={`https://www.youtube.com/embed/${props.embedId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube"
            />
    )   
};

export default YoutubeEmbed;